var shoppingCart = [];

function loginFunction() {
    //User info for login purposes
    const username = 'adrian.cervantes';
    const pw = 'password';
    let authenticated = false;
    
    while(!authenticated) {
        //Ask for user and pw until both match with the username and pw vars, and then authenticate user
        let inputUser = prompt('Please enter your username');
        let inputPw = prompt('Please enter your password');
    
        let loginResult = login(username, pw, inputUser, inputPw);
        if(loginResult) {
            authenticated = true;
        } else {
            alert('Invalid username or password. Try again.')
        }
    }
    
    alert(`Welcome ${username}!`);
    
    window.location.href= 'productsPage.html';
}


function login(user, password, inputUser, inputPassword) {
    if(user == inputUser && password == inputPassword) {
        return true;
    } else {
        return false;
    }
}

function addToCart() {
    let inputProductName = prompt('Please enter the product name');
    let inputQty = parseInt(prompt('Please input the product quantity'));
    let newItem = {
        name: inputProductName,
        qty: inputQty
    };
    if(inputQty < 1 || isNaN(inputQty)) {
        alert('Quantity is less than 1 or not a number');
    } else {
        let flag = false;
        if(shoppingCart.length > 0) {
            for(let i = 0; i < shoppingCart.length; i++) {
                if(shoppingCart[i].name == inputProductName) {
                    flag = true;
                    shoppingCart[i].qty += inputQty;
                }
            }
        }
        
        if(!flag) {
            shoppingCart.push(newItem);
        }
    }
}

function clearCart() {
    shoppingCart.length = 0;
}

function showCart() {
    if(shoppingCart.length > 0) {
        alert(JSON.stringify(shoppingCart));
    } else {
        alert('Empty cart.')
    }
    
}


