<?php
$lines = file($file, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
$parsedFile = array();
foreach($lines as $line){
    list($showfname,$showlname) = explode(' ',$line,2);
    $parsedFile[] = array('showfname' => $showfname, 'showlname' => $showlname);
}
echo "<table><tr><th>First Name</th><th>Last Name</th></tr>";
foreach($parsedFile as $entry){
    echo "<tr><td>" . $entry['showfname'] . "</td>";
    echo "<td>" . $entry['showlname'] . "</td></tr>";
}
echo "</table>";
?>