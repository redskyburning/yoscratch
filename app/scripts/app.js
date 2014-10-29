'use strict';

/**
 * @ngdoc overview
 * @name yoscratchApp
 * @description
 * # yoscratchApp
 *
 * Main module of the application.
 */
angular
    .module('yoscratchApp', [
        //'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ui.bootstrap',
        'ui.router',
        'ngTouch'
    ])
    .config(function($stateProvider,$urlRouterProvider) {
        $stateProvider
            .state('root', {
                url: '',
                abstract: true,
                templateUrl: 'views/root.html',
                controller: 'RootCtrl'
            })
            .state('root.catalog', {
                url: '/',
                templateUrl: 'views/catalog.html',
                controller: 'CatalogCtrl'
            })
            .state('root.catalogId', {
                url: '/catalog/:id',
                templateUrl: 'views/catalog.html',
                controller: 'CatalogCtrl'
            })
            .state('root.category', {
                url: '/category/:id',
                templateUrl: 'views/category.html',
                controller: 'CategoryCtrl'
            })
            .state('root.product', {
                url: '/product/:id',
                templateUrl: 'views/product.html',
                controller: 'ProductCtrl'
            })
            .state('root.cart', {
                url: '/cart',
                templateUrl: 'views/cart.html',
                controller: 'CartCtrl'
            })
            .state('root.wish', {
                url: '/wishlist',
                templateUrl: 'views/wishlist.html',
                controller: 'WishlistCtrl'
            })
            .state('root.search', {
                url: '/search',
                templateUrl: 'views/search.html',
                controller: 'SearchCtrl'
            });
        $urlRouterProvider.otherwise('/');
    });

angular.element(document).ready(function () {
    window.$.get('http://shop.stelladotdevlocal.com/style/b2c_en_us/apiv1/catalog/ng',function(data){
        angular.module('yoscratchApp').config(['catalogServiceProvider', function (catalogServiceProvider) {
            catalogServiceProvider.config(data);
        }]);

        angular.bootstrap('#yoscratchApp', ['yoscratchApp']);
    });
});