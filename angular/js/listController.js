app.controller('listCtrl', function ($scope, $http) {


    $scope.listContacts = [];


    $scope.editModal = function (userId) {

        $http.get("http://localhost:8085/people/"+userId).then(function (response) {

            contact = response.data;
        });


        $.ajax({
            url: "#modal-create",
            success: function () {

                $("#name").val(contact.name);
                $("#surname").val(contact.surname);
                $("#phone").val(contact.phone);
                $("#modal-create").modal('show');

            }

        })

        //$('#modal-create').modal();

        /*

        $("#name").html('Edit auction with id ');
        $("#surname").value("fdfdfd");

        */
        //$('#edit-auction-modal ').find('input#input-id').val($(e.relatedTarget).data('title'))


    };

    $scope.editContact = function () {


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