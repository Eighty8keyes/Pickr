var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var message = document.getElementById("message");
var h1Background = document.querySelector("h1");
var resetButton = document.getElementById("reset");

colorDisplay.textContent = pickedColor;
resetButton.addEventListener("click", function(){
  //generate new colors
  colors = generateRandomColors(6);
  //pick a new random color from array
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  //change colors of squares
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i]
  }
  h1Background.style.background = "#232323";
})

for (var i = 0; i < squares.length; i++) {
  //add initial colors to squares
  squares[i].style.background = colors[i];
  //add clickListeners
  squares[i].addEventListener("click", function(){
    //grab color of clicked square
    var clickedColor = this.style.background;
    //compare color of square
    if (clickedColor === pickedColor) {
      message.textContent = "Correct";
      changeColors(clickedColor);
      h1Background.style.background = pickedColor;
      }
    else {
      this.style.background = "#232323";
      message.textContent = "Try again";
      }
  })
}

function changeColors(color){
  //loop through all squares
  for (var i = 0; i < squares.length; i++) {
    //change each color to match given color
    squares[i].style.background = color;
  }

}
function pickColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}
function generateRandomColors(num){
  //make an array
  var arr = [];
  //add num random colors to array
  for (var i = 0; i < num; i++) {
    //get random color and push into array
    arr.push(randomColor());
  }
  //return the array
  return arr;
}
function randomColor(){
  //pick a red from 0 to 255
  var r = Math.floor(Math.random() * 256);
  //pick a green from 0 to 255
  var g = Math.floor(Math.random() * 256);
  //pick a blue from 0 to 255
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
