<?php
	
	$nome = $_POST['nome'];
	$email = $_POST['email'];
	$whatsapp = $_POST['whatsapp'];

	$from = "test@hostinger.com";
	$to = "larissaribeiro815@gmail.com";
	$subject = "Novo lead";
	$message = $nome ;
	$headers = "From:" . $nome;
	mail($to,$subject,$message, $headers);
	echo "The email message was sent.";
?>
