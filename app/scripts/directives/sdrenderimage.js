'use strict';

/**
 * @ngdoc directive
 * @name yoscratchApp.directive:sdRenderImage
 * @description
 * # sdRenderImage
 */
angular.module('yoscratchApp')
    .directive('sdRenderImage', function () {
        return {
            template: '<div></div>',
            restrict: 'A',
            replace:true,
            scope: {
                field: '=sdImage'
            },
            link: function postLink(scope, element){
                var payload = scope.field.payload;
                var html = '<img src="' + payload.src + '" width="' + payload.width + '" height="' + payload.height + '" />';
                element.html(html);
            }
        };
    });
