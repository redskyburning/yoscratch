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
                sdCat: '=',
                sdName: '='
            },
            replace     : true,
            link        : function postLink(scope) {
                scope.name = scope.sdCat.name;
                scope.image = scope.sdCat.image;
                scope.width = 450;
                scope.height = 682;
                scope.class = 'sd-media-vertical grid-item';
                var hasSubs = typeof scope.sdCat.subs !== 'undefined' && scope.sdCat.subs.length > 0;
                scope.url = '#/' + (hasSubs ? 'catalog/' : 'category/') + scope.sdCat.id;
            }
        };
    });
