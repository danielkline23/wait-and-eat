(function() {
  "use strict";
  
  angular
    .module("app.auth")
    .config(authConfigFunction);
  
  authConfigFunction.$inject = ["$routeProvider"];
  
  function authConfigFunction($routeProvider) {
    $routeProvider.when("/register", {
      templateUrl: "app/auth/register.html",
      controller: "AuthController",
      controllerAs: "vm"
    });
    
    $routeProvider.when("/login", {
      templateUrl: "app/auth/login.html",
      controller: "AuthController",
      controllerAs: "vm"
    });
  }
  
})();