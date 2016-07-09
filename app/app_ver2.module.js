(function() {
    "use strict";
    
    angular
        .module("app_ver2", [
            //Angular modules
            "ngRoute",

            //Firebase modules
            "firebase",
        
            //Custom modules
            "app_ver2.auth",
            "app_ver2.core",
            "app_ver2.landing",
            "app_ver2.layout",
            "app_ver2.waitList"
    ])
    .config(configFunction)
    .run(runFunction);
    
    configFunction.$inject = ["$routeProvider"];
    
    function configFunction($routeProvider)  {
        $routeProvider.otherwise({
            redirectTo: "/"
        });
    }
    
    runFunction.$inject = ["$rootScope", "$location"];
    
    function runFunction($rootScope, $location) {
        $rootScope.$on("$routeChangeError", function(event, next, previous, error) {
            if (error === "AUTH_REQUIRED") {
                $location.path("/");
            }
        });
    }
    
})();