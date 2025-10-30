const products = [
    {
        id: 1,
        name: "Rice Cooker - 5L Capacity",
        price: 48000,
        image: "rc.jpeg",
        description: "A high-quality rice cooker that ensures perfectly cooked rice every time.",
        category: "Home Appliances",
        stock: 25,
        rating: 4.5,
    },
    {
        id: 2,
        name: "Wireless Headphones - Bluetooth 5.0",
        price: 25500,
        image: "hd.webp",
        description: "Noise-cancelling over-ear headphones with 30-hour battery life.",
        category: "Electronics",
        stock: 25,
        rating: 4.8,
    },
    {
        id: 3,
        name: "Smart Watch",
        price: 18000,
        image: "smwatch.webp",
        description: "Track your health with heart rate monitor, step counter, and sleep tracking.",
        category: "Electronics",
        stock: 5,
        rating: 4.3,
    },
    {
    id: 4,
    name: "Electric Kettle - 2L Stainless Steel",
    price: 15500,
    image: "kettle.webp",
    description: "Boils water quickly with automatic shut-off and dry boil protection.",
    category: "Home Appliances",
    stock: 40,
    rating: 4.6,
},
{
    id: 5,
    name: "Gaming Keyboard - RGB Backlit",
    price: 23000,
    image: "keyboard.webp",
    description: "Mechanical keyboard with customizable RGB lighting and anti-ghosting keys.",
    category: "Electronics",
    stock: 18,
    rating: 4.7,
},
{
    id: 6,
    name: "Portable Bluetooth Speaker",
    price: 17500,
    image: "speaker.webp",
    description: "Compact waterproof speaker with deep bass and 10-hour playtime.",
    category: "Electronics",
    stock: 22,
    rating: 4.4,
},
{
    id: 7,
    name: "Air Fryer - 3.5L Capacity",
    price: 52000,
    image: "airfryer.webp",
    description: "Cook crispy meals with 85% less oil using rapid air technology.",
    category: "Home Appliances",
    stock: 12,
    rating: 4.6,
},
{
    id: 8,
    name: "Smartphone Tripod Stand",
    price: 9000,
    image: "tripod.webp",
    description: "Adjustable aluminum tripod for stable photos and videos.",
    category: "Accessories",
    stock: 30,
    rating: 4.2,
},
{
    id: 9,
    name: "LED Desk Lamp - Touch Control",
    price: 12500,
    image: "desklamp.webp",
    description: "Dimmable LED lamp with touch controls and USB charging port.",
    category: "Home & Office",
    stock: 28,
    rating: 4.5,
},
{
    id: 10,
    name: "4K Action Camera",
    price: 34500,
    image: "actioncam.webp",
    description: "Waterproof sports camera with 4K video recording and wide-angle lens.",
    category: "Electronics",
    stock: 14,
    rating: 4.4,
},
{
    id: 11,
    name: "Electric Blender - 1.5L Glass Jar",
    price: 27000,
    image: "blender.webp",
    description: "Powerful blender for smoothies, sauces, and soups.",
    category: "Home Appliances",
    stock: 20,
    rating: 4.3,
},
{
    id: 12,
    name: "Smart LED Bulb - WiFi Enabled",
    price: 6500,
    image: "smartbulb.webp",
    description: "Control brightness and color via smartphone or voice assistant.",
    category: "Home Automation",
    stock: 50,
    rating: 4.7,
},
{
    id: 13,
    name: "Laptop Cooling Pad",
    price: 12000,
    image: "coolingpad.webp",
    description: "Ergonomic stand with dual fans for efficient laptop cooling.",
    category: "Accessories",
    stock: 35,
    rating: 4.4,
},
{
    id: 14,
    name: "Cordless Vacuum Cleaner",
    price: 64000,
    image: "vacuum.webp",
    description: "Lightweight vacuum with powerful suction and detachable battery.",
    category: "Home Appliances",
    stock: 10,
    rating: 4.5,
},
{
    id: 15,
    name: "Fitness Resistance Bands Set",
    price: 8500,
    image: "bands.webp",
    description: "5 resistance levels with handles, door anchor, and carrying bag.",
    category: "Fitness",
    stock: 60,
    rating: 4.6,
},
{
    id: 16,
    name: "Smartphone Gimbal Stabilizer",
    price: 38500,
    image: "gimbal.webp",
    description: "3-axis handheld stabilizer for smooth cinematic shots.",
    category: "Electronics",
    stock: 8,
    rating: 4.8,
},
{
    id: 17,
    name: "Electric Toothbrush - Rechargeable",
    price: 19500,
    image: "toothbrush.webp",
    description: "Sonic cleaning with 3 brushing modes and 2-minute timer.",
    category: "Personal Care",
    stock: 25,
    rating: 4.5,
},
{
    id: 18,
    name: "Smart Doorbell Camera",
    price: 44000,
    image: "doorbell.webp",
    description: "1080p video doorbell with motion detection and two-way audio.",
    category: "Home Automation",
    stock: 15,
    rating: 4.6,
},
{
    id: 19,
    name: "Electric Hair Dryer - Ionic",
    price: 22000,
    image: "hairdryer.webp",
    description: "Ionic technology reduces frizz for smooth, shiny hair.",
    category: "Personal Care",
    stock: 19,
    rating: 4.4,
},
{
    id: 20,
    name: "Laptop Backpack - Water Resistant",
    price: 18500,
    image: "backpack.webp",
    description: "Spacious 15.6” laptop backpack with USB charging port.",
    category: "Accessories",
    stock: 32,
    rating: 4.5,
},
{
    id: 21,
    name: "Wireless Charging Pad",
    price: 9500,
    image: "charger.webp",
    description: "Fast wireless charging compatible with Qi-enabled devices.",
    category: "Electronics",
    stock: 45,
    rating: 4.7,
},
{
    id: 22,
    name: "Mini Projector - 1080p Support",
    price: 62500,
    image: "projector.webp",
    description: "Portable projector for movies, gaming, and presentations.",
    category: "Electronics",
    stock: 7,
    rating: 4.6,
}
    
];

