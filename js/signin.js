$(document).ready(function () {

    isLoggedIn();

    $('form').submit(function (e) {
        e.preventDefault();
        loginUser(() => {
            $(this)[0].reset();
        });
    });

    function loginUser() {

        const user_data = new FormData;

        user_data.append('username', $('#username').val());
        user_data.append('password', $('#password').val());

        $.ajax({
            url: '../php/signin.php',
            type: 'POST',
            data: user_data,
            processData: false,
            contentType: false,
            cache: false,
            success: function (res) {
                console.log(res);
                if (res == 1) {
                    swal('Welcome', 'Youre now logged in', 'success').then(() => {
                        window.location = 'profile.html';
                    });
                } else if (res == 0) {
                    swal('¡Sorry!', "The username not exists", 'error');
                } else if (res == 2) {
                    swal('¡Sorry!', "Incorrect Password", 'error');
                } else {
                    swal('¡Sorry!', "Error trying to login", 'error');
                }
            }
        });

    }

});