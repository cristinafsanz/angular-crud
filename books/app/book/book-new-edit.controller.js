(function() {
    'use strict';

    angular
        .module('bookApp')
        .controller('BookNewEditController', BookNewEditController);

    BookNewEditController.$inject = ['$timeout', '$scope', '$stateParams', '$state', 'BookService'];

    function BookNewEditController($timeout, $scope, $stateParams, $state, BookService) {
        var vm = this,
            counter = 0,
            ISBN = $stateParams.ISBN,
            bookCollection = BookService.getBookList();

        vm.saveEdit = saveEdit;

        loadIfEdit();

        ///

        function loadIfEdit() {
            if(ISBN) {
                var index = getItemPosition(ISBN);
                vm.book = bookCollection[index];
            }
        }

        function saveEdit() {
            if(ISBN) {
                var index = getItemPosition(ISBN);
                bookCollection[index] = vm.book;
            }
            else {
                bookCollection.push(vm.book);
            }
            BookService.save(bookCollection);
            $state.go('book', {});
        }

        function getItemPosition(ISBN) {
            var position;
            for(var i = 0; bookCollection.length; i++) {
                if(bookCollection[i].ISBN === ISBN) {
                    position = i;
                    break;
                }
            }
            return position;
        }
    }
})();
