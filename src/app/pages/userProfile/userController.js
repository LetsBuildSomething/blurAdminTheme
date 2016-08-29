(function () {
  'use strict';

  angular.module('BlurAdmin.pages.userProfile')
      .controller('userController', userCtrl);

  /** @ngInject */
  function userCtrl($scope,$stateParams) {

    $scope.id = $stateParams.userID; 
  }

})();