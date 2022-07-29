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


