(function() {
  "use strict";
  
  angular
    .module("app.landing")
    .config(landingConfigFunction);
  
  landingConfigFunction.$inject = ["$routeProvider"];
  
  function landingConfigFunction($routeProvider) {
    $routeProvider.when("/", {
      templateUrl: "app/landing/landing.html"
    })
    
  }
  
})();