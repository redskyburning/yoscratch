'use strict';

/**
 * @ngdoc service
 * @name yoscratchApp.productService
 * @description
 * # productService
 * Service in the yoscratchApp.
 */
angular.module('yoscratchApp')
  .service('productService',['catalogService','categoryService', function productService(catalogService,categoryService) {
        var self = this;

        this.getProductsByCat = function(catId){
            var cat = categoryService.getCat(catId);
            var products = [];
            angular.forEach(cat.products,function(v,k){
                products.push(self.getProduct(v));
            });
            console.log(products);
            return products;
        };

        this.getProduct = function(id){
            var p = catalogService.products[id];
            return p;
        };

        this.getImages = function(product,size){
            var images = [];
            angular.forEach(product.mediaGallery.images,function(v,k){
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
                'image'         : product.mediaGallery.images[0]['450x682'],
                'price'         : Number(product.price)
            };
            console.log('data',product);
            return data;
        };
    }]);
