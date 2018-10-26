let app = angular.module("agenda", []);

app.controller("createCtrl", function ($scope, $http) {

    $scope.id=0; // Used to realize the update
    $scope.name = "";
    $scope.relation = "Friend";
    $scope.phone = "";
    $scope.listContacts = [];


    $scope.refresh = function () {

        window.location.reload();

    };

    $scope.searchContact = function(option="name"){

        if(option === "name"){

            alert("oi");

          $http.get("http://localhost:8085/contact/find/"+name).then(function (response) {

            $scope.listContacts= response.data;

            window.location.reload();

          })


        }
        else if ( option === ""){


        }
        else{

        }






    };

    $scope.openQuestionModal = function(){


        $("#modal-question-delete").modal();

    };

    $scope.openContactModal = function(){

        $scope.id=0;
        $scope.id=0;
        $scope.name = "";
        $scope.phone = "";

        $("#modal-title").text("Create Contact");

        $("#modal-user").modal();


    };

    $scope.editModal = function (userId,userName, userRelation, userPhone) {

        alert(userRelation);

        $.ajax({
           url:"#modal-user",
           success: function () {
               $("#modal-title").text("Update Contact");
           }
        });

        $scope.id =userId;
        $scope.name = userName;
        $scope.relation = userRelation;
        $scope.phone = userPhone;
        $("#modal-user").modal('show');


    };

    $scope.chooseCreateOrUpdate = function(){

        if($scope.id !== 0){
            $scope.updateContact();
        }

        else{
            $scope.createContact();

        }

    };

    $scope.createContact = function () {

        alert($scope.relation);

        let json = {"name": $scope.name, "relation": $scope.relation, "phone": $scope.phone};

        $("#modal-user").modal("toggle");

        $http.post("http://localhost:8085/contact", json).then(function (response) {

            $("#successCreateContact").show();

            window.setTimeout(function () {

                $("#successCreateContact").alert("close");

                window.location.reload();

            }, 2000);

        }).catch(function (response) {

            $("#failedCreateContact").show();

            window.setTimeout(function () {

                $("#successCreateContact").alert("close");

                window.location.reload();

            }, 2000);

        });
    };

    $scope.getAllContacts = (function () {

        $http.get('http://localhost:8085/contact').then(function (response) {

            $scope.listContacts = response.data;

        }).catch(function (response) {

            alert("Error while requesting the database");
        })
    });

    // Call method get all contacts to show the contacts in the index

    $scope.getAllContacts();

    $scope.getContactById = function (userId) {

        $http.get('http://localhost:8085/contact/'+userId).then(function (response) {
            alert(response.data["name"]);

        }).catch(function (response) {
            alert("Error while requesting the database");
        });
        ;
    };

    $scope.deleteContact = function (userId) {

        $http.delete('http://localhost:8085/contact/' + userId).then(function (response) {

            alert("Contact deleted successfully");

        }).catch(function (response) {

            alert(response);

        });

        $scope.refresh();

    };

    $scope.updateContact = function () {

        $scope.id=0;

        $("modal-user").modal("toggle");

        let contact = {"id":$scope.id,"name":$scope.name,"relation":$scope.relation,"phone":$scope.phone};

        $http.put("http://localhost:8085/contact",contact).then(function (response) {

            window.setTimeout(function () {

                window.location.reload();

            },2000);

        }).catch(function () {



        })





    };

});

