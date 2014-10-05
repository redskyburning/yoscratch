'use strict';

/**
 * @ngdoc directive
 * @name yoscratchApp.directive:sdBlock
 * @description
 * # sdBlock
 */
angular.module('yoscratchApp')
    .directive('sdBlock', ['blockService', function() {
        return {
            template: '<div ng-include src="getTemplateUrl()"/>',
            scope: {
                block: '=sdBlock'
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