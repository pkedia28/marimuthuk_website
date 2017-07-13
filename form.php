<?php
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$to = 'harshit.kedia2015@vit.ac.in'; //marimuthume@gmail.com
$subject = 'Message in Marimuthuk website';
$headers = 'From: contact@marimuthuk.com' . "\r\n" .
'Bcc: harshit.kedia2015@vit.ac.in' . "\r\n" .  
'Reply-To: no-reply@cpark.net' . "\r\n" .        
'X-Mailer: PHP/' . phpversion();
$body = "From: $name\n E-Mail: $email\n Message:\n $message";


if (mail ($to, $subject, $body, $headers)) { 
 echo '<p>Your message has been sent to! <a href="http://marimuthuk.com">Go Back</a></p>';
} else { 
 echo '<p>Something went wrong, <a href="http://marimuthuk.com">go back</a> and try again.</p>'; 
} 
?>