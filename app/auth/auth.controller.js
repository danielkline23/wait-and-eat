(function() {
  "use strict"
  
  angular
    .module("app.auth")
    .controller("AuthController", AuthController);
  
  AuthController.$inject = ["$location", "authService"];
  
  function AuthController($location, authService) {
    var vm = this;
    
    vm.error = null;
    
    vm.register = register;
    vm.login = login;
    
    function register(restaurant) {
      return authService.register(restaurant)
        .then(function() {
          vm.login(restaurant);
        })
      .then(function() {
        return authService.sendWelcomeEmail(restaurant.email);
      })
        .catch(function(error) {
          vm.error = error;
        });
    }
    
    function login(restaurant) {
      return authService.login(restaurant)
        .then(function(restaurant) {
          console.log(restaurant);
        $location.path("/waitlist");
        })
        .catch(function(error) {
          vm.error = error;
        });
    }
    
  }
  
})();