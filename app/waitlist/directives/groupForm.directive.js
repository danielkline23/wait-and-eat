(function() {
  "use strict";
  
  angular
    .module("app.waitlist")
    .directive("weGroupForm", weGroupForm);
  
  function weGroupForm() {
    return {
      templateUrl: "app/waitlist/directives/groupForm.html",
      restrict: "E",
      controller: GroupFormController,
      controllerAs: "vm",
      scope: {}
    };
    
    GroupFormController.$inject = ["partyService"];
    
    function GroupFormController(partyService) {
      
    }
  }
})();