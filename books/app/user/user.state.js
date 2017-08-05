(function() {
    'use strict';

    angular
        .module('bookApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function stateConfig($stateProvider, $urlRouterProvider) {

        $stateProvider
        .state('user', {
            parent: 'home',
            url: '/user',
            templateUrl: 'app/user/user.html',
            controller: 'UserController',
            controllerAs: 'vm'
        })
        .state('user-detail', {
            parent: 'home',
            url: '/user-detail',
            templateUrl: 'app/user/user-detail.html',
            controller: 'UserDetailController',
            controllerAs: 'vm'
        });
    }

})();
