function isNotLoggedIn() {
    $.get('../php/is_logged_in.php', function(res) {
        if (res != 1) {
            window.location = 'signin.html';
        }
    });
}