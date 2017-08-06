(function() {
    'use strict';
    angular
        .module('bookApp')
        .factory('BookService', BookService);

    BookService.$inject = ['$http'];

    function BookService ($http) {

        var configParams = {headers: {'Content-Type': 'application/json'}, withCredentials: false};

        var bookList = [];

        var bookFactory = {

            initializeBookList: function() {
                return $http.get('https://gist.githubusercontent.com/finizen/4851eb010d3687d39b3e3b2f7b500aaf/raw/e84bbc6ef7a42789c4100b0bff5c1a33a24c7a0e/books.json',
                    configParams).then(function (response) {
                        var jsonBooks = response.data;
                        bookList = jsonBooks ? jsonBooks.books : [];
                });
            },

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
