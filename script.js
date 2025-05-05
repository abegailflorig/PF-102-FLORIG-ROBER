
const menu = [
  { 
    name: "Combo Meal", 
    img: "Combo meal.png",
    items: [
      { 
      name: "Big Mac Meal", 
      description: "Big Mac Burger + Fries + Soda", 
      price: 250, 
      img: "bigmac meal.png" 
    },
      { name: "Chicken Joy Combo",
      description: "2pc Chicken Joy + Rice + Coke",
      price: 199, 
      img: "chicken joy combo.png"
    },
      { name: "Cheeseburger Deluxe Combo",
      description: "Cheeseburger + Fries + Sprite", 
      price: 190, 
      img: "bigmac meal.png" 
    },
      { name: "Fish Fillet Meal", 
      description: "Fillet-o-Fish + Fries + Water",
      price: 210, 
      img: "fish fillet meal.png" },
      { name: "Spaghetti Combo", 
      description: "Spaghetti + Fries + Iced Tea",
      price: 170, 
      img: "spaghetti combo.png" },
      { name: "Breakfast Sausage Meal", 
      description: "Sausage Burrito + Hashbrown + Coffee",
      price: 180, 
      img: "Breakfast Sausage Meal.png" },
    ]
  },
  { 
  name: "Happy Meal", 
  img: "happymeal.png",
  items: [
    { 
      name: "Chicken Nuggets Happy Meal", 
      description: "4pc Chicken Nuggets + Fries + Apple Juice +	Toy", 
      price: 180, 
      img: "Chicken Nuggets Happy Meal.png" 
    },
    { 
      name: "Cheeseburger Happy Meal", 
      description: "Cheeseburger + Apple Slices + Milk + Toy", 
      price: 170, 
      img: "Cheeseburger Happy Meal.png" 
    },
    { 
      name: "Hamburger Happy Meal", 
      description: "Hamburger + Fries + Drink", 
      price: 5.49, 
      img: "Hamburger Happy Meal.png" 
    },
    { 
      name: "Fish Bites Happy Meal", 
      description: "Hamburger	+ Fries	+ Sprite	+ Toy", 
      price: 5.49, 
      img: "Fish Bites Happy Meal.png" 
    }
  ]
},

  { 
    name: "Burger & Sandwiches", 
    img: "burger.png",
    items: [
      { name: "Classic Cheeseburger", 
      description: "Grilled chicken breast, lettuce, tomato, pickles, and mayo or mustard on a toasted bun.",
      price: 223, 
      img: "Classic Cheeseburger.png" },

      { name: "Crispy Chicken Sandwich", 
      description: "Fried chicken fillet, lettuce, pickles, and mayo on a soft bun.",
      price: 268, 
      img: "Crispy Chicken Sandwich.png" },

      { name: "Fish Sandwich", 
      description: "Crispy fish fillet, lettuce, tartar sauce, and pickles on a sandwich bun.",
      price: 240, 
      img: "Fish Sandwich.png" },

      { name: "Club Sandwich", 
      description: "Toasted bread, turkey, bacon, lettuce, tomato, and mayo",
      price: 307, 
      img: "Club Sandwich.png" },

      { name: "BLT Sandwich ", 
      description: "Bacon, lettuce, tomato, and mayo on toasted bread.",
      price: 223,
      img: "BLT Sandwich.png" },

      { name: "Tuna Salad Sandwich", 
      description: "Tuna salad, lettuce, tomato, and pickles on soft bread.",
      price: 223, 
      img: "Tuna Salad Sandwich.png" },

      { name: "Caesar Chicken Sandwich", 
      description: "Grilled chicken breast, romaine lettuce, Caesar dressing, and Parmesan cheese on a toasted bun.",
      price:296, 
      img: "Caesar Chicken Sandwich.png" },

      { name: "Philly Cheese Steak Sandwich ", 
      description: "Sliced beef, sautéed onions, peppers, and melted cheese on a hoagie roll.",
      price: 363, 
      img: "Philly Cheese Steak Sandwich.png" 
    }
    ]
  },

  { 
    name: "Beverages", 
    img: "beverages.png",
    items: [
      { name: "Beverages", price: 299, img: "beverages.png" }
    ]
  },
  { 
    name: "Chicken", 
    img: "chicken.png",
    items: [
      { name: "Chicken", price: 199, img: "chicken.png" }
    ]
  },
  { 
    name: "Snacks & Sides", 
    img: "Largefries.png",
    items: [
      { name: "Large Fries", price: 149, img: "Largefries.png" }
    ]
  }
];

const popular = [
  { name: "Big Mac", description: "Hamburger	+ Fries	+ Sprite	+ Toy", price: 250, img: "bigmac.jpg" },
  { name: "Quarter Pounder", price: 250, img: "Quarter Pounder.avif" },
  { name: "Cheese Burger", price: 190, img: "Cheeseburger.avif" },
  { name: "Crispy Chicken", price: 160, img: "Cheeseburger.avif" },
  { name: "Sausage Burrito", price: 180, img: "Cheeseburger.avif" },
  { name: "Fillet-o-Fish", price: 210, img: "Cheeseburger.avif" }
];


