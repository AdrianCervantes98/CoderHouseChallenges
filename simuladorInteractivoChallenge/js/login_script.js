const loginButton = document.getElementById("login_button");
loginButton.addEventListener('click', loginFunction);

function loginFunction() {
  //User info for login purposes
  const username = "adrian.cervantes";
  const pw = "password";

  //Ask for user and pw until both match with the username and pw vars, and then authenticate user
  const inputUser = document.getElementById("user_email").value;
  const inputPw = document.getElementById("user_password").value;

  if (inputUser != '' && inputPw != '') {
    const loginResult = login(username, pw, inputUser, inputPw);
    if (loginResult) {
      window.location.href = "productsPage.html";
    } else {
      const loginError = document.getElementById("login_error");
      loginError.innerText = "Invalid username or password. Try again.";
      loginError.style.color = "red";
    }
  }
}

function login(user, password, inputUser, inputPassword) {
  return user == inputUser && password == inputPassword;
}


