class Product {
  constructor(id, name, qty, cost, image) {
    this.id = id;
    this.name = name;
    this.qty = qty;
    this.cost = cost;
    this.image = image;
  }
}

const shoppingCart = JSON.parse(localStorage.getItem("car")) || [];
const productsTable = document.getElementById("products_table");

const response = await fetch("../data/data.json");
const gamesJson = await response.json();
if (gamesJson.length > 0) {
  for (let i = 0; i < gamesJson.length; i += 3) {
    const chunk = gamesJson.slice(i, i + 3);
    const trow = document.createElement("tr");
    trow.setAttribute("id", `trow${i}`);
    chunk.forEach((element) => {
      const tcell = document.createElement("td");
      tcell.innerHTML = `
        <p><b>${element.name}</b></p>
        <img src=${element.image} width="200px" height="300px">
        <p>\$${element.cost}</p>
        <input id = "add_product_${element.id}" type = "button" value = "Add To Cart">
        <br><br>
      `;
      trow.append(tcell);
    });
    productsTable.append(trow);
  }
}

for (let i = 0; i < gamesJson.length; i++) {
  const addItem = document.getElementById(`add_product_${i}`);
  addItem.addEventListener("click", addItemToCart);
}

function addItemToCart(item) {
  const id = item.target.id;
  const auxArray = id.split('_');
  const productId = auxArray[auxArray.length-1];
  const product = gamesJson[productId];

  const found = shoppingCart.findIndex((item) => item.id == product.id);
  if (found != -1) {
    Toastify({
      text: "Product already added to cart.",
      duration: 3000,
      style: {
        background: "red",
      },
    }).showToast();
  } else {
    shoppingCart.push(product);
    localStorage.setItem("car", JSON.stringify(shoppingCart));
  }
}
/*
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
  if (inputProductName.trim().length == 0) {
    Toastify({
      text: "Product name cannot be empty.",
      duration: 3000,
      style: {
        background: "red",
      },
    }).showToast();
  } else if (inputQty < 1 || isNaN(inputQty)) {
    Toastify({
      text: "Quantity is less than 1 or not a number.",
      duration: 3000,
      style: {
        background: "red",
      },
    }).showToast();
  } else {
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
    localStorage.setItem("car", JSON.stringify(shoppingCart));
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
  localStorage.removeItem("car");
  products_list.innerHTML =
    "<p>The car is empty. Please add products to show them here.</p>";
}*/
