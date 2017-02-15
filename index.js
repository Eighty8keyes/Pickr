(function() {
var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var message = document.getElementById("message");
var h1Background = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var modeButtons = document.querySelectorAll(".mode");

init();

colorDisplay.textContent = pickedColor;
resetButton.addEventListener("click", function(){
  reset();
})

/* Start function defs */
function init(){
  for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function(){
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
      reset();
    })
  }
  for (var i = 0; i < squares.length; i++) {
    //add clickListeners
    squares[i].addEventListener("click", function(){
      //grab color of clicked square
      var clickedColor = this.style.background;
      //compare color of square
      if (clickedColor === pickedColor) {
        message.textContent = "Correct!";
        changeColors(clickedColor);
        h1Background.style.background = pickedColor;
        resetButton.innerHTML = "Play Again?";
        }
      else {
        this.style.background = "#232323";
        message.textContent = "Try again";
        }
    })
  }
  reset();
}

function reset(){
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  message.textContent = "";
  resetButton.textContent = "New Colors";
  //change colors of squares
  for (var i = 0; i < squares.length; i++) {
    if(colors[i]){
      squares[i].style.display = "block";
      squares[i].style.background = colors[i];
    }
    else {
      squares[i].style.display = "none";
    }
  }
  h1Background.style.background = "steelblue";
}

function changeColors(color){
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = color;
  }

}

function pickColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num){
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push(randomColor());
  }
  return arr;
}

function randomColor(){
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
})();
