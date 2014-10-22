'use strict';

/**
 * @ngdoc function
 * @name yoscratchApp.controller:CatalogCtrl
 * @description
 * # CatalogCtrl
 * Controller of the yoscratchApp
 */
angular.module('yoscratchApp')
    .controller('CatalogCtrl',['$scope','$resource','$routeParams','catalogService', function ($scope,$resource,$routeParams) {

        $scope.id = typeof $routeParams.id === 'undefined' ? 15 : $routeParams.id;
        $scope.subs = [];
        $scope.parentId = 0;

        var r = $resource('http://shop.stelladotdevlocal.com/style/b2c_en_us/apiv1/catalog/categories');
        r.get({}, function(data){
            $scope.cats = data;
            $scope.cat = data[$scope.id];
            $scope.parentId = data[$scope.id].parentId;
            console.log($scope.cat);
            var out = [];
            angular.forEach($scope.cat.subs,function(v){
                var sc = $scope.cats[v];
                sc.url = sc.subs.length > 0 ? '#/catalog/id/' + sc.id : '#/category/id/' + sc.id;
                out.push(sc);
            });
            $scope.subs = out;
        });

        $scope.showBack = true;
    }]);
