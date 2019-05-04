<?php

if (isset($_FILES['image_file'], $_POST['first_name'], $_POST['username'], $_POST['password'])) {

    require 'connection.php';

    $first_name = $_POST['first_name'];
    $username = $_POST['username'];
    $password = $_POST['password'];
    $time = $_POST['time'];

    $query = "SELECT username FROM profile_manager_users WHERE username = :username";

    $valid_user = $DBH->prepare($query);

    $valid_user->bindValue(':username', $username);

    echo $valid_user->execute() ? "" : "Error: " . $valid_user->errorInfo();

    if ($valid_user->rowCount() > 0) {
        echo 2;
        die();
    }

    $image_file = $_FILES['image_file'];
    $image_file_type = $_FILES['image_file']['type'];
    $image_file_content = file_get_contents($_FILES['image_file']['tmp_name']);

    $password_encrypt = password_hash($password, PASSWORD_BCRYPT, ['cost' => 8]);

    if ($image_file && $first_name && $username && $password) {
        
        $query = "INSERT INTO profile_manager_users "
                . "VALUES "
                . "(null, :first_name, :username, :password, :image_file_type, :image_file_content, :time)";
        
        $save_user = $DBH->prepare($query);
        
        $save_user->bindValue(':first_name', $first_name);
        $save_user->bindValue(':username', $username);
        $save_user->bindValue(':password', $password_encrypt);
        $save_user->bindValue(':image_file_type', $image_file_type);
        $save_user->bindValue(':image_file_content', $image_file_content);
        $save_user->bindValue(':time', $time);
        
        echo $save_user->execute() ? 1 : "Error: " . $save_user->errorInfo();
    }
} else {
    echo 'Were not receiving anything';
}
