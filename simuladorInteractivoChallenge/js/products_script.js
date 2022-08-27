class Product {
  constructor(name, qty) {
    this.name = name;
    this.qty = qty;
  }
}

const shoppingCart = JSON.parse(localStorage.getItem("car"))||[];

if (shoppingCart.length > 0) {
  const products_list = document.getElementById("products_list");
  products_list.innerHTML = "";
  showProducts(shoppingCart, products_list);
}

const addItemButton = document.getElementById("add_item");
addItemButton.addEventListener("click", addToCart);

const clearButton = document.getElementById("clear_cart");
clearButton.addEventListener("click", clearCart);

function addToCart() {
  const inputProductName = document.getElementById("product_name").value;
  const inputQty = parseInt(document.getElementById("product_qty").value);
  const newItem = new Product(inputProductName, inputQty);
  const carError = document.getElementById("car_error");
  if (inputProductName.trim().length == 0) {
    carError.innerText = "Product name cannot be empty";
    carError.style.color = "red";
  } else if (inputQty < 1 || isNaN(inputQty)) {
    carError.innerText = "Quantity is less than 1 or not a number";
    carError.style.color = "red";
  } else {
    carError.innerText = "";
    let flag = false;
    if (shoppingCart.length > 0) {
      const found = shoppingCart.findIndex(
        (item) => item.name == inputProductName
      );
      if (found != -1) {
        flag = true;
        shoppingCart[found].qty += inputQty;
      }
    }

    !flag && shoppingCart.push(newItem);

    const products_list = document.getElementById("products_list");
    products_list.innerHTML = "";
    showProducts(shoppingCart, products_list);
    localStorage.setItem('car', JSON.stringify(shoppingCart));
  }
}

function showProducts(cart, products_list) {
  for (const p of cart) {
    const newLine = document.createElement("p");
    newLine.innerText = `Product name: ${p.name}, Quantity: ${p.qty}`;
    products_list.append(newLine);
  }
}

function clearCart() {
  shoppingCart.length = 0;
  const products_list = document.getElementById("products_list");
  localStorage.removeItem('car');
  products_list.innerHTML =
    "<p>The car is empty. Please add products to show them here.</p>";
}
