'use strict';

/**
 * @ngdoc function
 * @name yoscratchApp.controller:CategoryCtrl
 * @description
 * # CategoryCtrl
 * Controller of the yoscratchApp
 */
angular.module('yoscratchApp')
    .controller('CategoryCtrl',['$scope','$routeParams','catalogService','categoryService', function ($scope,$routeParams,catalogService,categoryService) {
        var setCat = function(id){
            categoryService.get({'id':id}, function(data){
                $scope.category = data;
            });
        };

        $scope.selectCat = function(id){
            setCat(id);
        };

        var id = typeof $routeParams.id === 'undefined' ? 16 : $routeParams.id;
        setCat(id);
    }]);
