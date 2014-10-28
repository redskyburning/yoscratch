'use strict';

/**
 * @ngdoc filter
 * @name yoscratchApp.filter:prodize
 * @function
 * @description
 * # prodize
 * Filter in the yoscratchApp.
 */
angular.module('yoscratchApp')
    .filter('prodize', function () {
        return function (input) {
            if(input === null || typeof input === 'undefined'){
                return '';
            }

            return input.replace('stelladotdevlocal','stelladot');
        };
    });
