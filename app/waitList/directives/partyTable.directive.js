(function () {
    "use strict";
    
    angular
        .module("app_ver2.waitList")
        .directive("wePartyTable", wePartyTable);
    
    function wePartyTable() {
        return {
            templateUrl: "app/waitList/directives/partyTable.html",
            restrict: "E",
            controller: PartyTableController,
            controllerAs: "vm",
            bindToController: true,
            scope: {
                parties: "="
            }
        }
    }
    PartyTableController.$inject = ["smsService"];
    
    function PartyTableController(smsService) {
        var vm = this;
        
        vm.removeParty = removeParty;
        vm.sendSMS = sendSMS;
        vm.toggleSeated = toggleSeated;
        
        function removeParty(party) {
            vm.parties.$remove(party);
        }
        
        function sendSMS(party) {
            smsService.sendSMS(party, vm.parties);
        }
        
        function toggleSeated(party) {
            vm.parties.$save(party);
        }
        
    }
    
})();