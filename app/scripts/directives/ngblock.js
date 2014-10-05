'use strict';

/**
 * @ngdoc directive
 * @name yoscratchApp.directive:ngBlock
 * @description
 * # ngBlock
 */
angular.module('yoscratchApp')
    .directive('ngBlock', ['$compile', '$http', '$templateCache', function() {
        return {
            template: '<ng-include src="getTemplateUrl()"/>',
            scope: {
                block: '=ngModel'
            },
            restrict: 'E',
            controller: function($scope) {
                //function used on the ng-include to resolve the template
                $scope.getTemplateUrl = function() {
                    //basic handling
                    return 'views/blocks/' + $scope.block.blockType + '.html';
                };
            }
        };
    }]);