(function() {
  "use strict";
  
  angular
    .module("app.waitlist")
    .controller("WaitlistController", WaitlistController);
  
  WaitlistController.$inject = ["groupService", "restaurant"];
  
  function WaitlistController(groupService, restaurant) {
    var vm = this;
    vm.groups = groupService.getGroupsByRestaurant(restaurant.uid);
  }
  
})();