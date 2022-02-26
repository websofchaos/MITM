<?php

 if(!empty($_GET['host'])) {
    $logfile = fopen('host.txt', 'a');
    fwrite($logfile, $_GET['host']);
    fwrite($logfile, "\n");
    fclose($logfile);
}

 
?>
