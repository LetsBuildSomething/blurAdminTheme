(function () {
    'use strict';

    angular.module('BlurAdmin.pages.newsArticle', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('viewArticles', {
                url: '/articles',
                templateUrl: 'app/pages/newsArticle/newsArticles.html',
                controller: 'newsArticlesController',
                title: 'All Articles',
                sidebarMeta: {
                    order: 1200,
                },
            })
            .state('viewArticle', {
                url: '/article/:articleID',
                templateUrl: 'app/pages/newsArticle/newsArticle.html',
                controller: 'newsArticleController',
                title: 'View Article',
                sidebarMeta: {
                    order: 1300,
                }
            });
                    
    }

})();