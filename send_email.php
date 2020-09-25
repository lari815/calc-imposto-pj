<?php
	
	$nome = $_POST['nome'];
	$email = $_POST['email'];
	$whatsapp = $_POST['whatsapp'];

	$from = "test@hostinger.com";
	$to = "larissaribeiro815@gmail.com";
	$subject = "Novo lead";
	$message = "nome :" . $nome . " | email: " . $email . " | whatsapp: " . $whatsapp;
	$headers = "From: new lead";
	
	mail($to, $subject, $message, $headers);

	echo "Entraremos em contato com você em breve!";
?>
