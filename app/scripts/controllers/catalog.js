'use strict';

/**
 * @ngdoc function
 * @name yoscratchApp.controller:CatalogCtrl
 * @description
 * # CatalogCtrl
 * Controller of the yoscratchApp
 */
angular.module('yoscratchApp')
    .controller('CatalogCtrl',['$scope','$resource','$stateParams','catalogService', function ($scope,$resource,$stateParams,catalogService) {

        $scope.cat = {};
        $scope.subs = [];

        var id = typeof $stateParams.id === 'undefined' ? 15 : $stateParams.id;
        console.log('id',id);
        $scope.id = id;

        var catP = catalogService.getCat(id);
        catP.then(function(cat){
            $scope.cat = cat;
        });

        var subsP = catalogService.getSubs(id);
        subsP.then(function(subs){
            $scope.subs = subs;
        });
    }]);
