var cadpat;
(function (cadpat) {
    'use strict';
    angular.module('cadpat', [
        'ngRoute',
        'cadpatFilters',
        'ui.bootstrap',
        'alertaControllers',
        'alertaServices',
        'cadpatServices',
        'bemControllers',
    ]);
})(cadpat || (cadpat = {}));
