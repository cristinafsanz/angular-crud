(function() {
    'use strict';

    angular
        .module('bookApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function stateConfig($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('book');

        $stateProvider
        .state('book', {
            parent: 'home',
            url: '/book',
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
            url: '/edit/:id',
            templateUrl: 'app/book/book-new-edit.html',
            controller: 'BookNewEditController',
            controllerAs: 'vm',
        });
    }

})();
