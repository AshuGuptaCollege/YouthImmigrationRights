//creator.js
//a JS library that creates a story-file for use with the test.js quiz engine

//resets all input fields in creator

//global variable to store the story file contents
var story_file = `let name = \`\`;let story = \`\`;let imgPath = \`\`;`

var story_html_file = `<!DOCTYPE html>
<html>
<head>
  <title>Youth Immigration - Test Your Knowledge</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
  <script src="https://ashuguptacollege.github.io/YouthImmigrationRights/js/test.js"></script>
  <script src="https://ashuguptacollege.github.io/YouthImmigrationRights/js/login.js"></script>
  <script src="story.js"></script>
  <link href="https://fonts.googleapis.com/css?family=Gloria+Hallelujah" rel="stylesheet">
</head>

<body onload="startGame()">

  <nav style="background-color: #E4F2FC; margin-bottom: 50px;" class="navbar navbar-dark bg-dark">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#" style="font-family: 'Gloria Hallelujah' , cursive;">Youth Immigration</a>
    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="nav navbar-nav">
        <li class="active"><a href="index.html">Home</a></li>
        <li><a href="#">Lawyers</a></li>
        <li><a href="#">Resources</a></li>
        <li><a href="#">FAQs</a></li>
        <li><a href="#">Languages &nbsp;<img src="images/assets/en.png" width="20px"></img></a></li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li><a href="#" id="username-label">Hi User!</a></li>
        <li><a href="login.html"><span class="glyphicon glyphicon-user"></span>Sign Up</a></li>
        <li><a href="login.html"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
      </ul>
    </div>
  </div>
</nav>

  <center>
    <h1 style="font-family: 'Gloria Hallelujah' , cursive;">Test Your Knowledge</h1> <br />


  <div class= "container">
    <img id="slide" src="" width="600px"></img>
    <div id="slide-controls"></div>
  </div>
  <center>
    <hr />
    <h2 style="font-family: 'Gloria Hallelujah' , cursive;">Score Report:</h2>
    <div id="scoreReport"></div>
    <hr />
  </center>

<div class="container">
  <center><small>Copyright &copy Youth Immigration Innovation Lab Group 2019 <a href="#">Legal</a></small></center>
</div>

</body>
</html>
`;

function refresh() {
  document.getElementById("input-title").value = "";
  document.getElementById("input-imgpath").value = "";
  document.getElementById("input-story-script").value = "";
  document.getElementById("output-story-file").value = "";
  document.getElementById("output-story-html").value = "";
}

function generateStoryFile() {
  var nm = document.getElementById("input-title").value;
  var ip = document.getElementById("input-imgpath").value;
  var ss = document.getElementById("input-story-script").value;
  var script = parseScript(ss);
  updateStoryFileString(nm, ip, script);
  document.getElementById("output-story-file").value = story_file;
  document.getElementById("output-story-html").value = story_html_file;
}

function updateStoryFileString(n, i, s) {
  var p1 = `let name = \``;
  var p2 = `\`;\nlet story = \``;
  var p3 = `\`;\nlet imgPath = \``;
  var p4 = `\`;`;
  story_file = p1 + n + p2 + s + p3 + i + p4;
}

function textCopySelect(t) {
  var idToEdit = "";
  if (t == 0) {
    idToEdit = "output-story-file";
  } else if (t == 1) {
    idToEdit = "output-story-html";
  } else {
    return;
  }
  var ta = document.getElementById(idToEdit);
  ta.select();
  document.execCommand("copy");
  alert("copied selected text to clipboard!");
}

function parseScript(ss) {
  var story_code = "";
  var terms = ss.split(",");
  var i;
  for (i = 0; i < terms.length; i++) {
    if (terms[i] == "story") {
      if (i >= 1) {
        var prev = terms[i - 1];
        if (prev == "wrong") {
          story_code += "F";
        } else {
          story_code += "S";
        }
      } else {
        story_code += "S";
      }
    } else if (terms[i] == "question-a") {
      story_code += "A";
    } else if (terms[i] == "question-b") {
      story_code += "B";
    } else if (terms[i] == "correct") {
      story_code += "C";
    } else if (terms[i] == "wrong") {
      story_code += "W";
    } else {
      //error, do nothing
    }
  }
  return story_code;
}