(function () {
    'use strict';

    angular.module('commonServices')
      .service('dataContext',function(connectInfo){

        this.getData = function(url){ 
            console.log(connectInfo.url);
            console.log(url);
            return 200;
        }


      });


})();