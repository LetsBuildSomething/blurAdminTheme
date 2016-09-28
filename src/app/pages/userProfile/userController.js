(function () {
  'use strict';

  angular.module('BlurAdmin.pages.userProfile')
      .controller('userController',['$scope','dataContext', userCtrl]);

  /** @ngInject */
  function userCtrl($scope,dataContext) {

    //$scope.id = $stateParams.userID; 

    $scope.id = dataContext.getData("users");



    $scope.user = {	"firstName":"John", 
    				"lastName":"Doe",
    				"contact" : 71629232}

  }

})();