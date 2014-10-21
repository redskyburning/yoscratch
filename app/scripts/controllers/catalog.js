'use strict';

/**
 * @ngdoc function
 * @name yoscratchApp.controller:CatalogCtrl
 * @description
 * # CatalogCtrl
 * Controller of the yoscratchApp
 */
angular.module('yoscratchApp')
    .controller('CatalogCtrl',['$scope','$resource','$routeParams','catalogService', function ($scope,$resource,$routeParams,catalogService) {

        var self = this;
        $scope.id = typeof $routeParams.id === 'undefined' ? 15 : $routeParams.id;
        $scope.subs = [];

        var r = $resource('http://shop.stelladotdevlocal.com/style/b2c_en_us/apiv1/catalog/categories');
        r.get({}, function(data){
            $scope.cats = data;
            $scope.cat = data[$scope.id];
            var out = [];
            angular.forEach($scope.cat.subs,function(v){
                console.log(v);
                out.push($scope.cats[v]);
            });
            $scope.subs = out;
        });

        $scope.showBack = true;
    }]);
