/**
 * Created by udarab on 8/22/2016.
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.userProfile', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('viewUsers', {
                url: '/users',
                templateUrl: 'app/pages/userProfile/users.html',
                controller: 'usersController',
                title: 'All Users',
                sidebarMeta: {
                    order: 1000,
                },
            })
            .state('viewUser', {
                url: '/user/:userID',
                templateUrl: 'app/pages/userProfile/user.html',
                controller: 'userController',
                title: 'View User',
                sidebarMeta: {
                    order: 1100,
                }
            });
                    
    }

})();