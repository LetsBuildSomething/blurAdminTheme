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
            .state('newPage', {
                url: '/new',
                templateUrl: 'app/pages/new/new.html',
                controller: 'newCtrl',
                title: 'My Title',
                sidebarMeta: {
                    order: 800,
                },
            })
            .state('newUrlParameters', {
                url: '/new/:newID',
                controller: function($scope, $stateParams) {
                    // get url parameters
                    $scope.sample = "FROM URL PARAMS " + $stateParams.newID;  
                },
                templateUrl: 'app/pages/new/new.html',
                resolve: {
                    // This will return immediately as the 
                    // result is not a promise
                    person: function() {
                      return {
                        name: "Ari",
                        email: "ari@fullstack.io"
                      }
                },
                }
                
            });
                    
    }

})();