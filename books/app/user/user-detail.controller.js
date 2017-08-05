(function() {
    'use strict';

    angular
        .module('bookApp')
        .controller('UserDetailController', UserDetailController);

    UserDetailController.$inject = ['$timeout', '$scope', '$stateParams', '$state', 'UserService'];

    function UserDetailController($timeout, $scope, $stateParams, $state, UserService) {
        var vm = this;
    }
})();
