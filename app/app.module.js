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
    "app.waitlist"
  ]);
  
})();