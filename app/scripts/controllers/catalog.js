'use strict';

/**
 * @ngdoc function
 * @name yoscratchApp.controller:CatalogCtrl
 * @description
 * # CatalogCtrl
 * Controller of the yoscratchApp
 */
angular.module('yoscratchApp')
    .controller('CatalogCtrl',['$scope','$routeParams','catalogService', function ($scope,$routeParams,catalogService) {

        catalogService.get({'id':15},function(data){
            var subs = data.catalog_id_15.subcategories;
            console.log(subs);
            var sArr = [];
            angular.forEach(subs,function(v){
                angular.forEach(v.subcategories,function(sv){
                    if(v.url_key.indexOf('-all') == -1){
                        sArr.push(sv);
                    }
                });
            });
            $scope.categories = data.catalog_id_15.subcategories;
        });
    }]);
