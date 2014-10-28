'use strict';

/**
 * @ngdoc service
 * @name yoscratchApp.menuService
 * @description
 * # menuService
 * Service in the yoscratchApp.
 */
angular.module('yoscratchApp')
    .service('menuService', ['$resource','$q', function menuService() {
        var menu = {
            'shop'  : {
                'title'     : 'Shop',
                'children'  : [
                    {
                        'title'     : 'What\'s New',
                        'url'       : '#/catalog/431',
                        'children'  : [
                            {
                                'title'     : 'New Arrivals',
                                'url'       : '#/category/722'
                            },
                            {
                                'title'     : 'Best Sellers',
                                'url'       : '#/category/716'
                            }
                        ]
                    },
                    {
                        'title'     : 'Jewelry',
                        'url'       : '#/catalog/15',
                        'children'  : [
                            {
                                'title'     : 'Necklaces',
                                'url'       : '#/category/16'
                            },
                            {
                                'title'     : 'Charms & Engravables',
                                'url'       : '#/category/3080'
                            },
                            {
                                'title'     : 'Charms',
                                'url'       : '#/category/27'
                            },
                            {
                                'title'     : 'Bracelets',
                                'url'       : '#/category/29'
                            },
                            {
                                'title'     : 'Earrings',
                                'url'       : '#/category/28'
                            },
                            {
                                'title'     : 'Rings',
                                'url'       : '#/category/30'
                            },
                            {
                                'title'     : 'Girls Collection',
                                'url'       : '#/category/31'
                            },
                            {
                                'title'     : 'Storage & Display',
                                'url'       : '#/category/2946'
                            }
                        ]
                    },
                    {
                        'title'     : 'Bags & More',
                        'url'       : '#/catalog/',
                        'children'  : [
                            {
                                'title'     : 'Bags',
                                'url'       : '#/category/2650'
                            },
                            {
                                'title'     : 'Wallets',
                                'url'       : '#/category/1104'
                            },
                            {
                                'title'     : 'Small Accessories',
                                'url'       : '#/category/1108'
                            },
                            {
                                'title'     : 'Tech Accessories',
                                'url'       : '#/category/732'
                            },
                            {
                                'title'     : 'Scarves',
                                'url'       : '#/category/730'
                            }
                        ]
                    },
                    {
                        'title'     : 'Boutiques',
                        'url'       : '#/catalog/199',
                        'children'  : [
                            {
                                'title'     : 'Versatility Shop',
                                'url'       : '#/category/2262'
                            },
                            {
                                'title'     : 'Statement Pieces',
                                'url'       : '#/category/2100'
                            },
                            {
                                'title'     : 'Under $50',
                                'url'       : '#/category/2262'
                            },
                            {
                                'title'     : 'As Seen On',
                                'url'       : '#/category/1122'
                            },
                            {
                                'title'     : 'Shop for a Cause',
                                'url'       : '#/category/1126'
                            }
                        ]
                    }
                ]
            }
        };

        this.getMenu = function(){
            return menu;
        };
    }]);
