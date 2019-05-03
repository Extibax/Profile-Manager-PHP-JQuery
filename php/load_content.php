<?php
use PHPMailer\PHPMailer\Exception;

require 'connection.php';

if (isset($_SESSION['User'])) {

    $load_content = $DBH->prepare('SELECT * FROM profile_manager_users WHERE id = :user_id');

    $load_content->bindValue(':user_id', $_SESSION['User']['id']);

    echo $load_content->execute() ? "" : "Error: " . $load_content->errorInfo();

    if ($load_content->rowCount() > 0) {

        $load_content_fetch = $load_content->fetch(PDO::FETCH_ASSOC);

        $load_content_fetch['image_file_content'] = base64_encode($load_content_fetch['image_file_content']);

        $load_content_json = json_encode($load_content_fetch, 512);

        echo $load_content_json ? $load_content_json : json_last_error_msg();
    } else {
        echo "The content is null";
    }
} else {
    echo "The user session not exists";
}
