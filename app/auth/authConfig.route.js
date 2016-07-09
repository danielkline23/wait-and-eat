(function() {
    "use strict";
    
    angular
        .module("app_ver2.auth")
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