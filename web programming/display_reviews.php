php
<?php
$servername = "localhost"; // Change if necessary
$username = "root"; // Your database username
$password = ""; // Your database password
$dbname = "furniture_store";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$product_id = 1; // Change based on the product
$sort_order = "created_at DESC"; // Default sort by date
if (isset($_GET['sort'])) {
    $sort_order = ($_GET['sort'] === 'rating') ? 'rating DESC' : 'created_at DESC';
}

$sql = "SELECT customer_name, rating, comment, created_at FROM reviews WHERE product_id = ? ORDER BY $sort_order";
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $product_id);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        echo "<div class='review'>";
        echo "<h4>" . htmlspecialchars($row['customer_name']) . " (" . $row['rating'] . "/5)</h4>";
        echo "<p>" . htmlspecialchars($row['comment']) . "</p>";
        echo "<small>Posted on " . $row['created_at'] . "</small>";
        echo "</div>";
    }
} else {
    echo "<p>No reviews yet.</p>";
}

$stmt->close();
$conn->close();
?>
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $furnitureType = htmlspecialchars($_POST['furniture_type']);
    $materials = htmlspecialchars($_POST['materials']);
    $dimensions = htmlspecialchars($_POST['dimensions']);
    $customRequirements = htmlspecialchars($_POST['custom_requirements']);

    // You can send this information via email or store it in a database
    $to = "your-email@example.com";
    $subject = "New Custom Furniture Request";
    $message = "Furniture Type: $furnitureType\nMaterials: $materials\nDimensions: $dimensions\nOther Requirements: $customRequirements";
    $headers = "From: website@example.com";

    if (mail($to, $subject, $message, $headers)) {
        echo "Your custom request has been sent successfully!";
    } else {
        echo "There was a problem sending your request.";
    }
}
?>
<?php
// Database connection details
$servername = "localhost"; // Usually "localhost"
$username = "root";        // Your MySQL username
$password = "";            // Your MySQL password (usually blank for XAMPP, WAMP)
$dbname = "furniture_store";  // Your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";

// Insert data example (e.g., from the custom furniture form)
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $furnitureType = $conn->real_escape_string($_POST['furniture_type']);
    $materials = $conn->real_escape_string($_POST['materials']);
    $dimensions = $conn->real_escape_string($_POST['dimensions']);
    $customRequirements = $conn->real_escape_string($_POST['custom_requirements']);

    $sql = "INSERT INTO custom_requests (furniture_type, materials, dimensions, custom_requirements) 
            VALUES ('$furnitureType', '$materials', '$dimensions', '$customRequirements')";

    if ($conn->query($sql) === TRUE) {
        echo "New custom request submitted successfully!";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

// Close connection
$conn->close();
?>
