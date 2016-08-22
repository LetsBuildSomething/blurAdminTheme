
/**
 * Created by udarab on 8/22/2016.
 */
/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.new')
        .controller('newCtrl', TablesPageCtrl);

    /** @ngInject */
    function TablesPageCtrl($scope) {

        $scope.sample = 10;

    }

})();
