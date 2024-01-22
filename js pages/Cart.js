
function displayCartItems() {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || {};
    let cartContainer = document.getElementById('Cart_Items');

    // Clear previous content
    cartContainer.innerHTML = '';

    // Iterate over the array of cart items
    
    Object.values(cartItems).forEach((cartItem) => {
        let div = document.createElement('div');
        div.id = 'cart_product_items';

        // For the image section
        let div_image = document.createElement('div');
        div_image.id = 'cart_image_box';
        let pic = document.createElement('img');
        pic.src = cartItem.product.pic;
        div_image.appendChild(pic);

        // For the text content section
        let div_content = document.createElement('div');
        div_content.id = 'cart_content_box';
        let productName = document.createElement('p');
        productName.textContent = cartItem.product.name;
        let quantity = document.createElement('p');
        quantity.textContent = 'Quantity: ' + cartItem.quantity;
        let price = document.createElement('p');
        price.textContent = 'Price: ' + cartItem.price;

        // Create a remove button
        let removeButton = document.createElement('button');
        removeButton.textContent = 'Remove items';
        removeButton.addEventListener('click', () => {
            removeCartItem(cartItem.product.name);
        });

        div_content.append(productName, quantity, price, removeButton);

        // Append the elements to the container
        div.append(div_image, div_content);
        cartContainer.appendChild(div);
    });
}

// Function to remove a cart item by product name
function removeCartItem(productName) {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || {};

    // Remove the item from the cartItems object
    delete cartItems[productName];

    // Update the cartItems in local storage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    // Redisplay the updated cart items
    displayCartItems();
}

// Call the function to display cart items when the page loads
window.onload = displayCartItems;



