<?php

// $mahasiswa = [
    
//     [
//         "nama" => "Anggieta",
//         "nik" => "08090809",
//         "email" => "anggieta0809@gmail.com"
//     ],

//     [
//         "nama" => "Amelia",
//         "nik" => "090909",
//         "email" => "amelia0909@gmail.com"
//     ]

// ];



$dsn = 'mysql:host=localhost;dbname=latihan_db';
$username = 'root';
$password = ''; 

$dbh = new PDO($dsn, $username, $password);
$db = $dbh->prepare('SELECT * FROM user');
$db->execute();
$user = $db->fetchAll(PDO::FETCH_ASSOC);

$data = json_encode($user);
echo $data;
?>