let cart = {};

function updateProductCount(){
    // Get the products array length
    // Find the span element
    // Update its text content

    const productCount = products.length;
    const productCountSpan = document.getElementById("product-count");
    productCountSpan.textContent = productCount;
};

function renderProducts(productsToRender = products){
    const productsContainer = document.getElementById("featured-products");

    const categories = {};
    productsToRender.forEach(product => {
        if (!categories[product.category]) {
            categories[product.category] = [];
        }
        categories[product.category].push(product);
    });

    let allCategoriesHTML = "";

    Object.keys(categories).forEach(category => {
        const categoryProducts = categories[category];
        let categoryProductsHTML = "";

        categoryProducts.forEach(product => {
            const productHTML = `
                <div class="product-card">
                    <div class="product-image">
                        <img src="images/${product.image}" alt="${product.name}" />
                    </div>
                    <div class="product-info">
                        <h4>${product.name}</h4>
                        <div class="product-price">₦${product.price.toLocaleString()}</div>
                        <div class="product-rating">${product.rating} ⭐</div>
                        <div class="stock-status ${product.stock > 0 ? 'in-stock' : 'out-of-stock'}">
                            ${product.stock > 0 ? 'In Stock' : 'Out of Stock'}
                        </div>
                    </div>
                    <div class="product-actions">
                        <form>
                            <input type="number" value="1" min="1" max="${product.stock}" />
                            <button type="submit" data-id="${product.id}">Add to Cart</button>
                        </form>
                    </div>
                </div>
            `;
            categoryProductsHTML += productHTML;
        });

        const categoryHTML = `
            <div class="category-section">
                <h3 class="category-title">${category}</h3>
                <div class="products-scroll">
                    ${categoryProductsHTML}
                </div>
            </div>
        `;
        allCategoriesHTML += categoryHTML;
    });

    if (productsToRender.length === 0) {
        allCategoriesHTML = `
            <div class="no-results">
                <h3>No products found</h3>
                <p>Try adjusting your search terms</p>
                <button onclick="clearSearch()">Clear Search</button>
            </div>
        `;
    }

    productsContainer.innerHTML = allCategoriesHTML;
};

function searchProducts(query) {
    if (!query.trim()) {
        return products; 
    }

    const searchTerm = query.toLowerCase().trim();
    return products.filter(product =>
        product.name.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm)
    );
}

function clearSearch() {
    const searchInput = document.getElementById('search');
    searchInput.value = '';
    renderProducts();
}

function setupSearch() {
    const searchInput = document.getElementById('search');

    searchInput.addEventListener('input', function(e) {
        const query = e.target.value;
        const filteredProducts = searchProducts(query);
        renderProducts(filteredProducts);
    });

    const searchForm = searchInput.closest('form');
    searchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const query = searchInput.value;
        const filteredProducts = searchProducts(query);
        renderProducts(filteredProducts);
    });
}

function setupCartButtons(){
    const productsContainer = document.getElementById("featured-products");

    productsContainer.addEventListener("click", function(event){

        if(event.target.tagName === "BUTTON"){
            event.preventDefault();

            const productId = parseInt(event.target.dataset.id);
            
            const form = event.target.closest("form");
            const quantityInput = form.querySelector("input[type='number']");
            const quantity = parseInt(quantityInput.value);

            addToCart(productId, quantity);   
            
            quantityInput.value = 1;
        }
    });
};

function addToCart(productId, quantity){
    const product = products.find(p => p.id === productId);

    if(!product){
        console.error("Product not found!");
        return;
    }

    if (quantity <= 0){
        alert("Please enter a valid quantity");
        return;
    }

    if (quantity > product.stock) {
        alert(`Only ${product.stock} items in stock`);
        return;
    }

    if (cart[productId]){
        cart[productId] += quantity;
    } else{
        cart[productId] = quantity;
    }

    console.log("Cart updated: ", cart);
    console.log(`Added ${quantity} of ${product.name} to cart.`);

    updateCartCounter();
    showSuccessMessage(product.name, quantity);
    renderCart();
};

