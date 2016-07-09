(function() {
    "use strict";
    
    angular
        .module("app_ver2.landing")
        .config(landingConfigFunction);

    landingConfigFunction.$inject = ["$routeProvider"];
    
    function landingConfigFunction($routeProvider) {
        $routeProvider.when("/", {
            templateUrl: "app/landing/landing.html"
        });
    }
    
})();