(function() {
    'use strict';
    angular
        .module('bookApp')
        .factory('BookService', BookService);

    BookService.$inject = ['$http'];

    function BookService ($http) {
        var bookList = [];

        var bookFactory = {

            save: function (bookList) {
                this.bookList = bookList;
            },

            getBookList: function() {
                return bookList;
            }
        };

        return bookFactory;
    }
})();
