(function () {
    'use strict';

    angular.module('BlurAdmin.pages.new')
        .service('newServ', TablesPageCtrl);

    /** @ngInject */
    function TablesPageCtrl($scope) {

       return {
        name: "Ari",
        email: "ari@fullstack.io"
      }

    }

})();
