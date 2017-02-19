(function() {
    'use strict';

    angular
        .module('movieApp')
        .filter('keyword', function () {
            return function (text) {
                return text.split("|").join(", ");
            }
        })
})();