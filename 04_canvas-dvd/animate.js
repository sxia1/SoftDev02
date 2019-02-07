/*
    TheWarlocks
    Sophia Xia, Thomas Zhao
    SoftDev2 pd8
    K03 -- They lock us in the tower whenever we get caught ...which is often
    2019-02-04
*/

//preventDefault(): used to stop default undesired behaviors when a certain event occurs

//CANVAS
var c = document.getElementById("playground");
var ctx = c.getContext("2d");

//REQUEST ID
var requestId = 0;
var requestIdDvd = 0;

//CIRCLE ANIMATION
var radius = 0;
var growing = true;

//DVD ANIMATION
var clickedDvd = false;

ctx.fillStyle = 'green';

var clear = function(e){
    ctx.clearRect(0, 0, 600, 600);
};

var drawDot = function(){
    stopIt();
    //window.cancelAnimationFrame(requestId);
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
	radius ++;
    }
    else{
	radius --;
    }
};

var dvdLogoSetup = function(){
    if(!clickedDvd){
	var rectX = Math.floor(Math.random() * (c.width - rectWidth));
	var rectY = Math.floor(Math.random() * (c.height - rectHeight));
	var xVel = 1;
	var yVel = 1;
    }
    var rectWidth = 100;
    var rectHeight = 50;
    var logo = new Image();
    logo.src = "logo_dvd.jpg";
    clickedDvd = true;
    stopIt();
    //console.log(x, y);
    //window.cancelAnimationFrame(requestIdDvd);
    clear();
    ctx.drawImage(logo, rectX, rectY, rectWidth, rectHeight);
    requestIdDvd = window.requestAnimationFrame(dvdLogoSetup);
    if(rectX == c.width -rectWidth || rectX == 0){
	xVel = xVel * -1;
    }
    if(rectY == c.height -rectHeight || rectY == 0){
	yVel = yVel * -1;
    }
    rectX += xVel;
    rectY += yVel;
}

var bounce = function(){
    stopIt();
    //console.log(x, y);
    //window.cancelAnimationFrame(requestIdDvd);
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

var stopIt = function(){
    console.log(requestId);
    window.cancelAnimationFrame(requestId);
    window.cancelAnimationFrame(requestIdDvd);
};

var dotButton = document.getElementById("circle");
dotButton.addEventListener('click', drawDot);

var stopButton = document.getElementById("stop");
stopButton.addEventListener('click', stopIt);

var dvdButton = document.getElementById("dvd");
dvdButton.addEventListener('click', dvdLogoSetup);
