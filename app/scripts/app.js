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
      .when('/', {
        templateUrl: 'views/page.html',
        controller: 'PageCtrl'
      })
      .when('/page', {
        templateUrl: 'views/page.html',
        controller: 'PageCtrl'
      })
      .when('/test', {
        templateUrl: 'views/test.html',
        controller: 'TestCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
