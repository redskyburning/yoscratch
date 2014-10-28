'use strict';

/**
 * @ngdoc service
 * @name yoscratchApp.catalogService
 * @description
 * # catalog
 * Provider in the yoscratchApp.
 */
angular.module('yoscratchApp')
    .provider('catalogService', function () {
        var data = {
            'categories'    : [],
            'products'      : []
        };

        this.config = function (d) {
            angular.extend(data, d);
        };

        this.$get = [function () {
            return data;
        }];
    });
