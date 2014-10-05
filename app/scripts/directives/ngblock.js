'use strict';

/**
 * @ngdoc directive
 * @name yoscratchApp.directive:ngBlock
 * @description
 * # ngBlock
 */
angular.module('yoscratchApp')
    .directive('ngBlock', ['blockService', function() {
        return {
            template: '<div ng-include src="getTemplateUrl()"/>',
            scope: {
                block: '=ngModel'
            },
            restrict: 'E',
            controller: function($scope) {
                //function used on the ng-include to resolve the template
                $scope.getTemplateUrl = function() {
                    var hero = $scope.block.isHero ? '-hero' : '';
                    return 'views/blocks/' + $scope.block.blockType + hero + '.html';
                };
            }
        };
    }]);