<?php
require_once 'db/properties.php';
require_once 'db/Db.php';
if ($_POST['picName']) {
    $get_data = new Db($dbHost, $dbPort, $dbUser, $dbPasw, $dbName);
    $picName = $_POST['picName'];

    $query = "SELECT data FROM `bounding` WHERE pic_name = '$picName'";
    $get_data->count_results($query);

    if($get_data->finalResults > 0){
        $get_data->query($query);
        echo $get_data->finalResults[0]['data'];
    }else{
        echo 'no';
    }
}



