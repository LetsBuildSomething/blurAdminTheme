(function () {
  'use strict';

  angular.module('BlurAdmin.pages.userProfile')
      .controller('usersController', usersCtrl);

  /** @ngInject */
  function usersCtrl($scope) {

    $scope.name= "PissuNadun";
  }

})();