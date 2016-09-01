(function() {
  "use strict";
  
  angular
    .module("app.waitlist")
    .controller("WaitlistController", WaitlistController);
  
  WaitlistController.$inject = ["$firebaseArray", "groupService"];
  
  function WaitlistController(groupService) {
    
    var vm = this;
    
    var fireSMSs = firebase.database().ref("SMSs");
    
    vm.newGroup = new groupService.Group();
    vm.groups = groupService.groups;
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
      var newSMS = {
        name: group.name,
        phone: group.phone,
        size: group.size
      };
      fireSMSs.push(newSMS);
      group.notified = true;
      vm.groups.$save(group);
    }
      
    function toggleSeated(group) {
      vm.groups.$save(group);
    }
  }
  
})();