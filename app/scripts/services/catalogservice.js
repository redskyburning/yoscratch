'use strict';

/**
 * @ngdoc service
 * @name yoscratchApp.catalogService
 * @description
 * # catalogService
 * Service in the yoscratchApp.
 */
angular.module('yoscratchApp')
  .service('catalogService',['$resource','$q', function catalogService($resource,$q) {
        var r = $resource('http://shop.stelladotdevlocal.com/style/b2c_en_us/apiv1/catalog/category/id/:id');

        this.categories = [];
        var self = this;

        var getCatData = function(cat){
            var subs = [];
            var children = cat.subcategories;
            angular.forEach(children,function(v){
                angular.forEach(v.subcategories,function(cv){
                    subs.push(Number(cv.entity_id));
                    getCatData(cv);
                });
            });

            var image = cat.image === null ? 'http://placekitten.com/450/682' : cat.image;

            self.categories[cat.entity_id] = {
                'name'      : cat.name,
                'id'        : Number(cat.entity_id),
                'parentId'  : cat.parent_id,
                'image'     : image,
                'subs'      : subs
            };
        };

        this.getCat = function(id){
            return this.categories[id];
        };

        this.getSubs = function(subArr){
            var out = [];
            angular.forEach(subArr,function(s){
                var sub = self.getCat(s);
                out.push(sub);
            });
            return out;
        };

        this.init = function(){
            return $q(function(resolve,reject){
                r.get({'id':15},function(data){
                    var root = data.catalog_id_15;
                    getCatData(data.catalog_id_15);
                    resolve(true);
                });
            });
        }
    }]);