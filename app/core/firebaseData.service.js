(function() {
  "use strict";

  angular
    .module("app.core")
    .factory("firebaseDataService", firebaseDataService);

  function firebaseDataService() {
    var root = firebase.database().ref();

    var service = {
      root: root,
      restaurants: root.child("restaurants"),
      emails: root.child("emails"),
      SMSs: root.child("SMSs")
    };

    return service;
  }
  
})();