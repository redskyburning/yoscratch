'use strict';

/**
 * @ngdoc service
 * @name yoscratchApp.sectionFactory
 * @description
 * # sectionFactory
 * Service in the yoscratchApp.
 */
angular.module('yoscratchApp')
.service('sectionFactory', function sectionFactory() {
    sectionFactory.create = function(){
        var sect = {
            'blocks'    : []
        };
        return sect;
    };

    return sectionFactory;
});