function updateCartCounter(){
    let totalItems = 0;

    for (let productId in cart){
        totalItems += cart[productId];
    }

    const cartCountSpan = document.getElementById("cart-count");
    cartCountSpan.textContent = totalItems;

    console.log("Cart counter updated:", totalItems);
};

function showSuccessMessage(productName, quantity){
    const message = document.createElement('div');
    message.textContent = `Added ${quantity}x ${productName} to cart!`;
    message.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        background: aquamarine;
        color: black;
        padding: 15px 20px;
        border-radius: 5px;
        font-weight: bold;
        z-index: 1000;
        animation: slideIn 0.3s ease;
    `;
    document.body.appendChild(message);

    setTimeout(() => {
        message.remove();
    }, 1000);
};

function renderCart(){
    const cartSection = document.getElementById("cart");

    if (Object.keys(cart).length === 0){
        cartSection.innerHTML = `
            <h2>Shopping Cart</h2>
            <div id="empty-cart">
                <div class="cart-icon">🛒</div>
                <h3>Your cart is empty</h3>
                <p>Discover amazing products and start shopping!</p>
                <a href="#products-section" class="shop-btn">Start Shopping</a>
            </div>
        `;
        return;
    }

    let cartHTML = `<h2>Shopping Cart</h2><div class="cart-items">`;

    let totalPrice = 0;

    for (let productId in cart){
        const product = products.find(p => p.id === parseInt(productId));
        const quantity = cart[productId];
        const itemTotal = product.price * quantity;
        totalPrice += itemTotal;

        cartHTML += `
            <div class="cart-item" data-product-id="${product.id}">
                <img src="images/${product.image}" alt="${product.name}" style="width: 60px; height: 60px; object-fit: cover; border-radius: 4px"/>
                <div class="cart-item-details">
                    <h4>${product.name}</h4>
                    <div class="cart-item-meta">
                        <span class="item-price">₦${product.price.toLocaleString()}</span>
                        <div class="quantity-controls">
                            <button class="qty-btn" data-action="decrease" data-id="${product.id}">−</button>
                            <span class="quantity">${quantity}</span>
                            <button class="qty-btn" data-action="increase" data-id="${product.id}">+</button>
                        </div>
                    </div>
                    <div class="cart-item-footer">
                        <span class="item-subtotal">Subtotal: ₦${itemTotal.toLocaleString()}</span>
                        <button class="remove-btn" data-id="${productId}">Remove</button>
                    </div>
                </div>
            </div>
        `;
    }

    cartHTML += `
        </div>
        <div class="cart-summary">
            <h3>Total Items: ${Object.values(cart).reduce((sum, qty) => sum + qty, 0)}</h3>
            <h3>Total Price: ₦${totalPrice.toLocaleString()}</h3>
            <button id="clear-cart-btn">Clear Cart</button>
            <button id="checkout-btn">Checkout</button>
        </div>
    `;

    cartSection.innerHTML = cartHTML;
}

function setupCartInteractions(){
    const cartSection = document.getElementById("cart");

    cartSection.addEventListener("click", function(event){
        const target = event.target;

        if (target.classList.contains("qty-btn")){
            const productId = parseInt(target.dataset.id);
            const action = target.dataset.action;

        if (action === "increase"){
            const product = products.find(p => p.id === productId);

            if (cart[productId] < product.stock){
                cart[productId]++;
            }else {
                    alert(`Cannot add more. Only ${product.stock} in stock!`);
                    return;
                }
            } else if (action === "decrease") {
                cart[productId]--;
                
                if (cart[productId] <= 0) {
                    delete cart[productId];
                }
            }
            
            updateCartCounter();
            renderCart();
        }
        
        if (target.classList.contains("remove-btn")) {
            const productId = parseInt(target.dataset.id);
            const product = products.find(p => p.id === productId);
            
            if (confirm(`Remove ${product.name} from cart?`)) {
                delete cart[productId];
                updateCartCounter();
                renderCart();
            }
        }
        
        if (target.id === "clear-cart-btn") {
            if (confirm("Are you sure you want to clear your entire cart?")) {
                cart = {};
                updateCartCounter();
                renderCart();
            }
        }
        
        if (target.id === "checkout-btn") {
            const totalItems = Object.values(cart).reduce((sum, qty) => sum + qty, 0);
            const totalPrice = Object.keys(cart).reduce((sum, productId) => {
                const product = products.find(p => p.id === parseInt(productId));
                return sum + (product.price * cart[productId]);
            }, 0);
            
            alert(`Checkout Summary:\nTotal Items: ${totalItems}\nTotal Price: ₦${totalPrice.toLocaleString()}\n\nThank you for shopping with Covenant Stores!`);
            
            cart = {};
            updateCartCounter();
            renderCart();
        }
    });
}

renderProducts();
setupCartButtons();
setupCartInteractions();
setupSearch();