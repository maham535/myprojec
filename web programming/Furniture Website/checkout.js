document.getElementById('checkout-form').addEventListener('submit', function(event) {
    const cardNumber = document.getElementById('card-number').value;
    const expiry = document.getElementById('expiry').value;
    const cvc = document.getElementById('cvc').value;

    // Basic validation for card fields (can be extended)
    if (cardNumber.length !== 16 || isNaN(cardNumber)) {
        alert('Invalid Card Number');
        event.preventDefault();
    }

    if (expiry.length !== 5 || !expiry.includes('/')) {
        alert('Invalid Expiry Date');
        event.preventDefault();
    }

    if (cvc.length !== 3 || isNaN(cvc)) {
        alert('Invalid CVC');
        event.preventDefault();
    }
});
const express = require('express');
const bodyParser = require('body-parser');
const stripe = require('stripe')('your-stripe-secret-key'); // Add your secret key here

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/process-payment', (req, res) => {
    const { fullName, email, cardNumber, expiry, cvc } = req.body;

    // Process payment with Stripe
    stripe.charges.create({
        amount: 5000, // Amount in cents (e.g., $50.00)
        currency: 'usd',
        source: 'tok_visa', // Replace with actual token from frontend (Stripe.js)
        description: `Charge for ${fullName}`,
        receipt_email: email,
    }).then((charge) => {
        res.send('Payment successful!');
    }).catch((error) => {
        res.status(500).send(`Error: ${error.message}`);
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');



    document.addEventListener('DOMContentLoaded', function () {
        // Retrieve the cart data from localStorage
        let cartData = JSON.parse(localStorage.getItem('data')) || [];
    
        // Ensure there is cart data to process
        if (cartData.length === 0) {
            alert("Your cart is empty! Please add items to the cart before proceeding to checkout.");
            return;
        }
    
        // If there's cart data, display it on the checkout page
        let checkoutContainer = document.querySelector('.checkout-container');
        let cartItems = cartData.map(item => {
            return `
                <div class="cart-item">
                    <p>${item.name} - Quantity: ${item.item}</p>
                    <p>Price: $${item.price}</p>
                </div>
            `;
        }).join('');
    
        // Append the cart items to the checkout container
        checkoutContainer.innerHTML += `
            <h3>Your Cart</h3>
            <div class="cart-items">${cartItems}</div>
        `;
    });
    
    // On form submission, attach cart data to the form for backend processing
    document.getElementById('checkout-form').addEventListener('submit', function (event) {
        // Retrieve cart data again from localStorage
        const cartData = JSON.parse(localStorage.getItem('data'));
    
        // Add hidden input to pass cart data with the form
        let cartInput = document.createElement('input');
        cartInput.type = 'hidden';
        cartInput.name = 'cartData';
        cartInput.value = JSON.stringify(cartData);
        this.appendChild(cartInput);
    });
    
});
