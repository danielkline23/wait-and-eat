(function() {
    "use strict";
    
    angular
        .module("app_ver2.core")
        .factory("partyService", partyService);
    
    partyService.$inject = ["$firebaseArray", "firebaseDataService"];
    
    function partyService($firebaseArray, firebaseDataService) {
        
        var parties = null;
        
        var service = {
            getPartiesByRestaurant: getPartiesByRestaurant,
            Party: Party,
            reset: reset
        };
        
        return service;
        
        ///////////////
        
        function Party() {
            this.name = "";
            this.phone = "";
            this.size = "";
            this.seated = false;
            this.smsNotified = false;
        }
        
        function getPartiesByRestaurant(restaurantId) {
            if (!parties) {
                parties = $firebaseArray(firebaseDataService.restaurants.child(restaurantId).child("parties"));
            }
            return parties;
        }
        
        function reset() {
            if (parties) {
                parties.$destroy();
                parties = null;
            }
        }
    }
    
})();