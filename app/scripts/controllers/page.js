'use strict';

/**
 * @ngdoc function
 * @name yoscratchApp.controller:PageCtrl
 * @description
 * # PageCtrl
 * Controller of the yoscratchApp
 */
angular.module('yoscratchApp')
    .controller('PageCtrl', function ($scope,$http) {
        $scope.page = {};
        $scope.mode = 'render';

        $http.get('data/page_data.json')
            .success(function(data){
                $scope.page = data;
            });
    });
