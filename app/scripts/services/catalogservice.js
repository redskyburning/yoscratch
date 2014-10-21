'use strict';

/**
 * @ngdoc service
 * @name yoscratchApp.catalogService
 * @description
 * # catalogService
 * Service in the yoscratchApp.
 */
angular.module('yoscratchApp')
  .service('catalogService',['$resource', function catalogService($resource) {
        return $resource('http://shop.stelladotdevlocal.com/style/b2c_en_us/apiv1/catalog/category/id/:id');
    }]);