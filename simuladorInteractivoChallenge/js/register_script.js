class User {
  constructor(name, pw) {
    this.name = name;
    this.pw = pw;
  }
}

const users = JSON.parse(localStorage.getItem("users")) || [];

const registerButton = document.getElementById("register_button");
registerButton.addEventListener("click", registerFunction);

function registerFunction() {
  const inputUser = document.getElementById("user_email").value;
  const inputPw = document.getElementById("user_password").value;
  const newUser = new User(inputUser, inputPw);

  if (inputUser != "" && inputPw != "") {
    const found = users.findIndex((user) => user.name == inputUser);
    if (found != -1) {
      Toastify({
        text: "Username already exists.",
        duration: 3000,
        style: {
          background: "red",
        },
      }).showToast();
    } else {
      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));
      Toastify({
        text: "User added successfully!",
        duration: 3000,
        style: {
          background: "green",
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
