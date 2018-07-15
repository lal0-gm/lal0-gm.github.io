<?php

$correoDestino = "eduardo.gum15@gmail.com";


/*
	Recopilación del formulario
	
*/
$nombre = $_POST['name'];
$correo = $_POST['email'];
$subject = $_POST['subject'];
$mensaje = $_POST['message'];



//Formateando el cuerpo del correo

$cuerpo = "Enviado por: $nombre \n";
$cuerpo .= "E-mail: $correo  \n";
$cuerpo .= "Asunto: $subject \n";
$cuerpo .= "Mensaje: $mensaje";

// Envío el mensaje
mail( $correoDestino, $subject, $cuerpo);
echo "<script type=\"text/javascript\">
    alert(\"Mensaje Enviado, nos contactaremos contigo a la brevedad\");
    location.href = \"/index.html\";
</script>";
header('location: /index.html')
?>