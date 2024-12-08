<?php
    $host = "localhost";
    $server ="root";
    $password = "";
    $database = "sierra";
    $conn = mysqli_connect($host, $server,$password,$database );
    if($conn == true){
        echo "connect";
    }else{
        echo "not connect";
    }
    ?>