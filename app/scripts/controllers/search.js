'use strict';

/**
 * @ngdoc function
 * @name yoscratchApp.controller:SearchCtrl
 * @description
 * # SearchCtrl
 * Controller of the yoscratchApp
 */
angular.module('yoscratchApp')
    .controller('SearchCtrl', ['$scope','$stateParams','searchService',function ($scope,$stateParams,searchService) {
        $scope.products = [];
        $scope.searched = false;

        $scope.search = function(){
            var searchP = searchService.query($scope.query);
            searchP.then(function(products){
                $scope.searched = true;
                $scope.products = products;
            });
        };

    }]);
