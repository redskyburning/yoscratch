'use strict';

/**
 * @ngdoc service
 * @name yoscratchApp.menuService
 * @description
 * # menuService
 * Service in the yoscratchApp.
 */
angular.module('yoscratchApp')
    .service('menuService', ['categoryService', function menuService(categoryService) {
        var menu = {
            'shop'  : {
                'title'     : 'Shop',
                'children'  : [
                    {
                        'title'     : 'Jewelry',
                        'catId'     : 15,
                        'children'  : [
                            {
                                'title'     : 'Necklaces',
                                'catId'     : 16
                            },
                            {
                                'title'     : 'Engravables',
                                'catId'     : 3080
                            },
                            {
                                'title'     : 'Charms',
                                'catId'     : 3086
                            },
                            {
                                'title'     : 'Bracelets',
                                'catId'     : 29
                            },
                            {
                                'title'     : 'Earrings',
                                'catId'     : 28
                            },
                            {
                                'title'     : 'Rings',
                                'catId'     : 30
                            },
                            {
                                'title'     : 'Girls',
                                'catId'     : 31
                            },
                            {
                                'title'     : 'Display',
                                'catId'     : 2946
                            }
                        ]
                    },
                    {
                        'title'     : 'Bags & More',
                        'catId'     : 42,
                        'children'  : [
                            {
                                'title'     : 'Bags',
                                'catId'     : 2650
                            },
                            {
                                'title'     : 'Wallets',
                                'catId'     : 1104
                            },
                            {
                                'title'     : 'Small Accessories',
                                'catId'     : 1108
                            },
                            {
                                'title'     : 'Tech Accessories',
                                'catId'     : 732
                            },
                            {
                                'title'     : 'Scarves',
                                'catId'     : 730
                            }
                        ]
                    },
                    {
                        'title'     : 'What\'s New',
                        'catId'     : 431,
                        'children'  : [
                            {
                                'title'     : 'New Arrivals',
                                'catId'     : 722
                            },
                            {
                                'title'     : 'Best Sellers',
                                'catId'     : 716
                            }
                        ]
                    },
                    {
                        'title'     : 'Boutiques',
                        'catId'     : 199,
                        'children'  : [
                            {
                                'title'     : 'Versatility Shop',
                                'catId'     : 762
                            },
                            {
                                'title'     : 'Statement Pieces',
                                'catId'     : 2100
                            },
                            {
                                'title'     : 'Under $50',
                                'catId'     : 2262
                            },
                            {
                                'title'     : 'As Seen On',
                                'catId'     : 1122
                            },
                            {
                                'title'     : 'Shop for a Cause',
                                'catId'     : 1126
                            }
                        ]
                    }
                ]
            }
        };

        this.getMenu = function(){
            return menu;
        };

        this.getCatsFromChildren = function(children){
            var cats = [];
            angular.forEach(children,function(v){
                var c = categoryService.getCat(v.catId);
                c.name = v.title;
                cats.push(c);
            });
            return cats;
        };
    }]);
