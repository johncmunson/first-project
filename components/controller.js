angular.module('app').controller('controller', function($scope, service) {

  $scope.getRestaurants = function() {
    $scope.restaurants = service.getRestaurants();
  }
  $scope.getRestaurants();

  // $('.restaurantList_restaurant').hover(function() {
  //   $(this).addClass('red');
  // })

  $('.restaurantList_restaurant').hover(function(e) {
    $('.map_circle').trigger(e.type);
  })

  $(".restaurantList_restaurant").toggleClass("hover", event.type === 'mouseenter');

})
