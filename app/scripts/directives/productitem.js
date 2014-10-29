'use strict';

/**
 * @ngdoc directive
 * @name yoscratchApp.directive:productItem
 * @description
 * # productItem
 */
angular.module('yoscratchApp')
    .directive('productItem', function () {
        return {
            templateUrl : 'views/directives/media.html',
            restrict    : 'E',
            scope       : {
                sdProduct: '='
            },
            replace     : true,
            link        : function postLink(scope) {
                scope.name = scope.sdProduct.name;
                scope.image = scope.sdProduct.image;
                scope.width = 450;
                scope.height = 682;
                scope.class = 'sd-media-vertical grid-item';
                scope.url = '#/product/' + scope.sdProduct.id;
            }
        };
    });
