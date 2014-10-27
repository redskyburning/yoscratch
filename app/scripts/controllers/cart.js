'use strict';

/**
 * @ngdoc function
 * @name yoscratchApp.controller:CartCtrl
 * @description
 * # CartCtrl
 * Controller of the yoscratchApp
 */
angular.module('yoscratchApp')
    .controller('CartCtrl',['$scope','cartService', function ($scope,cartService) {
        $scope.cart = cartService.getCart();
    }]);
