<?php
    if (isset($_COOKIE["CS4413"])) {
        // The cookie is already set and has not expired
        $cookieVal = $_COOKIE["CS4413"];
        $cookieSet = 1;
    } else {
        // Set a new cookie
        $sessionID = uniqid();
        $expirationTime = time() + 36000;  // 10 hours
        setcookie("CS4413", $sessionID, $expirationTime, "/","ara-webtech.azurewebsites.net");
        $cookieVal = $_COOKIE["CS4413"];
        $cookieSet = 0;
    }
?>
<!DOCTYPE html>
<html>

<head>
    <title> Cookies </title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Inclusive+Sans&family=Merienda:wght@800&family=Quicksand:wght@500;600&display=swap"
        rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="mystyle.css" />
</head>

<body>

    <h1 class="align-center">Cookies</h1>
    <br />
    <?php
    if($cookieSet == 1) {
        echo "<p>CS4413 cookie is already set. Session ID is $cookieVal</p>";
    }
    else{
        echo "<p>CS4413 cookie has been set. Session ID is $cookieVal</p>";
    }
    
?>

</body>

</html>