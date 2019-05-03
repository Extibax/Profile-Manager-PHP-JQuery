<?php

if (isset($_POST['username'], $_POST['password'])) {
    
    require 'connection.php';

    $username = $_POST['username'];

    $password = $_POST['password'];

    if ($username && $password) {
        
        $query = "SELECT * FROM profile_manager_users WHERE username = :username";

        $signin_user = $DBH->prepare($query);

        $signin_user->bindValue(':username', $username);

        echo $signin_user->execute() ? "" : "Error: " . $signin_user->errorInfo();

        if ($signin_user->rowCount() > 0) {

            $user = $signin_user->fetch(PDO::FETCH_ASSOC);
            
            if (password_verify($password, $user['password'])) {
                $_SESSION['User'] = $user;
                echo 1;
            } else {
                echo 2;
            }
        } else {
            echo 0;
        }

    }
} else {
    echo "Were not receiving anything";
}