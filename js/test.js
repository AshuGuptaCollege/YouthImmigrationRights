//test.js
//youth immigration project
//eecs 397
//version 1

//global variables
var count = 1;
var score = "";
//global static HTML for control bar
var storyControls = '<div class="story-controls"><a href="#" onclick="back(1)" class="btn btn-lg btn-danger"><span class="glyphicon glyphicon-hand-left"></span></a> <a onclick="next(1)" href="#" class="btn btn-lg btn-danger"><span class="glyphicon glyphicon-hand-right"></span></a></div>';
var storyControlsCorrect = '<div class="story-controls"><a href="#" onclick="back(1)" class="btn btn-lg btn-danger"><span class="glyphicon glyphicon-hand-left"></span></a> <a onclick="next(2)" href="#" class="btn btn-lg btn-danger"><span class="glyphicon glyphicon-hand-right"></span></a></div>';
var storyControlsWrong = '<div class="story-controls"><a href="#" onclick="back(2)" class="btn btn-lg btn-danger"><span class="glyphicon glyphicon-hand-left"></span></a> <a onclick="next(1)" href="#" class="btn btn-lg btn-danger"><span class="glyphicon glyphicon-hand-right"></span></a></div>';
var storyControlsFinished = '<div class="story-controls"><a href="#" onclick="finish()" class="btn btn-lg btn-success">See Your Score! <span class="glyphicon glyphicon-ok"></span></a> <a onclick="restart(10)" href="#" class="btn btn-lg btn-danger">Restart <span class="glyphicon glyphicon-refresh"></span></a></div>';
var storyControlsPrevDisabled = '<div class="story-controls"><a href="#" class="btn btn-lg btn-danger disabled"><span class="glyphicon glyphicon-hand-left"></span></a> <a onclick="next(1)" href="#" class="btn btn-lg btn-danger"><span class="glyphicon glyphicon-hand-right"></span></a></div>';
var questionControlsA = '<div class="question-controls"><a onclick="next(1)" href="#" class="btn btn-lg btn-success"><span class="glyphicon glyphicon-font"></span></a> <a onclick="next(2)" href="#" class="btn btn-lg btn-success"><span class="glyphicon glyphicon-bold"></span></a></div>';
var questionControlsB = '<div class="question-controls"><a onclick="next(2)" href="#" class="btn btn-lg btn-success"><span class="glyphicon glyphicon-font"></span></a> <a onclick="next(1)" href="#" class="btn btn-lg btn-success"><span class="glyphicon glyphicon-bold"></span></a></div>';

//function to load a slide and its corresponding nav bar based on its code
function loadNextSlide(c) {
  console.log(count);
  if (c == 'S') {
    document.getElementById("slide").src = imgPath + "slide" + count.toString() + ".jpg";
    loadStoryControls(c);
    return true;
  } else if (c == 'F') {
    document.getElementById("slide").src = imgPath + "slide" + count.toString() + ".jpg";
    loadStoryControls(c);
    return true;
  } else if ((c == 'A') || (c == 'B')) {
    document.getElementById("slide").src = imgPath + "slide" + count.toString() + ".jpg";
    loadQuestionControls(c);
    return true;
  } else if (c == 'C') {
    score += "C";
    document.getElementById("slide").src = imgPath + "slide" + count.toString() + ".jpg";
    loadStoryControls(c);
    return true;
  } else if (c == 'W') {
    score += "W";
    document.getElementById("slide").src = imgPath + "slide" + count.toString() + ".jpg";
    loadStoryControls(c);
    return true;
  } else {
    return false;
  }
}

//get the total number of correct points from a score string
function getCorrectPoints(s) {
  var i;
  var count = 0;
  for (i = 0; i < s.length; i++) {
    if (s.charAt(i) == 'C') {
      count++;
    }
  }
  return count;
}

//get the percentage correct from a score string
function getPercentCorrect(s) {
  if (s.length > 0) {
    return (getCorrectPoints(s) / s.length) * 100;
  }
  return 0;
}

//clear local storage
function clearData() {
  localStorage.clear();
}

//remove the specific score
function resetScore() {
  localStorage.removeItem('yi-' + name + '-story-score');
}

//finish the game
function finish() {
  //localStorage.setItem('yi-' + name + '-story-score', score);
  showScoreReport();
}

