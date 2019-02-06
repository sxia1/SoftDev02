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
var radius = 0;
var growing = true;
var clicked = false;
ctx.fillStyle = 'green';

var clear = function(e){
    ctx.clearRect(0, 0, 600, 600);
};

var drawDot = function(){
    clicked = true;
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

var stopIt = function(){
    console.log(requestId);
    window.cancelAnimationFrame(requestId);
    clicked = !clicked;
};

var dotButton = document.getElementById("circle");
var stopButton = document.getElementById("stop");
dotButton.addEventListener('click', function(){
    if(!clicked){
	drawDot();
    }
});
stopButton.addEventListener('click', stopIt);
