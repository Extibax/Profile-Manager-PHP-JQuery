$(document).ready(function () {
    $('form').submit(function (e) {
        e.preventDefault();

    })
});


function saveUser() {
    let imagefile;
    let firstname = $('#firstname').val();
    let username = $('#username').val();
    let password = $('#password').val();

    let userData = {
        imagefile,
        firstname,
        username,
        password
    }

    $.post('../php/signup.php', userData, function(res) {
        if (res == 1) {
            
        } else {

        }
    });
}