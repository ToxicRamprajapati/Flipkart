// Sample product data
const products = [
    { id: 1, name: 'Vivo V30 Pro 5G', category: 'Electronics', price: 800, img: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/8/t/d/v30-pro-5g-v2319-vivo-original-imagyzhhdeezbbfb.jpeg?q=70', description: '12GB RAM, 512GB Storage.', specifications: 'Andaman Blue' },
    { id: 2, name: 'REDMI 13 5G', category: 'Electronics', price: 20, img: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/a/s/o/-original-imah4smtz8yqfbd9.jpeg?q=70', description: '8GB RAM 128GB Storage.', specifications: 'Hawaiian Blue' },
    { id: 3, name: 'REDMI 12', category: 'Electronics', price: 15, img: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/k/j/n/-original-imags37gyajqxkgp.jpeg?q=70', description: '4GB RAM 128GB Storage.', specifications: 'Moonstone Silver' },
    { "id": 4, "name": "REDMI 12", "category": "Electronics", "price": 600, "img": "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/h/f/w/-original-imags37hy7uz2usv.jpeg?q=70", "description": "Latest model smartphone with powerful features.", "specifications": "128GB Storage, 8GB RAM" },
    { "id": 5, "name": "Google Pixel 9", "category": "Electronics", "price": 400, "img": "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/d/y/m/pixel-9-ga05843-in-google-original-imah3pfgd9zadkyx.jpeg?q=70", description: "12GB RAM 256GB storage.", "specifications": "Porcelain" },
    { "id": 6, "name": "Vivo V40 5G ", "category": "Electronics", "price": 100, "img": "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/b/c/y/-original-imah3hvkuw8k7hcw.jpeg?q=70", description: "8GB RAM 256GB Storage .", "specifications": "Ganges Blue" },
    { "id": 7, "name": "Hetpro book Plus Laptop", "category": "Electronics", "price": 200, "img": "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/n/r/q/-original-imah3gaqg3zjgjny.jpeg?q=70", description: " 8 GB/256 GB SSD/Windows 11 Home.", "specifications": "CHUWI Intel Celeron Dual Core 11th Gen N4020," },
    { "id": 8, "name": " Dell ", "category": "Electronics", "price": 500, "img": "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/l/h/1/inspiron-3520-thin-and-light-laptop-dell-original-imahyggypmfkkpnf.jpeg?q=70", description: "ORRD Screen Guard for DELL Inspiron Core i3 11th Gen 14.96 inch.", "specifications": "11D Tempered Glass, Anti Glare, Scratch Resistant, Anti Fingerprint" },
    { "id": 9, "name": "Lenovo IPad", "category": "Electronics", "price": 75, "img": "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/h/a/j/-original-imah4dcjqzqhszug.jpeg?q=70", description: "16 GB/512 GB SSD/Windows 11 Home.", "specifications": "Lenovo IdeaPad 3 Intel Core i3 12th Gen 1215U" },
    { "id": 10, "name": "HP", "category": "Electronics", "price": 300, "img": "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/k/i/f/-original-imah4qscfq3ddvc7.jpeg?q=70", description: "8 GB/512 GB SSD/Windows 11 Home.", "specifications": "HP Intel Intel Core i5 11th Gen 1155G7" },
    { "id": 11, "name": "SAMSUNG Galaxy S23 FE", "category": "Electronics", "price": 25, "img": "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/x/k/h/-original-imah5ywff9rr76zh.jpeg?q=70", description: "8GB RAM 128GB Storage.", "specifications": "16.26 cm (6.4 inch) Full HD+ Display" },
    { "id": 12, "name": "SAMSUNG Galaxy S23 FE", "category": "Electronics", "price": 1000, "img": "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/4/f/r/-original-imah5ywfzzjzfkcn.jpeg?q=70", description: "8GB RAM 128GB Storage.", "specifications": "16.26 cm (6.4 inch) Full HD+ Display" },
    { "id": 13, "name": "Acer Chromebook", "category": "Electronics", "price": 250, "img": "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/4/3/o/-original-imah27qsamfccyxz.jpeg?q=70", description: "Chrome OS/8 GB RAM/256 GB SSD/Intel Integrated Graphics/WiFi 6/53 Wh Battery.", "specifications": " Display, Silver, 1.68 KG" },
    { "id": 14, "name": "SAMSUNG Galaxy Book4", "category": "Electronics", "price": 250, "img": "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/w/u/e/-original-imah46f8th3pnphq.jpeg?q=70", description: "8 GB/512 GB SSD/Windows 11 Home.", "specifications": "15.6 Inch, Gray, 1.55 Kg, With MS Office" },


    // Add more products as needed
];

// Function to display products
function displayProducts(productList) {
    const productGrid = document.getElementById('productGrid');
    productGrid.innerHTML = '';
    productList.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <a href="product-details.html?id=${product.id}">
                <img src="${product.img}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>₹${product.price}</p>
            </a>
            <button onclick="addToCart(${product.id})">Bye Now</button>
        `;
        productGrid.appendChild(productCard);
    });
}

// Function to add product to cart (temporary alert for now)
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    alert(`Added ${product.name} to the cart.`);
}

// Display products on page load
document.addEventListener('DOMContentLoaded', () => {
    displayProducts(products);
});
