// This build process will enable
// you to use ES2015 and Sass,Bourbon,Neat.
// It will also condense your
// javascript into one file and
// uglify it, and will do the same
// for stylesheets minus uglification.

//1. make gulpfile.js
//2. npm install all dependencies
//3. check all folder paths used in gulpfile
//4. update index.html
//5. run gulp build in command line
//6. run gulp watch in command line
//7. open index.html in browser and you're good to go

var gulp = require('gulp'),
    del = require('del'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    print = require('gulp-print'),
    babel = require('gulp-babel');

var CacheBuster = require('gulp-cachebust'),
    cachebust = new CacheBuster();


gulp.task('build-css', function() {
  // Grab sass stylesheets
  return gulp.src('./components/**/*.scss')
    // Remember the file structure as it is now
    .pipe(sourcemaps.init())
    // Convert .scss to .css
    .pipe(sass({
      // Include Bourbon and Neat
      includePaths: require('node-bourbon').includePaths,
      includePaths: require('node-neat').includePaths
    }))
    // Clear the browser cache
    .pipe(cachebust.resources())
    // Condense stylesheets into one file
    .pipe(concat('styles.css'))
    // Tell the browser how things originally were
    .pipe(sourcemaps.write('./maps'))
    // Save to distribution folder
    .pipe(gulp.dest('./dist'));
})


gulp.task('build-js', function() {
  return gulp.src('./components/**/*.js')
      .pipe(sourcemaps.init())
      .pipe(print())
      .pipe(babel({ presets: ['es2015'] }))
      .pipe(concat('bundle.js'))
      .pipe(sourcemaps.write('./maps'))
      .pipe(gulp.dest('./dist'));
});


gulp.task('clean', function (cb) {
    del([
        'dist'
    ], cb);
});


gulp.task('build', ['clean', 'build-css', 'build-js'], function() {
    return gulp.src('index.html')
        .pipe(cachebust.references())
        .pipe(gulp.dest('dist'));
});


gulp.task('watch', function() {
    return gulp.watch(['./index.html', './components/**/*.scss', './components/**/*.js'], ['build']);
});
