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
    'ngTouch'
  ])
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
      .when('/', {
        templateUrl: 'views/category.html',
        controller: 'CategoryCtrl'
      })
      .when('/catalog', {
        templateUrl: 'views/catalog.html',
        controller: 'CatalogCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
