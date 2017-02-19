(function() {
    'use strict';

    angular
        .module('movieApp')
        .directive('appNavbar', appNavbar);

    /** @ngInject */
    function appNavbar() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/components/appNavbar/appNavbar.html',
            controller: AppNavbarController,
            controllerAs: 'navbar',
            bindToController: true
        };

        return directive;

        /** @ngInject */
        function AppNavbarController() {
        }
    }

})();
