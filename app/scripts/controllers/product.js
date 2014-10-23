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

        var productP = productService.getProduct(id);
        productP.then(function(product){
            $scope.product = product;

            var images = [];
            angular.forEach(product.media_gallery.images,function(v,k){
                images.push({
                    'src' : v['450x682'].replace('stelladotdevlocal','stelladot'),
                    'active' : k === 0
                });
            });
            $scope.images = images;
        });
    }]);
