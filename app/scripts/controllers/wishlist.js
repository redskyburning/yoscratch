'use strict';

/**
 * @ngdoc function
 * @name yoscratchApp.controller:WishlistCtrl
 * @description
 * # WishlistCtrl
 * Controller of the yoscratchApp
 */
angular.module('yoscratchApp')
    .controller('WishlistCtrl',['$scope','wishlistService', function ($scope,wishlistService) {
        $scope.list = wishlistService.getList();
        $scope.count = wishlistService.getCount();

        $scope.add = function(p){
            $scope.addToCart(p,1);
            $scope.remove(p);
        };

        $scope.remove = function(p){
            $scope.list = wishlistService.remove(p);
            $scope.count = wishlistService.getCount();
        };
    }]);
