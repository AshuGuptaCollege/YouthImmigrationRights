//login.js
//youth immigration project
//eecs 397
//version 2

//global variable for logging in
var timeout = 1250; //default timeout in seconds * 1000 units
var url = "http://ashuguptacollege.github.io/YouthImmigrationRights/"; //url global variable for absolute links
var lang = "en"; //language global variable
var playingAudio = false;
var a; //global audio object

//login nav bar injection
function navBarInjection() {
  var nav_code = `<nav style="background-color: #E4F2FC; margin-bottom: 50px;" class="navbar navbar-dark bg-dark">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span style="font-size: 125%; color: #4376a0;" class="glyphicon glyphicon-menu-hamburger"></span>
      </button>
      <a class="navbar-brand" href="` + url + `index.html" style="font-family: 'Gloria Hallelujah' , cursive;">Youth Immigration</a>
    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="nav navbar-nav">
        <li class="active"><a href="` + url + `index.html">Home</a></li>
        <li><a href="#">Lawyers</a></li>
        <li><a href="` + url + `resources.html">Resources</a></li>
        <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  ` + getLanguageLabel(lang, lang) + `&nbsp;<img src="` + url + `images/assets/lang-flags/` + lang + `.png" width="20px"></img>
                </a>
                <div style="min-width: 120px !important; text-align: center;" class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a style="cursor: pointer; text-decoration: none;" class="dropdown-item" onclick="changeLanguage('en')">` + getLanguageLabel(lang, "en") + `&nbsp;&nbsp;<img src="` + url + `images/assets/lang-flags/en.png" width="20px"></img></a><br />
                  <a style="cursor: pointer; text-decoration: none;" class="dropdown-item" onclick="changeLanguage('sp')">` + getLanguageLabel(lang, "sp") + `&nbsp;<img src="` + url + `images/assets/lang-flags/sp.png" width="20px"></img></a><br />
                  <a style="cursor: pointer; text-decoration: none;" class="dropdown-item" onclick="changeLanguage('ch')">` + getLanguageLabel(lang, "ch") + `&nbsp;<img src="` + url + `images/assets/lang-flags/ch.png" width="20px"></img></a><br />
                  <a style="cursor: pointer; text-decoration: none;" class="dropdown-item" onclick="changeLanguage('fr')">` + getLanguageLabel(lang, "fr") + `&nbsp;&nbsp;&nbsp;<img src="` + url + `images/assets/lang-flags/fr.png" width="20px"></img></a><br />
                </div>
        </li>
        <li><a onclick="playAudio()"><span id="volume-span" class="glyphicon glyphicon-volume-up"></span></a></li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li><a id="story-creator-link" href="` + url + `creator/index.html">Creator <span class="glyphicon glyphicon-pencil"></span></a></li>
        <li><a href="` + url + `scoreReport.html">Score Report <span class="glyphicon glyphicon-ok-circle"></span></a></li>
        <li><a href="#" id="username-label">Hi User!</a></li>
        <li><a onclick="" id="login-btn" href="` + url + `login.html"></a></li>
      </ul>
    </div>
  </div>
  </nav>`;
  var footer = `<center><small>Copyright &copy Youth Immigration Innovation Lab Group 2019 | <a href="#">Legal</a> | <a href="http://bit.ly/yir-feedback">Feedback</a></small></center>`;
  try {
    document.getElementById("nav-div").innerHTML = nav_code;
    document.getElementById("nav-footer").innerHTML = footer;
  } catch (e) {

  }
}

function getMP3Name(n) {
  var result = url + "sound/page-audio/";
  if (n == "Youth Immigration Rights - Home") {
    result += "test.mp3";
  } else {
    result += "test.mp3";
  }
  return result;
}

function toggleAudio() {
  if (playingAudio == true) {
    playingAudio = false;
  } else {
    playingAudio = true;
  }
}

function playAudio(l) {
  toggleAudio();
  if (playingAudio == true) {
    document.getElementById("volume-span").className = "glyphicon glyphicon-volume-off";
    a.play();
  } else {
    document.getElementById("volume-span").className = "glyphicon glyphicon-volume-up";
    a.pause();
  }
}

function getLanguageLabel(lg, lb) {
  var translations = [
    ["English", "Spanish", "Chinese", "French"], //english
    ["Inglés (EN)", "Español (SP)", "Chino (CH)", "Francés (FR)"], //spanish
    ["英语（EN)", "西班牙语（SP)", "中文 (CH)", "法语（FR)"], //chinese
    ["Anglais (EN)", "Espagnol (SP)", "Chinois (CH)", "Français (FR)"] //french
  ];
  var x = 0;
  var y = 0;
  if (lg == "en") {
    x = 0;
  } else if (lg == "sp") {
    x = 1;

  } else if (lg == "ch") {
    x = 2;

  } else if (lg == "fr") {
    x = 3;

  } else {
    console.log("error: incorrect language encoding!");
  }
  if (lb == "en") {
    y = 0;

  } else if (lb == "sp") {
    y = 1;

  } else if (lb == "ch") {
    y = 2;

  } else if (lb == "fr") {
    y = 3;

  } else {
    console.log("error: incorrect language encoding!");
  }
  return translations[x][y];
}

//function to change language and update navbar
function changeLanguage(lg) {
  lang = lg;
  localStorage.setItem("yi-lang", lang);
  setTimeout('window.location.reload()', 10);
}

//function to retrieve current language setting or set to english default
function getLanguage() {
  try {
    var getLang = localStorage.getItem("yi-lang");
    if ((getLang == "") || (getLang == null)) {
      getLang = "en";
    }
    lang = getLang;
  } catch (e) {
    lang = "en";
  }
}

