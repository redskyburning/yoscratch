'use strict';

/**
 * @ngdoc service
 * @name yoscratchApp.catalogService
 * @description
 * # catalogService
 * Service in the yoscratchApp.
 */
angular.module('yoscratchApp')
  .service('catalogService',['$resource','$q', function catalogService() {
        /*var r = $resource('http://shop.stelladotdevlocal.com/style/b2c_en_us/apiv1/catalog/category/id/:id');

        this.init = function(){
            return $q(function(resolve,reject){
                r.get({'id':15},function(data){
                    var root = data.catalog_id_15;
                    //getCatData(data.catalog_id_15);
                    resolve(true);
                });
            });
        };*/
    }]);