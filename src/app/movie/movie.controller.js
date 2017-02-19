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
        vm.searchText = '';
        vm.loading = false;

        vm.pageChange = pageChange;

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

        function pageChange() {
            vm.movieStartIndex = (vm.currentPage - 1) * 10;
        }
    }
})();

