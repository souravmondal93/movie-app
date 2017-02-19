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
        function MovieCardController($scope, $window) {

            var vm = this;

            vm.movie = $scope.movie;

            vm.openMovie = openMovie;

            /*
            *   Function to open movie url
            */
            function openMovie(url) {
                $window.open(url);
            }

        }
    }

})();

