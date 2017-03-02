// ** BULLSEYE ** //

// STEP 1:  Add click handlers to update the score to be:
//          100 points - Bullseye
//           50 points - Middle Ring
//           10 points - Outer Ring
//            0 points - Miss  (done for you)

// STEP 2: Break down the updateScore method, write a paragraph or comment
//         how the function works line by line

// STEP 3:  Highlight the element that was clicked on
//          using the CSS `background-color: yellow`
// BONUS:  Implement setTimeout so the background is yellow for only two seconds

// EXPLORATION: Comment out event.stopPropagation in each function, and then click
//              the inner ring. What happens?



window.onload = function() {
  var body = document.body;
  var ring1 = document.querySelector('.ring-1');
  var ring2 = document.querySelector('.ring-2');
  var ring3 = document.querySelector('.ring-3');

  body.addEventListener('click', bullseyeGame.miss);
  ring1.addEventListener('click', bullseyeGame.outerRing)
  ring2.addEventListener('click', bullseyeGame.middleRing)
  ring3.addEventListener('click', bullseyeGame.bullseye)
}

var ring1 = document.querySelector('.ring-1');
var ring2 = document.querySelector('.ring-2');
var ring3 = document.querySelector('.ring-3');

var bullseyeGame = {
  score: 0,
// Below we establish the function with a single parameter ('points').
  updateScore: function(points) {
    var scoreElement = document.querySelector('.score');
    this.score += points
// This function above adds points every time a player clicks on a particular ring.
    scoreElement.innerHTML = `${this.score} points`
  },
// With each score, the above selector outputs the total score below the gameboard.
  miss: function(event) {
    event.stopPropagation();
    alert('YOU MISSED');
    bullseyeGame.updateScore(0);
    // [ALERT:] needs to be bullseyeGame because this in clickEvents refers to the html
    // element that was clicked
  },

  outerRing: function(event) {
    event.stopPropagation();
    bullseyeGame.updateScore(10);
    ring1.style.background = 'yellow';
    alert('You got 10 points. Try harder.')
  },

  middleRing: function(event) {
    event.stopPropagation();
    bullseyeGame.updateScore(50);
    ring2.style.background = 'yellow';
    alert('You got 50 points!')
  },

  bullseye: function(event) {
    event.stopPropagation();
    bullseyeGame.updateScore(100);
    ring3.style.background = 'yellow';
    alert('Bullseye!')
  },
}
