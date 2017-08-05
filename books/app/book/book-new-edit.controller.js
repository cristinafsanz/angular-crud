(function() {
    'use strict';

    angular
        .module('bookApp')
        .controller('BookNewEditController', BookNewEditController);

    BookNewEditController.$inject = ['$timeout', '$scope', '$stateParams', '$state', 'BookService'];

    function BookNewEditController($timeout, $scope, $stateParams, $state, BookService) {
        var vm = this,
            counter = 0,
            id = $stateParams.id,
            bookCollection = BookService.getBookList();

        vm.saveEdit = saveEdit;

        loadIfEdit();

        ///

        function loadIfEdit() {
            if(id) {
                var index = getItemPosition(id);
                vm.book = bookCollection[index];
            }
        }

        function saveEdit() {
            if(id) {
                var index = getItemPosition(id);
                bookCollection[index] = vm.book;
            }
            else {
                vm.book.id = generateId();
                bookCollection.push(vm.book);
            }
            BookService.save(bookCollection);
            $state.go('book', {});
        }

        function getItemPosition(idItem) {
            var position;
            for(var i = 0; bookCollection.length; i++) {
                if(bookCollection[i].id === idItem) {
                    position = i;
                    break;
                }
            }
            return position;
        }

        function generateId() {
            var id = 'id' + counter + (new Date()).getTime();
            counter++;
            return id;
        }
    }
})();
