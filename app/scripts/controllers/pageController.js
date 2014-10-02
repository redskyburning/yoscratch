'use strict';

/**
 * @ngdoc function
 * @name yoscratchApp.controller:PagecontrollerCtrl
 * @description
 * # PagecontrollerCtrl
 * Controller of the yoscratchApp
 */
angular.module('yoscratchApp')
.controller('PagecontrollerCtrl',['$scope','$http','pageFactory','sectionFactory', function ($scope,$http,pageFactory,sectionFactory) {
    $scope.page = pageFactory.create('one');

    $scope.data = null;
    $http.get('data/block_types.json').success(function(data) {
        $scope.data = data;
    });

    $scope.addSection = function(){
        $scope.page.sections.push(sectionFactory.create());
    };

    $scope.addBlock = function(i){
        $scope.page.sections.push(sectionFactory.create());
    };

}]);
