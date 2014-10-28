'use strict';

/**
 * @ngdoc function
 * @name yoscratchApp.controller:ProductCtrl
 * @description
 * # ProductCtrl
 * Controller of the yoscratchApp
 */
angular.module('yoscratchApp')
  .controller('ProductCtrl',['$scope','$stateParams','productService', function ($scope,$stateParams,productService) {

        var id = !$stateParams.id ? 15 : $stateParams.id;
        $scope.id = id;
        $scope.images = [];
        $scope.product = {};
        $scope.quant = 1;

        $scope.product = productService.getProduct(id);
        $scope.images = productService.getImages($scope.product,'450x682');

        $scope.add = function(){
            if(typeof $scope.quant !== 'undefined'){
                $scope.addToCart($scope.product,Number($scope.quant));
            }
        };

        $scope.wishlist = function(){
            $scope.addToWishlist($scope.product);
        };
    }]);
