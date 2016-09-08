(function () {
    'use strict';

    angular.module('BlurAdmin.pages.userProfile')
        .controller('usersController', usersCtrl);

    /** @ngInject */
    function usersCtrl($scope) {

        $scope.name = "PissuNadun";

        //It's better if we can load a tablePageSize default value as a global property.
        $scope.tablePageSize = 10;
        $scope.allUsers = [
            {
                "username": "pissunadun",
                "firstName": "Pissu",
                "lastName": "Nadun",
                "email": "pissu@nadun.tk",
                "age": "23",
                "imageSrc": "assets/img/app/profile/Nasta.png"
            },
            {
                "username": "pissujohn1",
                "firstName": "Pissu",
                "lastName": "Johnny",
                "email": "john@nadun.tk",
                "age": "29",
                "imageSrc": "assets/img/app/profile/Nasta.png"
            },
            {
                "username": "pissujohn2",
                "firstName": "Pissu",
                "lastName": "John",
                "email": "john@nadun.tk",
                "age": "29",
                "imageSrc": "assets/img/app/profile/Nasta.png"
            },
            {
                "username": "pissujohn3",
                "firstName": "Pissu",
                "lastName": "John",
                "email": "john@nadun.tk",
                "age": "29",
                "imageSrc": "assets/img/app/profile/Nasta.png"
            },
            {
                "username": "pissujohn4",
                "firstName": "Pissu",
                "lastName": "John",
                "email": "john@nadun.tk",
                "age": "29",
                "imageSrc": "assets/img/app/profile/Nasta.png"
            },
            {
                "username": "pissujohn5",
                "firstName": "Pissu",
                "lastName": "John",
                "email": "john@nadun.tk",
                "age": "29",
                "imageSrc": "assets/img/app/profile/Nasta.png"
            },
            {
                "username": "pissujohn6",
                "firstName": "Pissu",
                "lastName": "John",
                "email": "john@nadun.tk",
                "age": "29",
                "imageSrc": "assets/img/app/profile/Nasta.png"
            },
            {
                "username": "pissujohn7",
                "firstName": "Pissu",
                "lastName": "John",
                "email": "john@nadun.tk",
                "age": "29",
                "imageSrc": "assets/img/app/profile/Nasta.png"
            },
            {
                "username": "pissujohn8",
                "firstName": "Pissu",
                "lastName": "John",
                "email": "john@nadun.tk",
                "age": "29",
                "imageSrc": "assets/img/app/profile/Nasta.png"
            },
            {
                "username": "pissujohn9",
                "firstName": "Pissu",
                "lastName": "John",
                "email": "john@nadun.tk",
                "age": "29",
                "imageSrc": "assets/img/app/profile/Nasta.png"
            },
            {
                "username": "pissujohn10",
                "firstName": "Pissu",
                "lastName": "John",
                "email": "john@nadun.tk",
                "age": "29",
                "imageSrc": "assets/img/app/profile/Nasta.png"
            },
            {
                "username": "pissudoe",
                "firstName": "Pissu John",
                "lastName": "Doe",
                "email": "pissu@doe.tk",
                "age": "33",
                "imageSrc": "assets/img/app/profile/Nasta.png"
            }
        ]
    }

})();