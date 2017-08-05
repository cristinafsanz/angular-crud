(function() {
    'use strict';

    angular
        .module('bookApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function stateConfig($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('home');

        $stateProvider
        .state('home', {
            url: '',
            templateUrl: 'app/home.html',
            controller: 'HomeController',
            controllerAs: 'vm'
        });
    }

})();
