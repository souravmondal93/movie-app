(function() {
    'use strict';

    angular
        .module('movieApp')
        .controller('MovieController', MovieController);

    /** @ngInject */
    function MovieController(Movies, $log) {
        var vm = this;
        vm.moviesList = null;
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
        vm.currentPage = 1;
        vm.totalMovies = 0;
        vm.movieStartIndex = 0;

        vm.pageChange = pageChange;


        if(localStorage.getItem('stored') === true) {
            Movies.setMovies(angular.fromJson(localStorage.getItem('movieList')));
            vm.moviesList = Movies.getMovies();
            vm.totalMovies = vm.moviesList.length;
        } else {
            Movies.getMoviesFromAPI()
                .then(function (response) {
                    $log.info(response);
                    Movies.setMovies(response.data);
                    vm.moviesList = Movies.getMovies();
                    $log.info(vm.moviesList);
                    vm.totalMovies = vm.moviesList.length;
                    localStorage.setItem('stored', true);
                    localStorage.setItem('movieList', angular.toJson(response.data));
                }, function (error) {
                    $log.error(error);
                });
        }

        function pageChange() {
            $log.info(vm.currentPage);
            vm.movieStartIndex = (vm.currentPage - 1) * 10;
        }
    }
})();

