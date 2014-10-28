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

        var id = !$stateParams.id ? 2 : $stateParams.id;
        $scope.id = id;
        $scope.isRoot = id === 2;

        var catP = categoryService.getCat(id);
        catP.then(function(cat){
            $scope.cat = cat;
            if(cat.parentId === 2){
                $scope.isRoot = true;
            }
        });

        var subsP = categoryService.getSubs(id);
        subsP.then(function(subs){
            $scope.subs = subs;
        });

        $scope.getCatUrl = function(cat){
            var str = cat.subs.length > 0 ? 'catalog' : 'category';
            return '/#/' + str + '/' + cat.id;
        };
    }]);
