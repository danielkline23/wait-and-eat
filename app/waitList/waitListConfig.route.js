(function() {
  "use strict";
  
  angular
    .module("app.waitlist")
    .config(waitlistConfigFunction);
  
  waitlistConfigFunction.$inject = ["$routeProvider"];
  
  function waitlistConfigFunction($routeProvider) {
    $routeProvider.when("/waitlist", {
      templateUrl: "app/waitlist/waitlist.html",
      controller: "WaitlistController",
      controllerAs: "vm",
      resolve: {restaurant: resolveRestaurant}
    });
  }
  
  resolveRestaurant.$inject = ["authService"];
  
  function resolveRestaurant(authService) {
    return authService.firebaseAuthObject.$requireSignIn();
  }
})();