<?php

require 'connection.php';

if (isset($_SESSION['User'])) {
    $delete_user = $DBH->prepare("DELETE FROM profile_manager_users WHERE id = :user_id");

    $delete_user->bindValue(':user_id', $_SESSION['User']['id']);

    echo $delete_user->execute() ? "" : "Error: " . $delete_user->errorInfo();

    if ($delete_user->rowCount() > 0) {
        session_destroy();
        echo 1;
    } else {
        echo 0;
    }
}