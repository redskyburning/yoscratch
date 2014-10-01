'use strict';

/**
 * @ngdoc function
 * @name yoscratchApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yoscratchApp
 */
angular.module('yoscratchApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
