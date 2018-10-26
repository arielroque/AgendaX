app.controller('listCtrl', function ($scope, $http) {


    $scope.listContacts = [];

    $scope.refresh= function(){

      window.location.reload();

    };

    $scope.editContact = function (userName,userSurname,userPhone) {


        let contact ={"name":userName,"surname":userSurname,"phone":userPhone};

        $scope.name=contact.name;

        $("#modal-create").modal('show');


        /*

        $.ajax({
            url: "#modal-create",
            success: function () {


                $("#name").val(contact.name);
                $("#surname").val(contact.surname);
                $("#phone").val(contact.phone);
                $("#modal-create").modal('show');

            }

        })

        */


    };

    $scope.getAllContacts = (function () {

        $http.get('http://localhost:8085/people').then(function (response) {

            $scope.listContacts = response.data;


        }).catch(function (response) {

            alert("Error while requesting the database");


        })


    });


    $scope.getAllContacts();


    $scope.getContactById = function () {



        $http.get('http://localhost:8085/people/1').then(function (response) {
            alert(response.data["name"]);

        }).catch(function (response) {
            alert("Error while requesting the database");
        });


        ;

    }

    $scope.deleteContact= function (userId) {


        $http.delete('http://localhost:8085/people/'+userId).then(function (response) {

            alert("Contact deleted successfully");

        }).catch(function (response) {

            alert(response);

        })


        $scope.refresh();

    }


});