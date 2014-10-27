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
                    resolve(data.products);
                });
            });
        };

        this.getProduct = function(id){
            var r = $resource('http://shop.stelladotdevlocal.com/style/b2c_en_us/apiv1/product/id/id/:id');
            return $q(function(resolve){
                r.get({'id':id},function(product){
                    resolve(product);
                });
            });
        };

        this.getImages = function(product,size){
            var images = [];
            angular.forEach(product.media_gallery.images,function(v,k){
                images.push({
                    'src' : v[size].replace('stelladotdevlocal','stelladot'),
                    'active' : k === 0
                });
            });
            return images;
        };

        this.getData = function(product){
            var data = {
                'name'          : product.name,
                'sku'           : product.sku,
                'description'   : product.description,
                'image'         : product.media_gallery.images[0]['450x682']
            };
            console.log('data',product);
            return data;
        };
    }]);
