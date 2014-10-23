'use strict';

/**
 * @ngdoc service
 * @name yoscratchApp.productService
 * @description
 * # productService
 * Service in the yoscratchApp.
 */
angular.module('yoscratchApp')
  .service('productService',['$resource','$q', function productService($resource,$q) {
        //var self = this;

        this.getProductsByCat = function(catId){
            var r = $resource('http://shop.stelladotdevlocal.com/style/b2c_en_us/apiv1/product/category/category_id/:id');
            return $q(function(resolve){
                r.get({'id':catId},function(data){
                    console.log('data',data.products[0]);
                    resolve(data.products);
                });
            });
        };

        this.getProduct = function(id){
            var r = $resource('http://shop.stelladotdevlocal.com/style/b2c_en_us/apiv1/product/id/id/:id');
            return $q(function(resolve){
                r.get({'id':id},function(product){
                    //console.log('product',product);
                    resolve(product);
                });
            });
        };
    }]);
