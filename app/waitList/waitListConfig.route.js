(function() {
    "use strict";
    
    angular
        .module("app_ver2.waitList")
        .config(waitListConfigFunction);
    
    waitListConfigFunction.$inject = ["$routeProvider"];
    
    function waitListConfigFunction($routeProvider) {
        $routeProvider.when("/waitlist", {
            templateUrl: "app/waitList/waitList.html",
            controller: "WaitListController",
            controllerAs: "vm", 
            resolve: {restaurant: resolveRestaurant}
            
        });
    }

    resolveRestaurant.$inject = ["authService"];
    
    function resolveRestaurant(authService) {
        return authService.firebaseAuthObject.$requireAuth();
    }
    
})();