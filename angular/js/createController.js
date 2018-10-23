let app = angular.module("agenda", []);

app.controller("createCtrl", function ($scope, $http) {

    $scope.name = "";
    $scope.surname = "";
    $scope.phone = "";

    $scope.createContact = function () {

        let json = {"name": $scope.name, "surname": $scope.surname, "phone": $scope.phone};

        alert(json["name"]);


        $http.post("http://localhost:8085/people",json).then(function (response) {

            alert("foooi");


        }).catch(function (response) {

            alert("erro");
            
        });


    };

    $scope.get= function () {

        $scope.get= function () {

            $http.get('http://localhost:8085/people/1').then(function (response){

                alert(response.data["name"]);

            }).catch(function (response) {
                alert("error");
            });

        }


    }





})
;