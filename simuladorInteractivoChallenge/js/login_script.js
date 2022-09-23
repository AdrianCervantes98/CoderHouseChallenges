const loginButton = document.getElementById("login_button");
loginButton.addEventListener('click', loginFunction);

const users = JSON.parse(localStorage.getItem("users")) || [];

function loginFunction() {
  //Ask for user and pw until both match with the username and pw vars, and then authenticate user
  const inputUser = document.getElementById("user_email").value;
  const inputPw = document.getElementById("user_password").value;

  if (inputUser != '' && inputPw != '') {
    const found = users.findIndex((user) => user.name == inputUser && user.pw == inputPw);
    if (found != -1) {
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



