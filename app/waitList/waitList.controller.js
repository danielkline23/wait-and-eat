(function() {
  "use strict";
  
  angular
    .module("app.waitlist")
    .controller("WaitlistController", WaitlistController);
  
  WaitlistController.$inject = ["smsService", "groupService", "restaurant"];
  
  function WaitlistController(smsService, groupService, restaurant) {
    
    var vm = this;
    
    vm.newGroup = new groupService.Group();
    vm.groups = groupService.getGroupsByRestaurant(restaurant.uid);
    vm.addGroup = addGroup;
    vm.deleteGroup = deleteGroup;
    vm.sendSMS = sendSMS;
    vm.toggleSeated = toggleSeated;
    
    function addGroup() {
      vm.groups.$add(vm.newGroup);
      vm.newGroup = new groupService.Group();
    }
    
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