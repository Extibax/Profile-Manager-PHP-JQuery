<?php

require dirname(__DIR__) . 'vendor/autoload.php';

$dotenv = Dotenv\Dotenv::create(dirname(__DIR__));
$dotenv->load();

$HOST = $_ENV['DB_HOST'];
$NAME = $_ENV['DB_NAME'];
$USER = $_ENV['DB_USER'];
$PASS = $_ENV['DB_PASS'];

try {
    $DBH = new PDO('mysql:HOST=$HOST;NAME=$NAME;charset=utf8', $USER, $PASS, [
        PDO::ATTR_EMULATE_PREPARES => false,
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
    ]);
} catch (PDOException $e) {
    echo $e->getMessage();
}