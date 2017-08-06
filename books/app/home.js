(function() {
    'use strict';

    angular.module('bookApp').controller('HomeController', HomeController);

    HomeController.$inject = ['$scope', '$state', '$stateParams'];

    function HomeController($scope, $state, $stateParams) {
        var vm = this;

        vm.tabs = [{
            title: 'Libros',
            state: 'book'
        }, {
            title: 'Usuarios',
            state: 'user'
        }];

        vm.currentTab = 'book';

        vm.onClickTab = function (tab) {
            vm.currentTab = tab.state;
        }

        vm.isActiveTab = function(tabState) {
            return tabState === vm.currentTab;
        }

        $state.go("book", {init: true});
    }
})();
