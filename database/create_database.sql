CREATE DATABASE IF NOT EXISTS profile_manager_php_jquery CHARACTER SET utf8 COLLATE utf8_unicode_ci;

USE profile_manager_php_jquery;

CREATE TABLE IF NOT EXISTS users(
    id              INT(5) NOT NULL AUTO_INCREMENT,
    firstname       VARCHAR(100) NOT NULL,
    username        VARCHAR(100) NOT NULL,
    password        VARCHAR(200) NOT NULL,
    CONSTRAINT pk_users PRIMARY KEY(id)
)ENGINE='InnoDB' CHARACTER SET utf8 COLLATE utf8_unicode_ci;