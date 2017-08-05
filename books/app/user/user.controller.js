(function() {
    'use strict';

    angular.module('bookApp').controller('UserController', UserController);

    UserController.$inject = ['$scope', '$state', '$stateParams', 'UserService'];

    function UserController($scope, $state, $stateParams, UserService) {
        var vm = this;
        vm.personList = UserService.getPersonList();
    }
})();
