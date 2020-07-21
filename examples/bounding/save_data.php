<?php
require_once 'db/properties.php';
require_once 'db/Db.php';
if ($_POST['picName']) {
    $set_data = new Db($dbHost, $dbPort, $dbUser, $dbPasw, $dbName);
    $picName = $_POST['picName'];
    $data = $_POST['data'];
    $query = "insert into `bounding`(`pic_name`, `data`, `date`) values ('$picName', '$data', curdate())";
    $set_data->add_to_db($query);
    $query = "update `bounding`set `data` = '$data', `date` =  curdate() where `pic_name` = '$picName'";
    $set_data->add_to_db($query);
}
