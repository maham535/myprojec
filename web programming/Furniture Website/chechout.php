<?php
$servername = "localhost"; // or your server name
$username = "root"; // your database username (default is 'root' in XAMPP)
$password = ""; // your database password (default is empty in XAMPP)
$dbname = "checkout"; // replace with your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?