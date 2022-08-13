const shoppingCart = [];

class Product {
    constructor(name, qty) {
      this.name = name;
      this.qty = qty;
    }
}

function loginFunction() {
    //User info for login purposes
    const username = 'adrian.cervantes';
    const pw = 'password';
    
    //Ask for user and pw until both match with the username and pw vars, and then authenticate user
    const inputUser = document.getElementById('user_email').value;
    const inputPw = document.getElementById('user_password').value;
    
    const loginResult = login(username, pw, inputUser, inputPw);
    if(loginResult) {
        window.location.href= 'productsPage.html';
    } else {
        const loginError = document.getElementById('login_error');  
        loginError.innerText = 'Invalid username or password. Try again.';
        loginError.style.color = 'red';
    }
}


function login(user, password, inputUser, inputPassword) {
    return user == inputUser && password == inputPassword;
}

function addToCart() {
    const inputProductName = document.getElementById('product_name').value;
    const inputQty = parseInt(document.getElementById('product_qty').value);
    const newItem = new Product(inputProductName, inputQty);
    const carError = document.getElementById('car_error');
    if(inputProductName.trim().length == 0) {
        carError.innerText = 'Product name cannot be empty';
        carError.style.color = 'red';
    } else if(inputQty < 1 || isNaN(inputQty)) {
        carError.innerText = 'Quantity is less than 1 or not a number';
        carError.style.color = 'red';
    } else {
        carError.innerText = '';
        let flag = false;
        if(shoppingCart.length > 0) {
            const found = shoppingCart.findIndex(item => item.name == inputProductName);
            if(found != -1) {
                flag = true;
                shoppingCart[found].qty += inputQty;
            }
        }
        
        if(!flag) {
            shoppingCart.push(newItem);
        }

        const products_list = document.getElementById('products_list');
        products_list.innerHTML = '';
        for (const p of shoppingCart) {
            const newLine = document.createElement('p');
            newLine.innerText = `Product name: ${p.name}, Quantity: ${p.qty}`;
            products_list.append(newLine);
        }
    }
}

function clearCart() {
    shoppingCart.length = 0;
    const products_list = document.getElementById('products_list');
    products_list.innerHTML = '<p>The car is empty. Please add products to show them here.</p>';
}


