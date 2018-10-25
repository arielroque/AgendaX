let app = angular.module("agenda", []);

app.controller("createCtrl", function ($scope, $http) {

    $scope.name = "";
    $scope.surname = "";
    $scope.phone = "";

    $scope.createContact = function () {

        let json = {"name": $scope.name, "surname": $scope.surname, "phone": $scope.phone};

        alert(json["name"]);


        $http.post("http://localhost:8085/people", json).then(function (response) {

            alert("foooi");


        }).catch(function (response) {

            alert("erro");

        });


    };






});

