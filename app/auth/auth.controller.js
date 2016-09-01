(function() {
  "use strict"
  
  angular
    .module("app.auth")
    .controller("AuthController", AuthController);
  
  AuthController.$inject = ["$location", "$firebaseAuth"];
  
  function AuthController($location, $firebaseAuth) {
    var vm = this;
    var firebaseAuthObject = $firebaseAuth();
    
    vm.restaurant = {
      email: "",
      password: ""
    };
    vm.register = register;
    vm.login = login;
    vm.logout = logout;
    
    function register(restaurant) {
      return firebaseAuthObject.$createUserWithEmailAndPassword(restaurant.email, restaurant.password)
        .then(function() {
          vm.login(restaurant);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
    
    function login(restaurant) {
      return firebaseAuthObject.$signInWithEmailAndPassword(restaurant.email, restaurant.password)
        .then(function(restaurant) {
          console.log(restaurant);
        $location.path("/waitlist");
        })
        .catch(function(error) {
          console.log(error);
        });
    }
    
    function logout() {
      firebaseAuthObject.$signOut();
      $location.path("/");
    }
    
    
  }
  
})();