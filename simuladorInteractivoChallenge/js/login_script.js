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
      Toastify({
        text: "Invalid username or password. Try again.",
        duration: 3000,
        style: {
          background: "red",
        },
        }).showToast();
    }
  } else {
    Toastify({
      text: "Username or Password fields cannot be empty.",
      duration: 3000,
      style: {
        background: "red",
      },
      }).showToast();
  }
}

function login(user, password, inputUser, inputPassword) {
  return user == inputUser && password == inputPassword;
}


