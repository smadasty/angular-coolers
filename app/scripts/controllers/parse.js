'use strict';

/**
 * @ngdoc function
 * @name coolersApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the coolersApp
 */
angular.module('coolersApp')
  .controller('ParseCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
