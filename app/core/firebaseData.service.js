(function() {
    "use strict";
    
    angular
        .module("app_ver2")
        .factory("firebaseDataService", firebaseDataService);
    
    firebaseDataService.$inject = ["FIREBASE_URL"];
    
    function firebaseDataService(FIREBASE_URL) {
        var root = new Firebase(FIREBASE_URL);
        
        var service = {
            root: root,
            restaurants: root.child("restaurants"),
            emails: root.child("emails"),
            SMSs: root.child("SMSs")
        };
        
        return service;
        
    }
    
})();