document.addEventListener('DOMContentLoaded', () => {
    // Assuming selected items and total amount are stored in localStorage
    const selectedItems = JSON.parse(localStorage.getItem('selectedItems')) || [];
    const orderItemsContainer = document.getElementById('order-items');
    const totalAmountElement = document.getElementById('total-amount');
    const paymentAmountInput = document.getElementById('payment-amount');

    let totalAmount = 0;

    // Display selected items
    selectedItems.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('item');
        itemDiv.innerHTML = `<p>${item.name} - $${item.price}</p>`;
        orderItemsContainer.appendChild(itemDiv);

        // Calculate total amount
        totalAmount += parseFloat(item.price);
    });

    // Display total amount
    totalAmountElement.innerText = totalAmount;
    paymentAmountInput.value = totalAmount; // Show total amount in payment section

    // Payment form logic
    const paymentForm = document.getElementById('payment-form');
    const onlinePaymentSection = document.getElementById('online-payment-section');

    // Show online payment fields when "Online Payment" is selected
    paymentForm.elements['payment-method'].forEach(radio => {
        radio.addEventListener('change', (event) => {
            if (event.target.value === 'online') {
                onlinePaymentSection.style.display = 'block';  // Show card details for online payment
            } else {
                onlinePaymentSection.style.display = 'none';  // Hide card details for COD
            }
        });
    });

    // Submit form (handle both payment methods)
    paymentForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const paymentMethod = paymentForm.elements['payment-method'].value;

        if (paymentMethod === 'online') {
            const cardName = document.getElementById('card-name').value;
            const cardNumber = document.getElementById('card-number').value;
            const expiryDate = document.getElementById('expiry-date').value;
            const cvv = document.getElementById('cvv').value;

            if (!cardName || !cardNumber || !expiryDate || !cvv) {
                alert('Please fill in all card details for online payment.');
                return;
            }

            // Simulate online payment process (fake)
            alert('Payment Successful via Online Payment!');

        } else if (paymentMethod === 'cod') {
            // Simulate cash on delivery process
            alert('Order placed with Cash on Delivery!');
        }

        // Clear the cart and redirect to order confirmation page
        localStorage.removeItem('selectedItems');
        localStorage.setItem('totalAmount', totalAmount);  // Store total for the challan
        window.location.href = 'ordercom.html'; // Redirect to order completion page
    });
});
