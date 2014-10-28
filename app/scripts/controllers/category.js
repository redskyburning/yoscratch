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
        var id = !$stateParams.id ? 15 : $stateParams.id;
        $scope.id = id;

        $scope.cat = categoryService.getCat(id);
        $scope.products = productService.getProductsByCat(id);
    }]);
