(function () {
  'use strict';

  angular.module('BlurAdmin.pages.userProfile')
      .controller('usersController', usersCtrl);

  /** @ngInject */
  function usersCtrl($scope) {

    $scope.name= "PissuNadun";

    $scope.users = [
    				{"firstName":"John", "lastName":"Doe"},
    				{"firstName":"John2", "lastName":"Doe2"}
    				]
  }

})();