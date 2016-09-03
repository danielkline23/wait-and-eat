(function() {
  "use strict";
  
  angular
    .module("app.auth")
    .directive("wneAuthForm", wneAuthForm);
  
  function wneAuthForm() {
    return {
      templateUrl: "app/auth/authForm.html",
      restrict: "E",
      controller: AuthFormController,
      controllerAs: "vm",
      bindToController: true,
      scope: {
        error: "=",
        formTitle: "@",
        submitAction: "&"
      }
    }
  }
  
  function AuthFormController() {
    var vm = this;
    
    vm.restaurant = {
      email: "",
      password: ""
    };
  }
})();