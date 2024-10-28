CREATE TABLE checkout (
    id INT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    address VARCHAR(255) NOT NULL,
    city VARCHAR(100) NOT NULL,
    state VARCHAR(100) NOT NULL,
    zip VARCHAR(20) NOT NULL,
    card_number VARCHAR(20) NOT NULL,
    expiry_date VARCHAR(5) NOT NULL,
    cvc VARCHAR(4) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
<?php
$servername = "localhost"; // or your server name
$username = "root"; // your database username (default is 'root' in XAMPP)
$password = ""; // your database password (default is empty in XAMPP)
$dbname = "mahi"; // replace with your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
    
}
?