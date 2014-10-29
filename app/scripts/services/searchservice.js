'use strict';

/**
 * @ngdoc service
 * @name yoscratchApp.searchService
 * @description
 * # searchService
 * Service in the yoscratchApp.
 */
angular.module('yoscratchApp')
    .service('searchService',['$resource','$q','productService', function searchService($resource,$q,productService) {
        this.query = function(query){
            var r = $resource('http://shop.stelladotdevlocal.com/style/b2c_en_us/apiv1/search/simple/q/:query');
            return $q(function(resolve){
                r.get({'query':query},function(data){
                    console.log('data',data.data.products);
                    var products = [];
                    angular.forEach(data.data.products,function(v){
                        var p = productService.getProduct(v);
                        if(typeof p !== 'undefined'){
                            products.push(p);
                        }
                    });
                    resolve(products);
                });
            });
        };
    }]);
