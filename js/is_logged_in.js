function isLoggedIn() {
    $.get('../php/is_logged_in.php', function(res) {
        if (res == 1) {
            window.location = 'profile.html';
        }
    });
}