angular.module('app').service('unsplashService', function($http) {

  this.getRandomPhoto = function(keyword) {
    return 'https://source.unsplash.com/category/food/?' + keyword;
  }


})
