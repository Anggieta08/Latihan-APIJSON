<?php

$data = file_get_contents('percobaan.json');
$user = json_decode($data, true);

var_dump($user);
echo $user[0]["pembimbing"]["pembimbing 2"];

?>