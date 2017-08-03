(function() {
    'use strict';

    angular.module('addressApp').controller('AddressController', AddressController);

    AddressController.$inject = ['$scope', '$state', '$stateParams', 'AddressService'];

    function AddressController($scope, $state, $stateParams, AddressService) {
        var vm = this;
        vm.personList = AddressService.getPersonList();
    }
})();
