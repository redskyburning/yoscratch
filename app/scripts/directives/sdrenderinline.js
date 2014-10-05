'use strict';

/**
 * @ngdoc directive
 * @name yoscratchApp.directive:sdRenderInline
 * @description
 * # sdRenderInline
 */
angular.module('yoscratchApp')
    .directive('sdRenderInline', function () {
        return {
            template: '<div></div>',
            restrict: 'A',
            scope: {
                field: '=sdInline'
            },
            link: function postLink(scope, element){
                var html = '';

                angular.forEach(scope.field.payload,function(f){

                    if(typeof f.link === 'undefined' && typeof f.style === 'undefined'){
                        html += f.text + ' ';
                    } else {
                        var style = {
                            'bold'      : false,
                            'underline' : false,
                            'italic'    : false,
                            'strike'    : false
                        };
                        var link = {};

                        angular.extend(style, f.style);
                        angular.extend(link, f.link);

                        // Select best tag
                        var tag;
                        if(link){
                            tag = 'a';
                        } else if(style.bold) {
                            tag = 'strong';
                        } else if(style.italic) {
                            tag = 'em';
                        } else {
                            tag = 'span';
                        }

                        var htmlClass = '';
                        if(typeof f.style !== 'undefined'){
                            angular.forEach(style,function(v,k){
                                if(v){
                                    htmlClass += 'style-' + k + ' ';
                                }

                            });
                            htmlClass = 'class="' + htmlClass + '" ';
                        }

                        var href = f.link ? 'href="' + f.link.href + '" ' : '';

                        html += '<' + tag + ' ' + htmlClass + ' ' + href + ' >' + f.text + '</' + tag + '> ';
                    }

                });

                element.html(html);
            }
        };
    });
