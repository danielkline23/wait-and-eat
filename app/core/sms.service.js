(function() {
    "use strict";
    
    angular
        .module("app_ver2.core")
        .factory("smsService", smsService);
    
    smsService.$inject = ["firebaseDataService"];
    
    function smsService(firebaseDataService) {
        
        var service = {
            sendSMS: sendSMS
        };
        
        return service;
        
        ///////////////
        
        function sendSMS(party, parties) {
            var newSMS = {
                name: party.name,
                phoneNumber: party.phone,
                size: party.size
            };
            
            firebaseDataService.SMSs.push(newSMS);
            party.smsNotified = true;
            parties.$save(party);
        }
        
    }
    
})();