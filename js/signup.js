$(document).ready(function () {
    $('form').submit(function (e) {
        e.preventDefault();
        console.log('Pressed');
        saveUser();
    })
});

function saveUser() {

    let user_data = new FormData;

    /* user_data.append('image_file', $('#image_file')[0].files[0]); */
    user_data.append('first_name', $('#first_name').val());
    user_data.append('username', $('#username').val());
    user_data.append('password', $('#password').val());

    console.log(user_data);

    $.ajax({
        url: '../php/signup.php',
        type: 'POST',
        data: user_data,
        success: function (res) {
            console.log(res);
        }
    })
}

function oldSaveUser() {

    let user_data = new FormData;

    user_data.append('imagefile', $('#imagefile')[0].files[0]);
    user_data.append('first_name', $('#firstname').val());
    user_data.append('username', $('#username').val());
    user_data.append('password', $('#password').val());

    $.post('../php/signup.php', user_data, function (res) {
        console.log(res);
        if (res == 1) {
            console.log('Registered successfully');
        } else {
            console.log('Something is wrong');
        }
    });
}