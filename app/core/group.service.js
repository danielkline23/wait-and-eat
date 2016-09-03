(function() {
  "use strict";
  
  angular
    .module("app.core")
    .factory("groupService", groupService);
  
  groupService.$inject = ["$firebaseArray", "firebaseDataService"];
  
  function groupService($firebaseArray, firebaseDataService) {
    var groups = null;
    
    var service = {
      Group: Group,
      getGroupsByRestaurant: getGroupsByRestaurant,
      reset: reset
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
    
    function getGroupsByRestaurant(uid) {
      if (!groups) {
        groups = $firebaseArray(firebaseDataService.restaurants.child(uid).child("groups"));
        return groups;
      }
    }
    
    function reset() {
      if (groups) {
        groups.$destroy();
        groups = null;
      }
    }
  }
  
})();