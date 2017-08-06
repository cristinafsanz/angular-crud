(function() {
    'use strict';

    angular
        .module('bookApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function stateConfig($stateProvider, $urlRouterProvider) {

        $stateProvider
        .state('book', {
            parent: 'home',
            url: '/book',
            params: {
                init: false
           },
            templateUrl: 'app/book/book.html',
            controller: 'BookController',
            controllerAs: 'vm'
        })
        .state('book-new', {
            parent: 'home',
            url: '/book-new',
            templateUrl: 'app/book/book-new-edit.html',
            controller: 'BookNewEditController',
            controllerAs: 'vm'
        })
        .state('book-edit', {
            parent: 'home',
            url: '/edit/:ISBN',
            templateUrl: 'app/book/book-new-edit.html',
            controller: 'BookNewEditController',
            controllerAs: 'vm',
        });
    }

})();
