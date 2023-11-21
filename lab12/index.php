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
    session_start();

    if (isset($_COOKIE["CS4413"])) {
        echo "<p>CS4413 cookie is already set. Session ID: {$_COOKIE["CS4413"]}, Expiration: " . date("Y-m-d H:i:s", $_COOKIE["CS4413"]) . "</p>";
    } else {
        $sessionID = uniqid();
        setcookie("CS4413", $sessionID, time() + 36000, "/");
        echo "<p>CS4413 cookie is set. Session ID: $sessionID, Expiration: " . date("Y-m-d H:i:s", time() + 36000) . "</p>";
    }
?>

</body>

</html>