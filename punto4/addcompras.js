
const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
const cartItemsContainer = document.querySelector('.cart-items');
const cartTotalElement = document.getElementById('cart-total');


let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Función para agregar productos al carrito
function addToCart(product) {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    updateCart();
}

// Función para actualizar el carrito y recalcular el total
function updateCart() {
    cartItemsContainer.innerHTML = ''; // Limpiar carrito visual
    let total = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <h4>${item.name} (x${item.quantity})</h4>
            <p>$${itemTotal.toFixed(2)}</p>
        `;

        cartItemsContainer.appendChild(cartItem);
    });

    cartTotalElement.textContent = total.toFixed(2);
    localStorage.setItem('cart', JSON.stringify(cart)); // Guardar carrito en localStorage
}

// Obtener datos del producto desde la interfaz
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const productItem = button.closest('.product-item');
        const productId = parseInt(productItem.getAttribute('data-id'));
        const productName = productItem.querySelector('h3').textContent;
        const productPrice = parseFloat(productItem.querySelector('p').textContent.replace('Precio: $', ''));

        const product = { id: productId, name: productName, price: productPrice };
        addToCart(product);
    });
});

// Actualizar carrito al cargar la página
updateCart();
