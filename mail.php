<?php

$recepient = "support@nodepower.eu";
$sitename = "Node";

$name = trim($_GET["name"]);
$phone = trim($_GET["email"]);
$text = trim($_GET["message"]);

$pagetitle = "Новая заявка с сайта \"$sitename\"";
$message = "Name: $name \nE-mail: $email \nText: $message";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");