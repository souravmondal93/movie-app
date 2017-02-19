(function() {
    'use strict';

    angular
        .module('movieApp')
        .factory('Movies', function(API_URL, $http) {

            var self = this;
            self.movies = null;

            function getMoviesFromAPI() {
                return $http({
                    method: 'GET',
                    url: API_URL
                });
            }

            function getMovies() {
                return self.movies;
            }

            function setMovies(movies) {
                self.movies = movies;
            }

            return {
                getMoviesFromAPI: getMoviesFromAPI,
                getMovies: getMovies,
                setMovies: setMovies
            }
        })

})();
