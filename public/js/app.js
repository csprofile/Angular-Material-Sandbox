'use strict'

// MODULE
angular.module('app', [
    'ngRoute',
    'ngAnimate',
    'ngAria',
    'ngMessages',
    'ngMaterial',
    'ngMdIcons'
]);

// ROUTES
angular.module('app').config(function ($routeProvider) {

    $routeProvider

    .when('/', {
        templateUrl: '/partials/material.htm',
        controller: 'materialController'
    })
    .when('/material', {
        templateUrl: '/partials/material.htm',
        controller: 'materialController'
    })
    
});