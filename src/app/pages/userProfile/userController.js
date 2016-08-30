(function () {
  'use strict';

  angular.module('BlurAdmin.pages.userProfile')
      .controller('userController', userCtrl);

  /** @ngInject */
  function userCtrl($scope,$stateParams) {

    $scope.id = $stateParams.userID; 



    $scope.user = {	"firstName":"John", 
    				"lastName":"Doe",
    				"contact" : 71629232}













  }

})();