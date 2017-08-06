(function() {
    'use strict';

    angular.module('bookApp').controller('BookController', BookController);

    BookController.$inject = ['$scope', '$state', '$stateParams', 'BookService'];

    function BookController($scope, $state, $stateParams, BookService) {
        var vm = this;

        BookService.initializeBookList().then(function () {
            vm.bookList = BookService.getBookList();
        }).catch(function () {
            vm.bookList = [];
        });
    }
})();
