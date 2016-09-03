(function() {
  "use strict";
  
  angular
  .module("app", [
    //Angular module
    "ngRoute",

    //Third-party modules
    "firebase",
    
    //Custom modules
    "app.core",
    "app.auth",
    "app.landing",
    "app.layout",
    "app.waitlist"
  ])
  .config(configFunction)
  .run(runFunction);
  
  configFunction.$inject = ["$routeProvider"];
  
  function configFunction($routeProvider) {
    $routeProvider.otherwise({
      redirectTo: "/"
    });
  }
  
  runFunction.$inject = ["$rootScope", "$location"];
  
  function runFunction($rootScope, $location) {
    $rootScope.$on("$routeChangeError", function(event, next, previous, error) {
      $location.path("/");
    });
  }
  
})();