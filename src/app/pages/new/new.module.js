/**
 * Created by udarab on 8/22/2016.
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.new', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('NewPage', {
                url: '/new',
                templateUrl: 'app/pages/new/new.html',
                controller: 'newCtrl',
                title: 'My New Page',
                sidebarMeta: {
                    order: 800,
                },
            });
    }

})();