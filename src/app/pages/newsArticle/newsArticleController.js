(function () {
    'use strict';

    angular.module('BlurAdmin.pages.newsArticle')
      .controller('newsArticleController', ['newsArticleService',function(newsArticleService,$scope){
      		console.log(newsArticleService.getArticles());

      }]);

  /** @ngInject */
  function newsArticleCtrl($scope,newsArticleService) {

  	$scope.name =newsArticleService.getArticles();
  	
  }

})();