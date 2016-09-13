(function () {
    'use strict';

    angular.module('BlurAdmin.pages.newsArticle')
      .controller('newsArticlesController', newsArticleCtrl);

  /** @ngInject */
  function newsArticleCtrl($scope) {

    $scope.name= "PissuNadun";
  }

})();