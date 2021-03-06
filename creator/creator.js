//creator.js
//a JS library that creates a story-file for use with the test.js quiz engine

//resets all input fields in creator

//global variable to store the story file contents
var story_file = `let name = \`\`;let story = \`\`;let imgPath = \`\`;`

var story_html_file = `
<!DOCTYPE html>
<html>
<head>
  <title>Youth Immigration - Play the Game to Learn</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
  <script src="../../js/login.js"></script>
  <script src="../../js/test.js"></script>
  <script src="story.js"></script>
  <link href="https://fonts.googleapis.com/css?family=Gloria+Hallelujah" rel="stylesheet">
</head>

<body onload="startGame()">

  <div id="nav-div">
</div>

  <center>
    <h1 style="font-family: 'Gloria Hallelujah' , cursive;">Play the Game to Learn</h1> <br />


  <div class= "container">
    <img id="slide" src="" style="max-width: 600px;" width="90%"></img>
    <div id="slide-controls"></div>
  </div>
  <center>
    <hr />
    <h2 style="font-family: 'Gloria Hallelujah' , cursive;">Score Report:</h2>
    <div id="scoreReport"></div>
    <hr />
  </center>

  <div class="container" id = "nav-footer">
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