'use strict';

/**
 * @ngdoc service
 * @name yoscratchApp.categoryService
 * @description
 * # categoryService
 * Service in the yoscratchApp.
 */
angular.module('yoscratchApp')
    .service('categoryService',['$resource','$q', function categoryService($resource,$q) {
        var self = this;
        var r = $resource('http://shop.stelladotdevlocal.com/style/b2c_en_us/apiv1/catalog/categories');
        this.data = [];

        this.init = function(){
            return $q(function(resolve){
                if(self.data.length > 0){
                    resolve();
                } else {
                    r.get({},function(data){
                        self.data = data;
                        resolve();
                    });
                }
            });
        };

        var getCat = function(id){
            return self.data[id];
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
            console.log(subs);
            return subs;
        };

        this.getCat = function(id){
            return $q(function(resolve){
                var p = self.init();
                p.then(function(){
                    resolve(getCat(id));
                });
            });
        };

        this.getSubs = function(id){
            return $q(function(resolve){
                var p = self.init();
                p.then(function(){
                    resolve(getSubs(id));
                });
            });
        };
    }]);
