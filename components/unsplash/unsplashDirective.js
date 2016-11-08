angular.module('app').directive('unsplashDirective', function() {
  return {
    restrict: 'EA',
    templateUrl: './components/unsplash/unsplash.html',
    scope: {},
    link: function(scope, element, attributes) {

    },
    controller: 'unsplashController'
  }
})
