(function() {
  "use strict";
  
  angular
    .module("app.core")
    .factory("smsService", smsService);
  
  smsService.$inject = ["firebaseDataService"];

  function smsService(firebaseDataService) {
    var service = {
      sendSMS: sendSMS
    };
    
    return service;
    
    
    /////////////////
  
    
    function sendSMS(group, groups) {
      var newSMS = {
        name: group.name,
        phone: group.phone,
        size: group.size
      };
      firebaseDataService.SMSs.push(newSMS);
      group.notified = true;
      groups.$save(group);
    }
    
  }

})();