$(document).ready(function () {

    loadContent();

    $('form').submit(function (e) {
        e.preventDefault();
        editUser();
    });

    function loadContent() {
        $.get('../php/load_content.php', 'aplication/json', function (res) {
            let content = {};
            try {
                content = JSON.parse(res);

                let template = "";

                template = `<img src="data:${content.image_file_type};base64,${content.image_file_content}">`;

                $('#image_profile').html(template);
                $('#first_name').val(content.first_name);
                $('#username').val(content.username);
            } catch (error) {
                console.log('Error trying parse to JSON: ' + error);
            }
        });
    }

    function editUser() {

        const edit_user = new FormData;

        edit_user.append('first_name', $('#first_name').val());
        edit_user.append('username', $('#username').val());

        if ($('#image_file')[0].files[0] != null) {
            edit_user.append('image_file', $('#image_file')[0].files[0]);
        }

        $.ajax({
            url: '../php/edit_user.php',
            type: 'POST',
            data: edit_user,
            contentType: false,
            processData: false,
            cache: false,
            success: function (res) {
                console.log(res);
                if (res == 1) {
                    swal('Congratulations', 'Your profile has been updated', 'success').then(() => {
                        loadContent();
                    });
                } else if (res == 2) {
                    swal('Sorry', 'Any input can be null', 'error');
                } else {
                    swal('Sorry', 'Error trying update your profile', 'error');
                }
            }
        });
    }
});