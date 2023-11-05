<?php
if ($_SERVER["REQUEST_METHOD"] === "GET"){
    $file = "/home/site/priv/userInfo.txt";
    $lines = file($file, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    $parsedFile = array();
    foreach($lines as $line){
        list($fname,$lname) = explode(' ',$line,2);
        $parsedFile[] = array('fname' => $fname, 'lname' => $lname);
    }
    echo "<table><tr><th>First Name</th><th>Last Name</th></tr>";
    foreach($parsedFile as $entry){
        echo "<tr><td>" . $entry['fname'] . "</td>";
        echo "<td>" . $entry['lname'] . "</td></tr>";
    }
    echo "</table>";
}
?>