<?php
session_start();
$email = htmlspecialchars($_POST['email']);
$password = htmlspecialchars($_POST['password']);

if ($email == "darkseid" and $password == "itsasecret") {
    header('Location: index.php');
    $_SESSION['res'] = "<p id='good'>Login Successful</p>";
    }
else {
header('Location: index.php');
$_SESSION['res'] = "<p id='bad'>Login Failed</p>";
}

?>
