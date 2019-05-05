# Profile-Manager-PHP-JQuery
This is a Profile Manager

## Description
This is a Profile Manager, You can create a profile, login and manage your personal info, Like Profile Image, Or Bio text

## Favorite Part
In this part I need to update the new profile edited, So I need too update the img only if it is changed, So I solved this using ternaries in the query and using conditionals before bind each value
```php
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
```

### Languages, Technologies & Libraries Used
* HTML5
* CSS3
* Bootstrap 4.3.1
* JavaScript
* FormData
* JQuery 3.3.1
* PHP
* PDO
* MySQL
* SweetAlert
* Timeago JQuery
