(function() {
    'use strict';

    angular
        .module('movieApp')
        .controller('MovieController', MovieController);

    /** @ngInject */
    function MovieController(Movies, $log) {
        var vm = this;
        vm.moviesList = null;
        vm.currentPage = 1;
        vm.totalMovies = 0;
        vm.movieStartIndex = 0;
        vm.searchText = {};
        vm.loading = false;
        vm.showFilter = false;
        vm.searchTypeSelected = 'movie_title';
        vm.searchType = [
            { value: '$', display: 'All' },
            { value: 'movie_title', display: 'Movie Name' },
            { value: 'director_name', display: 'Director Name' },
            { value: 'genres', display: 'Genres Name' },
            { value: 'language', display: 'Language' },
            { value: 'country', display: 'Country Name' },
            { value: 'content_rating', display: 'Content Rating' },
            { value: 'plot_keywords', display: 'Keywords' }
        ];

        vm.pageChange = pageChange;

        /*
        * To load content by http request if not already present else fetch from localStorage
        */
        if(localStorage.getItem('stored') === true) {
            Movies.setMovies(angular.fromJson(localStorage.getItem('movieList')));
            vm.moviesList = Movies.getMovies();
            vm.totalMovies = vm.moviesList.length;
        } else {
            vm.loading = true;
            Movies.getMoviesFromAPI()
                .then(function (response) {
                    $log.info(response);
                    vm.loading = false;
                    Movies.setMovies(response.data);
                    vm.moviesList = Movies.getMovies();
                    $log.info(vm.moviesList);
                    vm.totalMovies = vm.moviesList.length;
                    localStorage.setItem('stored', true);
                    localStorage.setItem('movieList', angular.toJson(response.data));
                }, function (error) {
                    $log.error(error);
                    vm.loading = false;
                });
        }

        /*
        * Fucntion for pagination
        */
        function pageChange() {
            vm.movieStartIndex = (vm.currentPage - 1) * 10;
        }
    }
})();

