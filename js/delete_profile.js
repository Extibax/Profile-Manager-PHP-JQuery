$(document).ready(function () {

    $('#delete_profile').click(function () {
        swal({
            title: '¿Are you sure?',
            text: 'Once deleted, You will not be able to recover this profile',
            icon: 'warning',
            buttons: true,
            dangerMode: true
        }).then((willDelete) => {
            if (willDelete) {
                swal('¡Poof!', 'Your profile has been deleted').then(() => {
                    deleteUser();
                });
            } else {
                swal("¡Your profile is safe!");
            }
        })
    });

    function deleteUser() {
        $.get('../php/delete_user.php', function (res) {
            console.log(res);
            if (res == 1) {
                swal('Good Bye', 'Youre profile has been deleted', 'success').then(() => {
                    window.location = 'signin.html';
                });
            } else {
                swal('Sorry', 'Error trying remove your profile', 'error');
            }
        });
    }
});