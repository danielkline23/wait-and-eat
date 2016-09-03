(function() {
  "use strict";
  
  angular
    .module("app.waitlist")
    .directive("wneGroupTable", wneGroupTable);
  
  function wneGroupTable() {
    return {
      templateUrl: "app/waitlist/directives/groupTable.html",
      restrict: "E",
      controller: GroupTableController,
      controllerAs: "vm",
      bindToController: true,
      scope: {
        groups: "="
      }
    }
  }
  
  GroupTableController.$inject = ["smsService"];
  
  function GroupTableController(smsService) {
    var vm = this;
    
    vm.deleteGroup = deleteGroup;
    vm.sendSMS = sendSMS;
    vm.toggleSeated = toggleSeated;
    
    ///////////////
    
    function deleteGroup(group) {
      vm.groups.$remove(group);
    }
    
    function sendSMS(group) {
      smsService.sendSMS(group, vm.groups);
    }
      
    function toggleSeated(group) {
      vm.groups.$save(group);
    }
  }
  
})();