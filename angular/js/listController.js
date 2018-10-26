app.controller('listCtrl', function ($scope, $http) {


    $scope.listContacts = [];

    $scope.editModal = function (userName,userSurname,userPhone) {


        let contact ={"name":userName,"surname":userSurname,"phone":userPhone};


        $.ajax({
            url: "#modal-create",
            success: function () {

                $("#name").val(contact.name);
                $("#surname").val(contact.surname);
                $("#phone").val(contact.phone);
                $("#modal-create").modal('show');

            }

        })


    };

    $scope.editContact = function () {

        alert("opaa");

        $("#modal-create").removeData();

        $("#modal-create").modal('hidden');


    };


    $scope.getAllContacts = (function () {

        $http.get('http://localhost:8085/people').then(function (response) {

            $scope.listContacts = response.data;


        }).catch(function (response) {

            alert("Error to request the Database");


        })


    });


    $scope.getAllContacts();


    $scope.getContactById = function () {


        $http.get('http://localhost:8085/people/1').then(function (response) {
            alert(response.data["name"]);

        }).catch(function (response) {
            alert("error");
        });


        ;

    }


});