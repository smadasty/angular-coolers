'use strict';

/**
 * @ngdoc overview
 * @name coolersApp
 * @description
 * # coolersApp
 *
 * Main module of the application.
 */
angular
    .module('coolersApp', [
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
            })
            .when('/notes', {
                templateUrl: 'views/notes.html',
                controller: 'AboutCtrl'
            })
            .when('/parse', {
                templateUrl: 'views/parse.html',
                controller: 'AboutCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });