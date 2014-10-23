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
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ui.router',
        'ngTouch'
    ])
    .config(function($stateProvider) {
        $stateProvider
            .state('root', {
                url: '/',
                templateUrl: 'views/root.html',
                controller: 'RootCtrl'
            })
            .state('root.catalog', {
                url: 'catalog/id/:id',
                templateUrl: 'views/catalog.html',
                controller: 'CatalogCtrl'
            })
            .state('root.category', {
                url: 'category/id/:id',
                templateUrl: 'views/category.html',
                controller: 'CategoryCtrl'
            });
    });

/*
 .config(function ($routeProvider) {
 $routeProvider
 .when('/category/id/:id', {
 templateUrl: 'views/category.html',
 controller: 'CategoryCtrl'
 })
 .when('/category/', {
 templateUrl: 'views/category.html',
 controller: 'CategoryCtrl'
 })
 .when('/catalog/id/:id', {
 templateUrl: 'views/catalog.html',
 controller: 'CatalogCtrl'
 })
 .when('/catalog', {
 templateUrl: 'views/catalog.html',
 controller: 'CatalogCtrl'
 })
 .when('/', {
 templateUrl: 'views/catalog.html',
 controller: 'CatalogCtrl'
 })
 .otherwise({
 redirectTo: '/'
 });
 });
*/