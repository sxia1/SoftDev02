/*
    TheWarlocks
    Sophia Xia, Thomas Zhao
    SoftDev2 pd8
    K03 -- They lock us in the tower whenever we get caught ...which is often
    2019-02-04
*/

//preventDefault(): used to stop default undesired behaviors when a certain event occurs

var c = document.getElementById("playground");
var ctx = c.getContext("2d");
var requestId = 0;
var requestIdDvd = 0;
var radius = 0;
var growing = true;
var clicked = false;
var clickedDvd = false;
var x = 0;
var y = 0;
var xVel = 1;
var yVel = 1;

ctx.fillStyle = 'green';

var clear = function(e){
    ctx.clearRect(0, 0, 600, 600);
};

var drawDot = function(){
    clicked = true;
    clickedDvd = false;
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
    window.cancelAnimationFrame(requestId);
    var rectWidth = 100;
    var rectHeight = 100;
    var rectX = Math.floor(Math.random * (c.width - rectWidth));
    var rectX = Math.floor(Math.random * (c.height - rectHeight));
    var xVel = 1;
    var yVel = 1;
    var logo = new Image();
    logo.src = "logo_dvd.jpg";
    //ctx.drawImage(?);
}

var bounce = function(){
    clicked = false;
    clickedDvd = true;
    //console.log(x, y);
    clear();
    ctx.fillRect(x, y, 50, 50);
    requestIdDvd = window.requestAnimationFrame(bounce);
    x += xVel;
    y += yVel;
}

var stopIt = function(){
    console.log(requestId);
    window.cancelAnimationFrame(requestId);
    window.cancelAnimationFrame(requestIdDvd);
    clicked = false;
    clickedDvd = false;
};

var dotButton = document.getElementById("circle");
dotButton.addEventListener('click', function(){
    if(!clicked){
	drawDot();
    }
});

var stopButton = document.getElementById("stop");
stopButton.addEventListener('click', stopIt);

var dvdButton = document.getElementById("dvd");
dvdButton.addEventListener('click', bounce);
