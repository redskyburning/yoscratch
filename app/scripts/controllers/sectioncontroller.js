'use strict';

/**
 * @ngdoc function
 * @name yoscratchApp.controller:SectioncontrollerCtrl
 * @description
 * # SectioncontrollerCtrl
 * Controller of the yoscratchApp
 */
angular.module('yoscratchApp')
  .controller('SectioncontrollerCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
