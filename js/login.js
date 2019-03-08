function login() {
  var usernamein = document.getElementById("username-input").value;
  var passwordin = document.getElementById("password-input").value;
  try {
    localStorage.setItem("youth-immi-user", usernamein);
    localStorage.setItem("youth-immi-pw", passwordin);
    document.getElementById("login-confirmation").innerHTML = "Login Successful!"
    setTimeout(window.location.replace("index.html"), 1500);
  } catch (e) {

  }
}

function getUsername() {
  try {
    var usr = localStorage.getItem("youth-immi-user");
    if ((usr == null) || (usr == "")) {
      usr = "User";
    }
    return usr;
  } catch (e) {

  }
  return "User"
}

function setUsernameLabel() {
  try {
    var user = getUsername();
    document.getElementById("username-label").innerHTML = "Hi " + user + "!";
  } catch (e) {

  }
}

function main() {
  setUsernameLabel();
}