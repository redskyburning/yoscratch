'use strict';

/**
 * @ngdoc function
 * @name yoscratchApp.controller:WishlistCtrl
 * @description
 * # WishlistCtrl
 * Controller of the yoscratchApp
 */
angular.module('yoscratchApp')
  .controller('WishlistCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
