<<<<<<< HEAD
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
=======
let app = angular.module("agenda",[]);

app.controller("createCtrl",function ($scope,$http) {

    $scope.name="";
    $scope.surname="";
    $scope.phone="";


    $scope.createContact= function(){

        let json = {"name":$scope.name,"surname":$scope.surname,"phone":$scope.phone};

        alert(json["name"]);

        $http({
            'url' : 'localhost:8085/people',
            'method' : 'POST',
            'headers': {'Content-Type' : 'application/json'},
            'data' : json
        }).success(function(data){
            //$scope.marketForm.texts.push({'text' : data.text});
            alert("oi");
        }).error(function (response) {

            alert(response)

        })

        /*$http.post('http://localhost:8085/people', json )
            .success(function(data, status, headers, config) {
                $scope.message = data;
            })
            .error(function(data, status, headers, config) {
                alert( "failure message: " +config);
                alert(status);
            });

            */


        /*let json = {"name":$scope.name,"surname":$scope.surname,"phone":$scope.phone};

        const url ="http://localhost:8085/people";

        $http.post(url,json).then(function (response) {
            alert(response);



        })

        */
>>>>>>> 464dfb2c57bd344d346974065320bdffef29a695


    }




<<<<<<< HEAD

})
;
=======
});
>>>>>>> 464dfb2c57bd344d346974065320bdffef29a695
