<?php
$nombre = $_REQUEST[name];
$apellido = $_REQUEST[apellido];
$Mail = $_REQUEST[email];
$consultas = $_REQUEST[message];
mail( "ivan6258@hotmail.com", "Feedback Form Results", $consultas, "From: $Mail" );
header( "Location: index.html" );
?>