let cart = [];
let selectedItem = null;
let quantity = 1;

function loadMenu() {
  const categoriesContainer = document.getElementById('categories');
  const popularItemsContainer = document.getElementById('popular-items');

  menu.forEach((category, index) => {
    const div = document.createElement('div');
    div.className = 'category-card';
    div.innerHTML = `<img src="${category.img}" alt="${category.name}" style="height:60px;"><p>${category.name}</p>`;
    div.onclick = () => showComboMealMenu(category.items);
    categoriesContainer.appendChild(div);
  });

  popular.forEach((item, index) => {
    const div = document.createElement('div');
    div.className = 'popular-card';
    div.innerHTML = `<img src="${item.img}" alt="${item.name}" style="height:60px;"><p>${item.name}<br>₱${item.price}</p>`;
    div.onclick = () => openModal(item);
    popularItemsContainer.appendChild(div);
  });
}

function openModal(item) {
  selectedItem = item;
  quantity = 1;
  document.getElementById('modal-img').src = item.img;
  document.getElementById('modal-name').textContent = item.name;
  document.getElementById('modal-description').textContent = item.description; 
  document.getElementById('modal-price').textContent = `₱${item.price}`;
  document.getElementById('quantity').textContent = quantity;
  document.getElementById('item-modal').style.display = 'flex';
}


function closeModal() {
  document.getElementById('item-modal').style.display = 'none';
}

function increaseQty() {
  quantity++;
  document.getElementById('quantity').textContent = quantity;
}

function decreaseQty() {
  if (quantity > 1) {
    quantity--;
    document.getElementById('quantity').textContent = quantity;
  }
}

function addToCart() {
  const item = {
    name: selectedItem.name,
    price: selectedItem.price,
    img: selectedItem.img,
    quantity: quantity
  };
  cart.push(item);
  updateCart();
  closeModal();
}

function updateCart() {
  const cartItemsContainer = document.getElementById('cart-items');
  const cartTotalContainer = document.getElementById('cart-total');
  cartItemsContainer.innerHTML = '';

  let total = 0;
  cart.forEach((item, index) => {
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
      <span>${item.quantity}x ${item.name}</span>
      <span>₱${(item.price * item.quantity).toFixed(2)}</span>
      <button onclick="removeFromCart(${index})" style="background: red; color: white; padding: 5px; border: none; border-radius: 5px; cursor: pointer;">Remove</button>
    `;
    cartItemsContainer.appendChild(div);
    total += item.price * item.quantity;
  });

  cartTotalContainer.textContent = `Total: ₱${total.toFixed(2)}`;
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}

function showComboMealMenu(items) {
  const comboModal = document.getElementById('combo-modal');
  const comboMenuItemsContainer = document.getElementById('combo-menu-items');
  comboMenuItemsContainer.innerHTML = ''; 

  items.forEach(item => {
    const div = document.createElement('div');
    div.className = 'combo-item-card';
    div.innerHTML = `
      <img src="${item.img}" alt="${item.name}">
      <p><strong>${item.name}</strong></p>
      <p>${item.description}</p>
      <p>₱${item.price}</p>
      <button onclick='addToCartFromCombo(${JSON.stringify(item).replace(/"/g, "&quot;")})'>Add to Cart</button>
    `;
    comboMenuItemsContainer.appendChild(div);
  });

  comboModal.style.display = 'flex';
}


function closeComboModal() {
  document.getElementById('combo-modal').style.display = 'none';
}

// Add Combo Meal to Cart
function addToCartFromCombo(item) {
  cart.push({
    name: item.name,
    price: item.price,
    img: item.img,
    quantity: 1
  });
  updateCart();
  closeComboModal();
}

function checkout() {
      if (cart.length === 0) {
        alert("You can't check out with an empty order. Please add something to your cart!");
        return;
      }

      // Proceed to show payment options
      document.getElementById('payment-modal').style.display = 'flex';
    }

function closePaymentModal() {
  document.getElementById('payment-modal').style.display = 'none';
}

function selectPaymentMethod(method) {
  processPayment(method);
}

function processPayment(paymentMethod) {
  let total = 0;
  cart.forEach(item => {
    total += item.price * item.quantity;
  });

  const receiptContent = `
    <div class="receipt">
      <img src="logo.png" alt="Bite ME!" class="logo">
      <ul>
        ${cart.map(item => `<li>${item.quantity}x ${item.name} - ₱${(item.price * item.quantity).toFixed(2)}</li>`).join('')}
      </ul>
      <p>Payment Method: ${paymentMethod}</p>
      <p><strong>Total: ₱${total.toFixed(2)}</strong></p>
      <p>Thank you for your order!</p>
    </div>
  `;
  document.getElementById('receipt-content').innerHTML = receiptContent;
  document.getElementById('payment-modal').style.display = 'none';
  document.getElementById('receipt-modal').style.display = 'flex';

  cart = [];
  updateCart();
}

function closeReceiptModal() {
  document.getElementById('receipt-modal').style.display = 'none';
}

loadMenu();
