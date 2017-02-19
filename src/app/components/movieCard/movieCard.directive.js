(function() {
    'use strict';

    angular
        .module('movieApp')
        .directive('movieCard', movieCard);

    /** @ngInject */
    function movieCard() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/components/movieCard/movieCard.html',
            controller: MovieCardController,
            controllerAs: 'movieCard',
            scope: {
                movie: '='
            }
        };

        return directive;

        /** @ngInject */
        function MovieCardController($scope, $log, $window) {

            var vm = this;

            $log.info($scope.movie);

            vm.movie = $scope.movie;

            vm.openMovie = openMovie;

            function openMovie(url) {
                $window.open(url);
            }

        }
    }

})();

