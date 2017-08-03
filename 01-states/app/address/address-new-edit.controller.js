(function() {
    'use strict';

    angular
        .module('addressApp')
        .controller('AddressNewEditController', AddressNewEditController);

    AddressNewEditController.$inject = ['$timeout', '$scope', '$stateParams', '$state', 'AddressService'];

    function AddressNewEditController($timeout, $scope, $stateParams, $state, AddressService) {
        var vm = this,
            counter = 0,
            id = $stateParams.id,
            addressCollection = AddressService.getPersonList();

        vm.saveEdit = saveEdit;

        loadIfEdit();

        ///

        function loadIfEdit() {
            if(id) {
                var index = getItemPosition(id);
                vm.person = addressCollection[index];
            }
        }

        function saveEdit() {
            if(id) {
                var index = getItemPosition(id);
                addressCollection[index] = vm.person;
            }
            else {
                vm.person.id = generateId();
                addressCollection.push(vm.person);
            }
            AddressService.save(addressCollection);
            $state.go('address', {});
        }

        function getItemPosition(idItem) {
            var position;
            for(var i = 0; addressCollection.length; i++) {
                if(addressCollection[i].id === idItem) {
                    position = i;
                    break;
                }
            }
            return position;
        }

        function generateId() {
            var id = 'id' + counter + (new Date()).getTime();
            counter++;
            return id;
        }
    }
})();
