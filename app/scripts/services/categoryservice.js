'use strict';

/**
 * @ngdoc service
 * @name yoscratchApp.categoryService
 * @description
 * # categoryService
 * Service in the yoscratchApp.
 */
angular.module('yoscratchApp')
    .service('categoryService',['$resource', function categoryService($resource) {
        return $resource('http://shop.stelladotdevlocal.com/style/b2c_en_us/apiv1/product/category/category_id/:id');
    }]);
