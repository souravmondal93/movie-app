(function() {
    'use strict';

    angular
        .module('movieApp')
        .filter('genre', function () {
            return function (text) {
                return text.split("|").join(" | ");
            }
        })
})();