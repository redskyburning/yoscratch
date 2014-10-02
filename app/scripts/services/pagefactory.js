'use strict';

/**
 * @ngdoc service
 * @name yoscratchApp.pageFactory
 * @description
 * # pageFactory
 * Service in the yoscratchApp.
 */
angular.module('yoscratchApp')
    .service('pageFactory',['sectionFactory',function pageFactory(sectionFactory) {
        pageFactory.create = function(){
            return {
                'title'     : 'Foo is the new black',
                'url'       : 'foo.html',
                'sections'  : [sectionFactory.create()]
            };
        };

        return pageFactory;
    }]);
