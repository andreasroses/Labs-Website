<?php
if ($_SERVER["REQUEST_METHOD"] === "POST"){
    $fname = $_POST["fname"];
    $lname = $_POST["lname"];
    $file = "/home/site/priv/userInfo.txt";
    $data = "$fname $lname\n";
    file_put_contents($file, $data, FILE_APPEND);
    include('show_data.php');
}
else{
    echo "save_data.php failed";
}
