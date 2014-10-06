'use strict';

/**
 * @ngdoc directive
 * @name yoscratchApp.directive:sdRenderBlock
 * @description
 * # sdRenderBlock
 */
angular.module('yoscratchApp')
    .directive('sdRenderBlock', ['blockService', function() {
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
                    return 'views/blocks/render/' + $scope.block.blockType + hero + '.html';
                };
            }
        };
    }]);