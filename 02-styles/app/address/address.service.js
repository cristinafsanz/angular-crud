(function() {
    'use strict';
    angular
        .module('addressApp')
        .factory('AddressService', AddressService);

    AddressService.$inject = ['$http'];

    function AddressService ($http) {
        var personList = [];

        var addressFactory = {

            save: function (personList) {
                this.personList = personList;
            },

            getPersonList: function() {
                return personList;
            }
        };

        return addressFactory;
    }
})();