//create an account on the computer
function signUp() {
  var secondpasswordin = document.getElementById("password-input-two").value;
  var usernamein = document.getElementById("username-input").value;
  var passwordin = document.getElementById("password-input").value;

  if (secondpasswordin != passwordin) {
    document.getElementById("login-confirmation").innerHTML = "Account Sign-Up Failed! Passwords must match.";
    restart(timeout);
    return false;
  }

  if (usernamein == "Guest") {
    document.getElementById("login-confirmation").innerHTML = "Account Sign-Up Failed! 'Guest' is an illegal username.";
    restart(timeout);
    return false;
  }

  if ((passwordin == "") || (usernamein == "") || (passwordin.length < 5) || (usernamein.length < 5)) {
    document.getElementById("login-confirmation").innerHTML = "Account Sign-Up Failed! Usernames/Passwords must be longer than 5 characters.";
    restart(timeout);
    return false;
  }

  try {
    localStorage.setItem("youth-immi-user", usernamein);
    localStorage.setItem("youth-immi-pw", passwordin);
    document.getElementById("login-confirmation").innerHTML = "Account Sign-Up Successful!";
    login();
    setTimeout("location.href = 'index.html'", timeout);
    return true;
  } catch (e) {

  }
  document.getElementById("login-confirmation").innerHTML = "Account Sign-Up Failed!";
  restart(timeout);
}

//try to login to a existing account
function login() {
  var usernamein = document.getElementById("username-input").value;
  var passwordin = document.getElementById("password-input").value;
  try {
    var u = getUsername();
    var p = getPassword();
    if ((usernamein == u) && (u != "Guest")) {
      if ((passwordin == p) && (p != "")) {
        localStorage.setItem("youth-immi-logged-in", "true");
        document.getElementById("login-confirmation").innerHTML = "Account Login Successful! You will be redirected to the homepage.";
        setTimeout("location.href = 'index.html'", timeout);
        return true;
      }
    }
  } catch (e) {

  }
  document.getElementById("login-confirmation").innerHTML = "Account Login Failed! Wrong Username/Password.";
  restart(timeout);
  return false;
}

//get username
function getUsername() {
  try {
    var usr = localStorage.getItem("youth-immi-user");
    if ((usr == null) || (usr == "")) {
      usr = "Guest";
    }
    return usr;
  } catch (e) {

  }
  return "Guest";
}

//get password
function getPassword() {
  try {
    var pw = localStorage.getItem("youth-immi-pw");
    if ((pw == null) || (pw == "")) {
      pw = "";
    }
    return pw;
  } catch (e) {

  }
  return "";
}


function deleteAllData() {
  var conf = confirm("Are you sure you want to delete all your data? This data cannot be restored.");
  if (conf == true) {
    localStorage.clear();
    restart(10);
  }
}

//get login status
function toggleLoginStatus() {
  try {
    var lg = localStorage.getItem("youth-immi-logged-in");
    if ((lg == null) || (lg == "")) {
      localStorage.setItem("youth-immi-logged-in", "true");
    } else {
      if (lg == "true") {
        localStorage.setItem("youth-immi-logged-in", "false");
        alert("you have logged out!");
      } else {
        localStorage.setItem("youth-immi-logged-in", "true");
      }
    }
    main();
  } catch (e) {

  }
}

//get login status
function getLoginStatus() {
  try {
    var lg = localStorage.getItem("youth-immi-logged-in");
    if ((lg == null) || (lg == "")) {
      return false;
    } else {
      if (lg == "true") {
        return true;
      } else {
        return false;
      }
    }
  } catch (e) {

  }
  return false;
}

//set username HTML label in nav bar if logged in
function setUsernameLabel() {
  try {
    var user = getUsername();
    if (getLoginStatus() == true) {
      document.getElementById("username-label").innerHTML = "Hi " + user + "!";
    } else {
      document.getElementById("username-label").innerHTML = "Hi Guest!";
      //document.getElementById("username-label").onclick = nothing();
    }
  } catch (e) {

  }
}

//a function to do nothing at all
function nothing() {

}

//function to edit the login/logout button based on whether you're logged in or not
function setLoginButton() {
  var btn_label = 'Login';
  var btn_style = '<span id="login-btn-span" class="glyphicon glyphicon-log-in"></span>';
  try {
    if (getLoginStatus() == true) {
      document.getElementById("story-creator-link").innerHTML = "Creator <span class='glyphicon glyphicon-pencil'></span>";
      btn_label = 'Logout';
      btn_style = '<span id="login-btn-span" class="glyphicon glyphicon-log-out"></span>';
      document.getElementById("login-btn").innerHTML = btn_label + " " + btn_style;
      document.getElementById("login-btn").setAttribute("href", "#");
      document.getElementById("login-btn").setAttribute("onClick", "javascript: toggleLoginStatus();");
    } else {
      document.getElementById("story-creator-link").innerHTML = "";
      document.getElementById("login-btn").innerHTML = btn_label + " " + btn_style;
      document.getElementById("login-btn").setAttribute("onClick", "javascript: nothing();");
      document.getElementById("login-btn").setAttribute("href", url + "login.html");
    }
  } catch (e) {

  }
}

function nothing() {

}

//function to run all onload functions (except test.html)
function main() {
  a = new Audio(getMP3Name(document.getElementsByTagName("title")[0].innerHTML));
  getLanguage();
  navBarInjection();
  setUsernameLabel();
  setLoginButton();
}