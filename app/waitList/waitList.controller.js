(function() {
    "use strict"
    
    angular
        .module("app_ver2.waitList")
        .controller("WaitListController", WaitListController);
    
    WaitListController.$inject = ["partyService", "restaurant"];
    
    function WaitListController(partyService, restaurant) {
        var vm = this;
        vm.parties = partyService.getPartiesByRestaurant(restaurant.uid);
    }
    
})();