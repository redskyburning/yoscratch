'use strict';

/**
 * @ngdoc service
 * @name yoscratchApp.blockFactory
 * @description
 * # blockFactory
 * Service in the yoscratchApp.
 */
angular.module('yoscratchApp')
  .service('blockFactory', function blockFactory() {
        sectionFactory.create = function(){
            var sect = {
                'blocks'    : []
            };
            return sect;
        };

        return blockFactory;
  });
