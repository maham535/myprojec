document.getElementById("quizForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Collect answers
    const color = document.querySelector('input[name="color"]:checked')?.value;
    const style = document.querySelector('input[name="style"]:checked')?.value;
    const material = document.querySelector('input[name="material"]:checked')?.value;
    const space = document.querySelector('input[name="space"]:checked')?.value;
    const room = document.querySelector('input[name="room"]:checked')?.value;

    // Check if all questions are answered
    if (!color || !style || !material || !space || !room) {
        document.getElementById("result").innerHTML = "Please answer all the questions!";
        document.getElementById("result").classList.remove("hidden");
        return;
    }

    // Determine result based on answers
    let result = "Your furniture style is: ";

    if (color === "light" && style === "modern" && material === "wood") {
        result += "Scandinavian Minimalist";
    } else if (color === "dark" && style === "traditional" && material === "wood") {
        result += "Classic Elegance";
    } else if (color === "bold" && style === "eclectic" && material === "metal") {
        result += "Industrial Chic";
    } else if (space === "small" && room === "living-room") {
        result += "Urban Compact";
    } else if (space === "large" && room === "bedroom") {
        result += "Luxurious Comfort";
    } else {
        result += "Contemporary Fusion";
    }

    // Display result
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = result;
    resultDiv.classList.remove("hidden");
});

