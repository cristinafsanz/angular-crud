(function() {
    'use strict';
    angular
        .module('bookApp')
        .factory('UserService', UserService);

    UserService.$inject = ['$http'];

    function UserService ($http) {
        var personList = [];

        var userFactory = {

            getPersonList: function() {
                return personList;
            }
        };

        return userFactory;
    }
})();