//save the score in local storage
function saveScore() {
  localStorage.setItem('yi-' + name + '-story-score', score);
  document.getElementById("save-score-span").className = "glyphicon glyphicon-floppy-saved";
  document.getElementById("save-score-btn").className = "btn btn-success disabled";
  document.getElementById("scoreReport").innerHTML += "<br /><small>your score has been saved!</small>";
  restart(1000);

}

//output HTML for a score report based on current score, or previous score if game not finished
function showScoreReport() {
  //var s = localStorage.getItem('yi-' + name + '-story-score');
  var scoreMsg = "";
  if (getPercentCorrect(score) < 40) {
    scoreMsg = "Make sure you try again to learn more!";
  } else if ((getPercentCorrect(score) > 40) && (getPercentCorrect(score) < 70)) {
    scoreMsg = "Not bad! You're almost an expert!";
  } else if (getPercentCorrect(score) > 99) {
    scoreMsg = "Wow! You aced the game!";
  } else {
    scoreMsg = "Great Job! You're almost an expert!";
  }
  var scorerep = "You scored: " + getCorrectPoints(score).toString() + " / " + score.length.toString() + " total points<br /><br /><strong>" + getPercentCorrect(score).toString() + "%</strong> - " + scoreMsg + '<br /><br /><a id="save-score-btn" onclick="saveScore()" href="#" class="btn btn-success">Save My Score <span id="save-score-span" class="glyphicon glyphicon-floppy-save"></span></a>';
  if (score.length == 0) {
    var scorePrev = localStorage.getItem('yi-' + name + '-story-score', score);
    if (!((scorePrev == null) || (scorePrev == ""))) {
      if (getPercentCorrect(scorePrev) < 40) {
        scoreMsg = "You can improve on your last score!";
      } else if ((getPercentCorrect(scorePrev) > 40) && (getPercentCorrect(scorePrev) < 70)) {
        scoreMsg = "Not bad! You can improve on your last score this time.";
      } else if (getPercentCorrect(scorePrev) > 99) {
        scoreMsg = "Wow! You already aced the game!";
      } else {
        scoreMsg = "You did a great job! Try to get a perfect score this time.";
      }
      scorerep = "Last time, you scored: " +
        getCorrectPoints(scorePrev).toString() + " / " + scorePrev.length.toString() + " total points<br /><br /><strong>" + getPercentCorrect(scorePrev).toString() + "%</strong> - " + scoreMsg + '<br /><br />';
    } else {
      scorerep = "You've never played this game before! finish the game first to see your score report!";
    }
  }
  document.getElementById("scoreReport").innerHTML = scorerep;
}

//a window reload method that will reload after x / 1000 seconds
function restart(x) {
  setTimeout('window.location.reload()', x);
}

//starter function that initializes the slides
function startGame() {
  loadNextSlide(story.charAt(0));
  showScoreReport();
  document.getElementById("slide-controls").innerHTML = storyControlsPrevDisabled;
}

//load the story controls
function loadStoryControls(c) {
  if (c == 'S') {
    document.getElementById("slide-controls").innerHTML = storyControls;
  } else if (c == 'F') {
    document.getElementById("slide-controls").innerHTML = storyControlsPrevDisabled;
  } else if (c == 'C') {
    document.getElementById("slide-controls").innerHTML = storyControlsCorrect;
  } else if (c == 'W') {
    document.getElementById("slide-controls").innerHTML = storyControlsWrong;
  } else {
    return false;
  }
}

//load question controls
function loadQuestionControls(ca) {
  var qc;
  if (ca == 'A') {
    qc = questionControlsA;
  } else {
    qc = questionControlsB;
  }
  document.getElementById("slide-controls").innerHTML = qc;
}

//go forward x slides
function next(x) {
  count += x;
  if (count > story.length) {
    count = story.length;
    document.getElementById("slide-controls").innerHTML = storyControlsFinished;
    return;
  }
  loadNextSlide(story.charAt(count - 1));
}

//go backwards x slides
function back(x) {
  if (count == 1) {
    document.getElementById("slide-controls").innerHTML = storyControlsPrevDisabled;
    return;
  }
  count -= x;
  loadNextSlide(story.charAt(count - 1));
  if (count == 1) {
    document.getElementById("slide-controls").innerHTML = storyControlsPrevDisabled;
  }
}