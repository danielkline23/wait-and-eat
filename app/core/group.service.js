(function() {
  "use strict"
  
  angular
    .module("app.core")
    .factory("groupService", groupService);
  
  groupService.$inject = ["$firebaseArray", "firebaseDataService"];
  
  function groupService($firebaseArray, firebaseDataService) {
    var service = {
      Group: Group,
      groups: $firebaseArray(firebaseDataService.root.child("groups"))
    };
    
    return service;
    
    ///////////////
    
    function Group(name, phone, size) {
      this.name = "";
      this.phone = "";
      this.size = "";
      this.seated = false;
      this.notified = false;
    }
  }
})();