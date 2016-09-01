(function() {
  "use strict";
  
  angular
    .module("app.waitlist")
    .controller("WaitlistController", WaitlistController);
  
  WaitlistController.$inject = ["$firebaseArray"];
  
  function WaitlistController($firebaseArray) {
    
    var vm = this;
    
    var fireGroups = firebase.database().ref("groups");
    var fireSMSs = firebase.database().ref("SMSs");
    
    vm.newGroup = new Group();
    vm.groups = $firebaseArray(fireGroups);
    vm.addGroup = addGroup;
    vm.deleteGroup = deleteGroup;
    vm.sendSMS = sendSMS;
    vm.toggleSeated = toggleSeated;
    
    
    function Group(name, phone, size) {
      this.name = "";
      this.phone = "";
      this.size = "";
      this.seated = false;
      this.notified = false;
    }
    
    function addGroup() {
      vm.groups.$add(vm.newGroup);
      vm.newGroup = new Group();
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