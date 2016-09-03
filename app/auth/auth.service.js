(function() {
  "use strict";
  
  angular
    .module("app.core")
    .factory("authService", authService);
  
  authService.$inject = ["$firebaseAuth", "firebaseDataService", "groupService"];
  
  function authService($firebaseAuth, firebaseDataService, groupService) {
    var firebaseAuthObject = $firebaseAuth();
    
    var service = {
      firebaseAuthObject: firebaseAuthObject,
      register: register,
      login: login,
      logout: logout,
      isLoggedIn: isLoggedIn,
      sendWelcomeEmail: sendWelcomeEmail
    };
      

    return service;
    
    
    //////////////
    
    
    function register(restaurant) {
      return firebaseAuthObject.$createUserWithEmailAndPassword(restaurant.email, restaurant.password);
    }
    
    function login(restaurant) {
      return firebaseAuthObject.$signInWithEmailAndPassword(restaurant.email, restaurant.password);
    }
    
    function logout() {
      firebaseAuthObject.$signOut();
      groupService.reset();
    }
    
    function isLoggedIn(restaurant) {
      return firebaseAuthObject.$getAuth();
    }
    
    function sendWelcomeEmail(emailAddress) {
      firebaseDataService.emails.push({
        emailAddress: emailAddress
      });
    }
  }
})();