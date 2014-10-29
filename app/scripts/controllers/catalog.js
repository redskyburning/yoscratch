'use strict';

/**
 * @ngdoc function
 * @name yoscratchApp.controller:CatalogCtrl
 * @description
 * # CatalogCtrl
 * Controller of the yoscratchApp
 */
angular.module('yoscratchApp')
    .controller('CatalogCtrl',['$scope','$resource','$stateParams','categoryService', function ($scope,$resource,$stateParams,categoryService) {

        $scope.cat = {};
        $scope.subs = [];
        $scope.name = ' ';

        var id = !$stateParams.id ? 2 : $stateParams.id;
        $scope.id = id;
        $scope.cat = categoryService.getCat(id);
        $scope.isRoot = id === 2;
        $scope.name = $scope.isRoot ? 'Catalog' : $scope.cat.name;
        $scope.subs = categoryService.getSubs(id);

        $scope.getCatUrl = function(cat){
            var str = cat.subs.length > 0 ? 'catalog' : 'category';
            return '/#/' + str + '/' + cat.id;
        };
    }]);
