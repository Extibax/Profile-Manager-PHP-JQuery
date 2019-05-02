<?php

if (isset($_FILES['imagefile'], $_POST['firstname'], $_POST['username'], $_POST['password'])) {

    require 'connection.php';

    $imagefile = $_FILES('imagefile');
    var_dump($imagefile);
    $firstname = $_POST('firstname');
    $username = $_POST('username');
    $password = $_POST('password');

    if ($imagefile && $firstname && $username && $password) {
        
        $query = "INSERT INTO profile_manager_users "
                . "VALUES "
                . "(null, :firstname, :username, :password, :imagefile_type, :imagefile_content)";
        
        $saveuser = $DBH->prepare($query);
        
        $saveuser->bindValue(':firstname', $firstname);
        $saveuser->bindValue(':username', $username);
        $saveuser->bindValue(':password', $password);
        $saveuser->bindValue(':imagefile_type', $imagefile_type);
        $saveuser->bindValue(':imagefile_content', $imagefile_content);
        
        echo $saveuser->execute() ? "" : "Error: " . $saveuser->infoError();
    }
} else {
    echo 'Were not receiving anything';
}

?>