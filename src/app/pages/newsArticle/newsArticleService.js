(function () {
    'use strict';

    angular.module('BlurAdmin.pages.newsArticle')
      .service('newsArticleService',['$stateParams',newsArticleCtrl]);

  /** @ngInject */
  function newsArticleCtrl($stateParams) {

  	this.getArticles = function(){ 
  		return $stateParams.articleID;}

  		/*
  	    return {
    	getArticles:function(){
    		return 100;
    	},

    	getArticle: function(){
    		return 200;
    	}

    	}
    	*/


  }

})();