(function() {
    "use strict";
    
    angular
        .module("app_ver2.auth")
        .factory("authService", authService);

    authService.$inject = ["$firebaseAuth", "firebaseDataService", "partyService"];
    
    function authService($firebaseAuth, firebaseDataService, partyService) {
        var firebaseAuthObject = $firebaseAuth(firebaseDataService.root);
        
        var service = {
            firebaseAuthObject: firebaseAuthObject,
            register: register,
            login: login,
            logout: logout,
            isLoggedIn: isLoggedIn,
            sendWelcomeEmail: sendWelcomeEmail
        };
        
        return service;
        
        ///////////////
        
        function register(restaurant) {
            return firebaseAuthObject.$createUser(restaurant);
        }
        
        function login(restaurant) {
            return firebaseAuthObject.$authWithPassword(restaurant);
        }
        
        function logout() {
            partyService.reset();
            return firebaseAuthObject.$unauth();
        }
        
        function isLoggedIn() {
            return firebaseAuthObject.$getAuth();
        }
        
        function sendWelcomeEmail(emailAddress) {
            firebaseDataService.emails.push({
                emailAddress: emailAddress
            });
        }
    }
})();