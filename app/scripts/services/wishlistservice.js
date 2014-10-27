'use strict';

/**
 * @ngdoc service
 * @name yoscratchApp.wishlistService
 * @description
 * # wishlistService
 * Service in the yoscratchApp.
 */
angular.module('yoscratchApp')
    .service('wishlistService', function wishlistService() {
        var list = {};
        /*var mockList = { 'N490CR': { 'name': 'Casablanca Pendant Necklace', 'sku': 'N490CR', 'description': '<p><span>We love this Art Deco-inspired, pav&eacute;-encrusted, geometric pendant. Can be worn long or short with the same great versatility as our favorite <a title=\'Phoenix Pendant Necklace\' href=\'http://www.stelladot.com/shop/en_us/p/jewelry/necklaces/necklaces-all/phoenix-pendant\' target=\'_blank\'>Phoenix Pendant Necklace</a>. Wear it long and stunning as a statement piece, or remove the bottom two drops for a more casual look. Also looks great worn short and layered with our signature <a title=\'Sutton Necklace\' href=\'http://www.stelladot.com/shop/en_us/p/jewelry/necklaces/necklaces-all/sutton-necklace\' target=\'_blank\'>Sutton Necklace</a>. <br /> </span></p>\r\n<ul>\r\n<li>Vintage silver plating.&nbsp;</li>\r\n<li>18\' worn short, adjustable to 28.5\'.&nbsp;</li>\r\n</ul>', 'image': 'http://shop.stelladotdevlocal.com/style/media/catalog/product/cache/0/image/450x682/9df78eab33525d08d6e5fb8d27136e95/n/4/n490cr_casablanca_pendant_necklace_main.jpg', 'price': 98 } };
        list = mockList;*/

        this.add = function(product){
            if(!list.hasOwnProperty(product.sku)){
                list[product.sku] = product;
            }

            return this.getCount();
        };

        this.remove = function(product){
            if(list.hasOwnProperty(product.sku)){
                delete list[product.sku];
            }

            return this.getList();
        };

        this.getList = function(){
            return list;
        };

        this.getCount = function(){
            return Object.keys(this.getList()).length;
        };
    });
