<?php
	ini_set( 'display_errors', 1 );
	error_reporting( E_ALL );

	$nome = $_POST['nome'];
	$email = $_POST['email'];
	$whatsapp = $_POST['whatsapp'];

	$from = "test@hostinger-tutorials.com";
	$to = "larissaribeiro815@gmail.com";
	$subject = "Novo lead";
	$message = $nome ;
	$headers = "From:" . $nome;
	mail($to,$subject,$message, $headers);
	echo "The email message was sent.";
?>
