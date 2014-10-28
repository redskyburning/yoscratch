'use strict';

/**
 * @ngdoc service
 * @name yoscratchApp.categoryService
 * @description
 * # categoryService
 * Service in the yoscratchApp.
 */
angular.module('yoscratchApp')
    .service('categoryService',['catalogService', function categoryService(catalogService) {
        var getCat = function(id){
            var cat = catalogService.categories[id];
            return cat;
        };

        var getSubs = function(id){
            var subs = [];
            var cat = getCat(id);
            angular.forEach(cat.subs,function(v){
                var c = getCat(v);
                if(typeof c !== 'undefined'){
                    subs.push(c);
                }
            });
            return subs;
        };

        this.getCat = function(id){
            return getCat(id);
        };

        this.getSubs = function(id){
            return getSubs(id);
        };
    }]);
