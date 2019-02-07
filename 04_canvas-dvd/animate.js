/*
    TheWarlocks
    Sophia Xia, Thomas Zhao
    SoftDev2 pd8
    K04 -- What is it saving the screen from?g
    2019-02-07
*/

//preventDefault(): used to stop default undesired behaviors when a certain event occurs

//CANVAS variables
var c = document.getElementById("playground");
var ctx = c.getContext("2d");

//REQUEST ID variables
var requestId = 0;
var requestIdDvd = 0;

//CIRCLE ANIMATION variables
var radius = 0;
var growing = true;
ctx.fillStyle = 'green';

//DVD ANIMATION variables
var rectX, rectY, xVel, yVel;
var rectWidth = 100;
var rectHeight = 50;
var logo = new Image();
logo.src = "logo_dvd.jpg";

//Clears the canvas
var clear = function(e){
    ctx.clearRect(0, 0, 600, 600);
}

//Creates and expands/shrinks the circle
var drawDot = function(){
    stopIt();
    if(c.width/2 == radius){
	growing = !growing;
    }
    if(radius == 0 && !growing){
	growing = !growing;
    }
    clear();
    ctx.beginPath();
    ctx.arc(c.width/2, c.height/2, radius, 0, 2*Math.PI);
    ctx.stroke();
    ctx.fill();
    requestId = window.requestAnimationFrame(drawDot);
    if(growing){
	radius++;
    }
    else{
	radius--;
    }
}

// Sets up variables necessary for the DVD bouncing thing
var dvdLogoSetup = function(){
    rectX = Math.floor(Math.random() * (c.width - rectWidth));
    rectY = Math.floor(Math.random() * (c.height - rectHeight));
    xVel = 1;
    yVel = 1;

    bounce(); 
}

// Causes the movement of the image and its bouncing
var bounce = function(){
    stopIt();

    clear();
    ctx.drawImage(logo, rectX, rectY, rectWidth, rectHeight);
    requestIdDvd = window.requestAnimationFrame(bounce);
    if(rectX == c.width -rectWidth || rectX == 0){
	xVel = xVel * -1;
    }
    if(rectY == c.height -rectHeight || rectY == 0){
	yVel = yVel * -1;
    }
    rectX += xVel;
    rectY += yVel;
}

// Halts all animations
var stopIt = function(){
    console.log('Dot Request ID: ', requestId);
    console.log('DvD Request ID: ', requestIdDvd);
    window.cancelAnimationFrame(requestId);
    window.cancelAnimationFrame(requestIdDvd);
};

// Buttons and their eventListeners
var dotButton = document.getElementById("circle");
dotButton.addEventListener('click', drawDot);

var stopButton = document.getElementById("stop");
stopButton.addEventListener('click', stopIt);

var dvdButton = document.getElementById("dvd");
dvdButton.addEventListener('click', dvdLogoSetup);
