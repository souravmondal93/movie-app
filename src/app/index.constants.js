/* global malarkey:false, moment:false */
(function () {
    'use strict';

    angular
        .module('movieApp')
        .constant('malarkey', malarkey)
        .constant('moment', moment)
        .constant('API_URL', 'http://starlord.hackerearth.com/simility/movieslisting');

})();
