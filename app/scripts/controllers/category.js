'use strict';

/**
 * @ngdoc function
 * @name yoscratchApp.controller:CategoryCtrl
 * @description
 * # CategoryCtrl
 * Controller of the yoscratchApp
 */
angular.module('yoscratchApp')
    .controller('CategoryCtrl',['$scope','$stateParams','categoryService','productService', function ($scope,$stateParams,categoryService,productService) {

        $scope.cat = {};

        var id = !$stateParams.id ? 15 : $stateParams.id;
        $scope.id = id;

        var catP = categoryService.getCat(id);
        catP.then(function(cat){
            $scope.cat = cat;
        });

        var productP = productService.getProductsByCat(id);
        productP.then(function(products){
            $scope.products = products;
        });
    }]);
