const shoppingCart = JSON.parse(localStorage.getItem("car")) || [];
const cartTable = document.getElementById("cart_table");
const emptyCart = document.getElementById("empty_cart");
const totalField = document.getElementById("total");
let total = 0;

for (let i = 0; i < shoppingCart.length; i++) {
  const trow = document.createElement("tr");
  trow.setAttribute("id", `trow${shoppingCart[i].id}`);
  trow.innerHTML = `
        <td>
            <p><b>${shoppingCart[i].name}</b></p>
        </td>
        <td>
            <img src=${shoppingCart[i].image} width="30%" height="30%">
        </td>
        <td>
            <p><b>Cost</b></p>
            <p><b>\$${shoppingCart[i].cost}</b></p>
        </td>
        <td>
            <p><b>Quantity</b></p>
            <input type="number" id="qty_${shoppingCart[i].id}" value=${shoppingCart[i].qty} min="1" max="9">
        </td>
        <td>
            <input id = "remove_product_${shoppingCart[i].id}" type = "button" value = "Remove">
        </td>
    `;
  cartTable.append(trow);
}

for (let i = 0; i < shoppingCart.length; i++) {
  total = total + shoppingCart[i].cost * shoppingCart[i].qty;
  const removeItem = document.getElementById(
    `remove_product_${shoppingCart[i].id}`
  );
  removeItem.addEventListener("click", removeItemFromCart);
  const changeQty = document.getElementById(`qty_${shoppingCart[i].id}`);
  changeQty.addEventListener("blur", modifyQuantity);
}

if (shoppingCart.length < 1) {
  emptyCart.innerText =
    "Your cart is empty. Please add items on the products page.";
  totalField.innerText = "";
} else {
  emptyCart.innerText = "";
  totalField.innerText = `Total: \$${total}`;
}

function removeItemFromCart(item) {
  const id = item.target.id;
  const auxArray = id.split("_");
  const productId = auxArray[auxArray.length - 1];

  const found = shoppingCart.findIndex((element) => element.id == productId);
  if (found != -1) {
    shoppingCart.splice(found, 1);
    localStorage.setItem("car", JSON.stringify(shoppingCart));
    const rowToHide = document.getElementById(`trow${productId}`);
    rowToHide.style.display = "none";
    let newTotal = 0;
    for (let i = 0; i < shoppingCart.length; i++) {
      newTotal = newTotal + shoppingCart[i].cost * shoppingCart[i].qty;
    }
    totalField.innerText = `Total: \$${newTotal}`;
  }
  if (shoppingCart.length < 1) {
    emptyCart.innerText =
      "Your cart is empty. Please add items on the products page.";
    totalField.innerText = "";
  }
}

function modifyQuantity(item) {
  const id = item.target.id;
  const auxArray = id.split("_");
  const productId = auxArray[auxArray.length - 1];
  const newValue = item.target.value;
  const found = shoppingCart.findIndex((element) => element.id == productId);
  shoppingCart[found].qty = newValue;
  localStorage.setItem("car", JSON.stringify(shoppingCart));
  let newTotal = 0;
  for (let i = 0; i < shoppingCart.length; i++) {
    newTotal = newTotal + shoppingCart[i].cost * shoppingCart[i].qty;
  }
  totalField.innerText = `Total: \$${newTotal}`;
}
