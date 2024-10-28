function renderCart() {
    const cartItemsDiv = document.getElementById("cartItems");
    cartItemsDiv.innerHTML = ""; // Clear previous items
    let total = 0;

    // Get cart items from local storage
    const storedItems = JSON.parse(localStorage.getItem("cartItems")) || cartItems;

    storedItems.forEach(item => {
        total += item.price;

        const itemDiv = document.createElement("div");
        itemDiv.className = "cart-item";
        itemDiv.innerHTML = `
            <span class="item-name">${item.name}</span>
            <span class="item-price">$${item.price.toFixed(2)}</span>
            <button class="remove-btn" onclick="removeFromCart(${item.id})">Remove</button>
        `;
        cartItemsDiv.appendChild(itemDiv);
    });

    // Update total price
    document.getElementById("totalPrice").innerText = `Total: $${total.toFixed(2)}`;
}

// Update the remove function
function removeFromCart(itemId) {
    cartItems = cartItems.filter(item => item.id !== itemId);
    localStorage.setItem("cartItems", JSON.stringify(cartItems)); // Save updated cart to local storage
    renderCart();
}

// Load cart from local storage on page load
window.onload = function() {
    cartItems = JSON.parse(localStorage.getItem("cartItems")) || cartItems;
    renderCart();
};
