var numsquares      = 6 ;
var gameOver        = false
var colors          = []
var pickedColor;
var mode            = document.querySelectorAll(".mode");
var h1              = document.querySelector("h1");
var messageDisplay  = document.querySelector("#message");
var squares         = document.querySelectorAll(".square");
var colorDisplay    = document.getElementById("colorDisplay");
var resetButton     = document.querySelector("#reset");

init();

function init(){
    setupListners();
    setupSqures();
    reset();
}

function setupListners(){
    for(var i = 0; i<mode.length ; i++){
        mode[i].addEventListener("click",function(){
            mode[0].classList.remove("selected");
            mode[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "EASY" ? numsquares = 3:numsquares = 6;
            reset();
        })
    }
}

function setupSqures(){
    for (var i =0 ; i<squares.length ; i++){
        // add click listners to squres ;
        squares[i].addEventListener("click" , function(){  
            //    grab color of clicked square
            var clickedColor = this.style.backgroundColor;
            // compare color to clicked color 
            if(clickedColor === pickedColor){
                resetButton.textContent = "Play Again?"
                console.log("right");
                h1.style.backgroundColor = this.style.backgroundColor
                messageDisplay.textContent = "CORRECT!";
                changeColors(pickedColor); // to change colors to correct color
                gameOver = true;
            }else{
                console.log("wrong");
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
    }
}


function reset(){
    messageDisplay.textContent = "";
    // generate all new colors 
    colors = generateRandomColors(numsquares); 
     //  pick a new colors
    pickedColor = pickColor();
    // change picked color
    colorDisplay.textContent = pickedColor ;
    // to change background color
    for (var i =0 ; i<squares.length ; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }else{
            squares[i].style.display = "none";
        }       
}
    h1.style.backgroundColor = "steelblue"; 
    resetButton.textContent = "New Colors";
};

resetButton.addEventListener("click" , function(){
    reset();
});

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function changeColors(color){
    // loop through all colors
    for (var i =0 ; i< squares.length ; i++){
        squares[i].style.backgroundColor = color;
    } 
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    // make an array 
    arr = [];
    // add num random colors to array
    for(var i =0 ; i < num;i++){
        // get random color and push to array
        arr.push(randomColor());
    }
    // return array
    return arr;
}

function randomColor(){
    // pick a areg from 0 to 255
    var r = Math.floor(Math.random()*256);
    // green to 0 to 255
    var g = Math.floor(Math.random()*256);
    // blue from 0 to 255
    var b = Math.floor(Math.random()*256);
    return("rgb(" + r + ", " + g + ", " + b + ")")  ;
}
for (var i =0 ; i<squares.length ; i++){
    // add initial colors to squares ;    
    
    // add click listners to squres ;
    squares[i].addEventListener("click" , function(){  
        //    grab color of clicked square
        var clickedColor = this.style.backgroundColor;
        // compare color to clicked color 
        if(clickedColor === pickedColor){
            resetButton.textContent = "Play Again?"
            console.log("right");
            h1.style.backgroundColor = this.style.backgroundColor
            messageDisplay.textContent = "CORRECT!";
            changeColors(pickedColor); // to change colors to correct color
            gameOver = true;
        }else{
            console.log("wrong");
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
        }
    });
}