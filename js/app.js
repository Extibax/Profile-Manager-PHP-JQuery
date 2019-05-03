$(document).ready(function () {
    $('#log_out').click(function () {
        $.get('../php/log_out.php', function (res) {
            console.log(res);
            if (res == 1) {
                swal('Good Bye', 'Youre now logged out', 'success').then(() => {
                    window.location = '../index.html';
                });
            } else {
                swal('Sorry', 'Error trying to close session', 'error');
            }
        });
    });
});