$(document).ready(function () {

    isLoggedIn();

    $('form').submit(function (e) {
        e.preventDefault();
        saveUser();
    });

    function saveUser() {

        const user_data = new FormData;

        user_data.append('image_file', $('#image_file')[0].files[0]);
        user_data.append('first_name', $('#first_name').val());
        user_data.append('username', $('#username').val());
        user_data.append('password', $('#password').val());
        user_data.append('time', new Date());

        $.ajax({
            url: '../php/signup.php',
            type: 'POST',
            data: user_data,
            processData: false,
            contentType: false,
            cache: false,
            success: function (res) {
                if (res == 1) {
                    $('form')[0].reset();
                    swal('¡Welcome!', "You have successfully registered", 'success').then(() => {
                        window.location = 'signin.html';
                    });
                } else if (res == 2) {
                    swal('¡Sorry!', "The username already in use", 'error');
                } else {
                    swal('¡Sorry!', "Error trying to register", 'error');
                }
            }
        });
    }

});