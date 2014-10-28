'use strict';

/**
 * @ngdoc function
 * @name yoscratchApp.controller:RootCtrl
 * @description
 * # RootCtrl
 * Controller of the yoscratchApp
 */
angular.module('yoscratchApp')
    .controller('RootCtrl',['$scope','cartService','wishlistService','menuService', function ($scope,cartService,wishlistService,menuService) {
        $scope.panel = false;

        $scope.menu = {};
        var menuData = menuService.getMenu();
        var supernav = 'shop';

        $scope.menu = menuData[supernav].children;

        $scope.count = 0;
        $scope.addToCart = function(product,quant){
            $scope.count = cartService.add(product,quant);
        };

        $scope.addToWishlist = function(product){
            wishlistService.add(product);
        };

    }]);
