<?php

require 'connection.php';

if (isset($_SESSION['User'], $_POST['first_name'], $_POST['username'])) {

    $first_name = $_POST['first_name'];
    $username = $_POST['username'];

    if ($first_name && $username) {

        $query = "
            UPDATE profile_manager_users SET first_name = :first_name, 
            username = :username" .
            ($_FILES['image_file'] ? ", image_file_type = :image_file_type, image_file_content = :image_file_content" : "") .
            " WHERE id = :user_id
        ";
        
        $edit_user = $DBH->prepare($query);

        $edit_user->bindValue(':first_name', $first_name);

        $edit_user->bindValue(':username', $username);

        if ($_FILES['image_file']) {

            $image_file_type = $_FILES['image_file']['type'];

            $image_file_content = file_get_contents($_FILES['image_file']['tmp_name']);

            $edit_user->bindValue(':image_file_type', $image_file_type);

            $edit_user->bindValue(':image_file_content', $image_file_content);
        }

        $edit_user->bindValue(':user_id', $_SESSION['User']['id']);

        echo $edit_user->execute() ? "" : "Error: " . $edit_user->errorInfo();

        if ($edit_user->rowCount() > 0) {
            echo 1;
        } else {
            echo 0;
        }
    }
} else {
    echo 'Were not receiving anything';
}
