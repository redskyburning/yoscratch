'use strict';

/**
 * @ngdoc directive
 * @name yoscratchApp.directive:categoryItem
 * @description
 * # categoryItem
 */
angular.module('yoscratchApp')
    .directive('categoryItem', function () {
        return {
            templateUrl : 'views/directives/media.html',
            restrict    : 'E',
            scope       : {
                sdProduct: '='
            },
            replace     : true,
            link        : function postLink(scope, element, attrs) {
                scope.name = scope.sdProduct.name;
                scope.image = scope.sdProduct.image;
                scope.width = 450;
                scope.height = 682;
                scope.class = 'sd-media-vertical grid-item';
                var hasSubs = typeof scope.sdProduct.subs !== 'undefined' && scope.sdProduct.subs.length > 0;
                scope.url = '#/' + (hasSubs ? 'catalog/' : 'category/') + scope.sdProduct.id;
            }
        };
    });
