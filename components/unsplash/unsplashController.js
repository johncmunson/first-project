angular.module('app').controller('unsplashController', function($scope, unsplashService) {

  var getRandomPhoto = function(keyword) {
    return unsplashService.getRandomPhoto(keyword);
  }

  $scope.photo = getRandomPhoto('fish');


})
