<!DOCTYPE html>
<html>

<head>
<title> Cookies </title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inclusive+Sans&family=Merienda:wght@800&family=Quicksand:wght@500;600&display=swap" rel="stylesheet">
<link rel = "stylesheet" type = "text/css" href = "mystyle.css" />
</head>
<body>

<h1 class = "align-center">Cookies</h1>
<br />
<?php

session_start();

$sessionID = session_id();

setcookie("CS4413", $sessionID, time() + 3600, "/");

echo "<p>CS4413 holds session ID: $sessionID</p>";
?>

</body>
</html>