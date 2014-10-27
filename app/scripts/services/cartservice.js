'use strict';

/**
 * @ngdoc service
 * @name yoscratchApp.cartService
 * @description
 * # cartService
 * Service in the yoscratchApp.
 */
angular.module('yoscratchApp')
    .service('cartService', function cartService() {
        var cart = {};
        var count = 0;

        this.add = function(product,quant){
            if(cart.hasOwnProperty(product.sku)){
                cart[product.sku].quant += quant;
            } else {
                cart[product.sku] = {
                    'product'   : product,
                    'quant'     : quant
                };
            }
            console.log('cart',cart);
            count += quant;

            return count;
        };

        this.getCart = function(){
            return cart;
        };
    });
