(function () {
    'use strict';

    angular.module('BlurAdmin.pages.newsArticle')
      .controller('newsArticlesController', ['newsArticleService','$scope',newsArticleCtrl]);

  /** @ngInject */
  function newsArticleCtrl(newsArticleService,$scope) {

    $scope.name= "PissuNadun";

    $scope.peopleTableData = [
      {
        id: 1,
        firstName: 'Mark8888888888888888',
        lastName: 'Ottodkvvvvvvvvvvvvvvvvvvvsddad kv fdkvvmfkvvkdvkdskkdOttodkvvOttsssssvvvOttodkvvvvvvvvvvvvvvvvvvvsddad kv fdkvvmfkvvkdvkdskkdOttodkvvvvvvvvvvvvvvvvvvvsddad kv fdkvvmfkvvkdvkdskkdvvvvvvvvvvvvvvsddad kv fdkvvmfkvvkdvkdskkdjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj',
        username: '@mdo888888888888',
        email: 'mdo@gmail.com888888888888',
        age: '288888888888888',
        status: 'info8888888888888888888'
      },
      {
        id: 2,
        firstName: 'Jacob',
        lastName: 'Thornton',
        username: '@fat',
        email: 'fat@yandex.ru',
        age: '45',
        status: 'primary'
      },
      {
        id: 3,
        firstName: 'Larry',
        lastName: 'Bird',
        username: '@twitter',
        email: 'twitter@outlook.com',
        age: '18',
        status: 'success'
      },
      {
        id: 4,
        firstName: 'John',
        lastName: 'Snow',
        username: '@snow',
        email: 'snow@gmail.com',
        age: '20',
        status: 'danger'
      },
      {
        id: 5,
        firstName: 'Jack',
        lastName: 'Sparrow',
        username: '@jack',
        email: 'jack@yandex.ru',
        age: '30',
        status: 'warning'
      }
    ];
  }

})();