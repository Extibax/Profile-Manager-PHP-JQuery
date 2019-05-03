<?php

if (session_status() == PHP_SESSION_NONE) {
    session_start();
}

if (isset($_SESSION['User'])) {
    echo session_destroy() ? 1 : 0;
}