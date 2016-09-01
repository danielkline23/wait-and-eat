(function() {
  "use strict";
  
  angular
  .module("app", [
    //Angular module
    "ngRoute",

    //Third-party modules
    "firebase",
    
    //Custom modules
    "app.landing",
    "app.waitlist"
  ]);
  
})();