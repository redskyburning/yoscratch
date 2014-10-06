'use strict';

/**
 * @ngdoc directive
 * @name yoscratchApp.directive:sdEditBlock
 * @description
 * # sdEditBlock
 */
angular.module('yoscratchApp')
    .directive('sdEditBlock', ['blockService', function() {
        return {
            template: '<div ng-include src="getTemplateUrl()"/>',
            scope: {
                block: '=sdBlock'
            },
            restrict: 'E',
            controller: function($scope) {
                //function used on the ng-include to resolve the template
                $scope.getTemplateUrl = function() {
                    return 'views/blocks/edit/' + $scope.block.blockType + '.html';
                };
            }
        };
    }]);