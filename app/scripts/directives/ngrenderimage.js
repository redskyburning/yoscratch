'use strict';

/**
 * @ngdoc directive
 * @name yoscratchApp.directive:ngRenderImage
 * @description
 * # ngRenderImage
 */
angular.module('yoscratchApp')
    .directive('ngRenderImage', function () {
        return {
            template: '<div></div>',
            restrict: 'A',
            replace:true,
            scope: {
                field: '=ngModel'
            },
            link: function postLink(scope, element){
                var payload = scope.field.payload;
                var html = '<img src="' + payload.src + '" width="' + payload.width + '" height="' + payload.height + '" />';
                element.html(html);
            }
        };
    });
