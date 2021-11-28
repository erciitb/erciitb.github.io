<?php

// setting the email to be sent to
$myEmail = "erciitbombay@gmail.com";

// getting user variables
$userName = $_POST['name'];
$userEmail = $_POST['email'];
$userMessage = $_POST['message'];

// setting email parameters
$emailSubject = "New Form submission on ERC Website by ".$userName;
$emailBody = "You have received a new message. \nHere are the details:\n\tUsername: $userName\n\tEmail: $userEmail\n\tMessage \n\t$userMessage";

// defining mail information
$to = "erciitbombay@gmail.com";
$headers = "From: ".$userName."\r\n";
$headers .= "Reply-To: ".$userEmail."\r\n";


$send = mail( $to, $emailSubject, $emailBody, $headers);

if ($send) {
    echo 'Redirecting to home page';
    $URL="index.html";
    echo "<script type='text/javascript'>window.location.href='$URL';</script>";
} else {
    echo 'there is some problem';
}

//redirect to the main page

?>