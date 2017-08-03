(function() {
    'use strict';

    angular
        .module('addressApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function stateConfig($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('address');

        $stateProvider
        .state('address', {
            url: '/address',
            templateUrl: 'app/address/address.html',
            controller: 'AddressController',
            controllerAs: 'vm'
        })
        .state('address-new', {
            url: '/address-new',
            templateUrl: 'app/address/address-new-edit.html',
            controller: 'AddressNewEditController',
            controllerAs: 'vm'
        })
        .state('address-edit', {
            url: '/edit/:id',
            templateUrl: 'app/address/address-new-edit.html',
            controller: 'AddressNewEditController',
            controllerAs: 'vm',
        });
    }

})();
