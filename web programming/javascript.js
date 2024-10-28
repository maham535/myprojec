fetch('submit_review.php', {
    method: 'POST',
    body: formData
})
.then(response => response.text())
.then(data => {
    console.log(data); // Check what is returned
    document.getElementById('reviews').innerHTML += data; // Append new review
    this.reset(); // Reset the form
    ratingInput.value = ''; // Reset rating
    stars.forEach(star => star.style.color = '#ddd'); // Reset star colors
})
