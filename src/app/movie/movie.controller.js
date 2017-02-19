(function() {
    'use strict';

    angular
        .module('movieApp')
        .controller('MovieController', MovieController);

    /** @ngInject */
    function MovieController(Movies, $log) {
        var vm = this;
        vm.movies = null;
        vm.movie = {
            "movie_title": "Avatar ",
            "director_name": "James Cameron",
            "actor_1_name": "CCH Pounder",
            "actor_2_name": "Joel David Moore",
            "genres": "Action|Adventure|Fantasy|Sci-Fi",
            "language": "English",
            "country": "USA",
            "content_rating": "PG-13",
            "budget": "237000000",
            "title_year": "2009",
            "plot_keywords": "avatar|future|marine|native|paraplegic",
            "movie_imdb_link": "http://www.imdb.com/title/tt0499549/?ref_=fn_tt_tt_1"
        };


        Movies.getMoviesFromAPI()
            .then(function (response) {
                $log.info(response);
                Movies.setMovies(response.data);
                vm.movies = Movies.getMovies();
                $log.info(vm.movies);
            }, function (error) {
                $log.error(error);
            });

    }
})();

