var numSquares = 6;
var colors = [];
var winColor;
//variables that select html elements
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var gameStateMes = document.querySelector("#gameStateMes");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var gameModeBtns = document.querySelectorAll(".gameMode");

init();

function init(){
    setupModeButtons();
    setupSquares();
            
    resetGame();
};

function setupModeButtons(){
    for(var i = 0; i <gameModeBtns.length; i++){
        gameModeBtns[i].addEventListener("click", function(){
            //unselect/un-highlight game mode button
            gameModeBtns[0].classList.remove("selected");
            gameModeBtns[1].classList.remove("selected");
            //highlights selected game mode
            this.classList.add("selected");
            //determines number of squares to show based on game mode
            this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
            //reset the game state
            resetGame();
        });
    };
};

function setupSquares(){
    for(var i = 0; i < squares.length; i++){
        //add click listeners to squares
        squares[i].addEventListener("click", function(){
           //take color of picked square
           var clickedColor = this.style.backgroundColor;
           //compare color to pickedColor
           if(clickedColor===winColor){
               //winning changes span, reset button text, and makes all squares and background winning color
               gameStateMes.textContent = "Correct!";
               resetButton.textContent = "Play Again?";
               changeColors(clickedColor);
               h1.style.backgroundColor = clickedColor;
           } else {
               //picking wrong changes span too, and fades the selected square 
               this.style.backgroundColor = "#232323";
               gameStateMes.textContent = "Try Again";
           }
        });
    };
};

function resetGame(){
    //generate new colors in array
   colors = generateRandomColors(numSquares);
   //pick a new winning color from array
   winColor = pickColor();
   //change colorDiplay to match picked color
   colorDisplay.textContent = winColor;
   //change text on the "New Game" button
   resetButton.textContent = "New Colors";
   //change square colors 
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    };
    h1.style.backgroundColor = "steelblue";
    gameStateMes.textContent = "";
};

resetButton.addEventListener("click", function(){
    //reset gamestate
    resetGame();
});

function changeColors(color){
    //loop through all squares
    for(var i = 0; i < squares.length; i++){
        //change each color to match winColor
        squares[i].style.backgroundColor = color;
    }   
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    //define array
    var arr = [];
    //populate array
    for(var i = 0; i < num; i++){
        //get random color and push into array
        arr.push(randomColor());
    }
    //return array
    return arr;
}

function randomColor(){
    //pick a red value from 0-255
    var r = Math.floor(Math.random() * 256);
    //pick a green value from 0-255
    var g = Math.floor(Math.random() * 256);
    //pick a blue value from 0-255
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}