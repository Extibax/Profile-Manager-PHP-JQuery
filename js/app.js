$(document).ready(function () {

    isNotLoggedIn();

    loadContent();

    $('time.timeago').timeago();

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

    function loadContent() {
        $.get('../php/load_content.php', 'aplication/json', function(res) {
            let content = {};
            try {
                content = JSON.parse(res);

                let template = "";

                template = `<img src="data:${content.image_file_type};base64,${content.image_file_content}">`;

                $('#image_profile').html(template);
                $('#username').text(content.username);
                $('#signup_ago').timeago('update', content.created_at);
            } catch (error) {
                console.log('Error trying parse to JSON: ' + error);
            }
        });
    }
});