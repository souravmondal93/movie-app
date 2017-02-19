(function () {
    'use strict';

    angular
        .module('movieApp')
        .config(routerConfig);

    /** @ngInject */
    function routerConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'app/main/main.html',
                controller: 'MainController',
                controllerAs: 'main'
            });

        $stateProvider
            .state('movie', {
                url: '/movie',
                templateUrl: 'app/movie/movie.html',
                controller: 'MovieController',
                controllerAs: 'movie'
            });

        $urlRouterProvider.otherwise('/movie');
    }

})();
