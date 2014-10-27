'use strict';

/**
 * @ngdoc function
 * @name yoscratchApp.controller:RootCtrl
 * @description
 * # RootCtrl
 * Controller of the yoscratchApp
 */
angular.module('yoscratchApp')
    .controller('RootCtrl',['$scope','cartService','wishlistService', function ($scope,cartService,wishlistService) {
        $scope.panel = false;

        $scope.count = 0;
        $scope.addToCart = function(product,quant){
            $scope.count = cartService.add(product,quant);
        };

        $scope.addToWishlist = function(product){
            wishlistService.add(product);
        };
    }]);
