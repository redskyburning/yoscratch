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
        var mockCart = { 'N446Y': { 'product': { 'name': 'Norah Pendant', 'sku': 'N446Y', 'description': '<p>What makes us different makes us beautiful. Stand out in this truly unique necklace with sparkle and color. Works over a print or a solid-we love it with navy! &nbsp;</p> <ul> <li>18\' + 3\' extender.</li> <li>Lobster clasp closure.&nbsp;</li> </ul>', 'image': 'http://shop.stelladotdevlocal.com/style/media/catalog/product/cache/0/image/450x682/9df78eab33525d08d6e5fb8d27136e95/n/4/n446y_norah_pendant_main_1.jpg' }, 'quant': 1 }, 'N490CR': { 'product': { 'name': 'Casablanca Pendant Necklace', 'sku': 'N490CR', 'description': '<p><span>We love this Art Deco-inspired, pav&eacute;-encrusted, geometric pendant. Can be worn long or short with the same great versatility as our favorite <a title=\'Phoenix Pendant Necklace\' href=\'http://www.stelladot.com/shop/en_us/p/jewelry/necklaces/necklaces-all/phoenix-pendant\' target=\'_blank\'>Phoenix Pendant Necklace</a>. Wear it long and stunning as a statement piece, or remove the bottom two drops for a more casual look. Also looks great worn short and layered with our signature <a title=\'Sutton Necklace\' href=\'http://www.stelladot.com/shop/en_us/p/jewelry/necklaces/necklaces-all/sutton-necklace\' target=\'_blank\'>Sutton Necklace</a>. <br /> </span></p>\r\n<ul>\r\n<li>Vintage silver plating.&nbsp;</li>\r\n<li>18\' worn short, adjustable to 28.5\'.&nbsp;</li>\r\n</ul>', 'image': 'http://shop.stelladotdevlocal.com/style/media/catalog/product/cache/0/image/450x682/9df78eab33525d08d6e5fb8d27136e95/n/4/n490cr_casablanca_pendant_necklace_main.jpg' }, 'quant': 2 }, 'N448BL': { 'product': { 'name': 'Rory Necklace - Blue', 'sku': 'N448BL', 'description': '<p>This art deco inspired necklace is the perfect update to our bestselling Mae and layers beautifully with the Somervell Necklace. A brilliant combination of hand set blue and green stones with dashes of sparkle on a bold vintage gold plate chain.</p> <ul> <li>19\' length with a 3\' extender.&nbsp;</li> <li>Lobster clasp closure.&nbsp;</li> </ul>', 'image': 'http://shop.stelladotdevlocal.com/style/media/catalog/product/cache/0/image/450x682/9df78eab33525d08d6e5fb8d27136e95/n/4/n448bl_rory-necklace_main.jpg' }, 'quant': 1 } };
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
            return mockCart;
        };
    });
