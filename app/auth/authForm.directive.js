(function() {
    "use strict";
    
    angular
        .module("app_ver2.auth")
        .directive("weAuthForm", weAuthForm);
    
    function weAuthForm() {
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
        
        vm.restaurant = new Restaurant();
        
        function Restaurant() {
            this.email = "";
            this.password = "";
        }
    }
    
})();