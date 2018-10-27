let app = angular.module("agenda", []);

app.controller("agendaCtrl", function ($scope, $http) {

    $scope.id=0; // Used to realize the update
    $scope.name = "";
    $scope.relation ="Friend";
    $scope.phone = "";
    $scope.listContacts = [];
    $scope.search="";
    $scope.searchOption="Name";



    $scope.searchContact = function(){


        if($scope.searchOption === "Name"){


          $http.get("http://localhost:8085/contact/findByName/"+$scope.search).then(function (response) {

            $scope.listContacts= response.data;

          })


        }
        else if ($scope.searchOption === "Relation"){

            $http.get("http://localhost:8085/contact/findByRelation/"+$scope.search).then(function (response) {

                $scope.listContacts = response.data;
            })


        }
        else{

            $http.get("http://localhost:8085/contact/findByPhone/"+$scope.search).then(function (response) {

                $scope.listContacts = response.data;
            })

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

        if($scope.name !== "" && $scope.relation != "" && $scope.phone !== "") {

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

                    $("#failedCreateContact").alert("close");

                    window.location.reload();

                }, 2000);

            });

        }else{

            alert("Alert! Please fill the fields");



        }
    };

    $scope.getAllContacts = (function () {

        $http.get('http://localhost:8085/contact').then(function (response) {

            $scope.listContacts = response.data;

        }).catch(function (response) {

            alert("Error to connect in the database");

        })
    });

    // Call method get all contacts to show the contacts in the index

    $scope.getAllContacts();

    $scope.getContactById = function (userId) {

        $scope.isSearchActive=false;

        $http.get('http://localhost:8085/contact/'+userId).then(function (response) {
            alert(response.data["name"]);

        }).catch(function (response) {


            window.setTimeout(function () {

                $("#failedCreateContact").alert("close");

                window.location.reload();

            }, 2000);
        });
        ;
    };

    $scope.deleteContact = function (userId) {

        $("#modal-question-delete").modal("toggle");

        $http.delete('http://localhost:8085/contact/' + userId).then(function (response) {

            alert("Contact deleted successfully");


        }).catch(function (response) {

            $("#failedCreateContact").show();

            window.setTimeout(function () {

                $("#failedCreateContact").alert("close");

            }, 2000);

        });

        window.location.reload();


    };

    $scope.updateContact = function () {

        if($scope.name !== "" && $scope.relation != "" && $scope.phone !== "") {

            $("modal-user").modal("toggle");

            let contact = {"id": $scope.id, "name": $scope.name, "relation": $scope.relation, "phone": $scope.phone};

            $http.put("http://localhost:8085/contact", contact).then(function (response) {

                $("#successCreateContact").show();

                window.setTimeout(function () {

                    $("#successCreateContact").alert("close");

                    window.location.reload();

                }, 2000);

            }).catch(function () {

                $("#failedCreateContact").show();

                window.setTimeout(function () {

                    $("#failedCreateContact").alert("close");

                    window.location.reload();

                }, 2000);


            })

        }else{
            alert("Alert! Please fill the fields");
        }





    };

});

