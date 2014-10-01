'use strict';

/**
 * @ngdoc function
 * @name yoscratchApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yoscratchApp
 */
angular.module('yoscratchApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
