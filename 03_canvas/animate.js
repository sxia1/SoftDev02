/*
    TheWarlocks
    Sophia Xia, Thomas Zhao
    SoftDev2 pd8
    K03 --
    2019-02-04
*/

//preventDefault(): used to stop default undesired behaviors when a certain event occurs

var c = document.getElementById("playground");
var ctx = c.getContext("2d");
var requestId = 0;
var radius = 0;
var growing = true;
ctx.fillStyle = 'green';

var clear = function(e){
    ctx.clearRect(0, 0, 600, 600);
};

var drawDot = function(){
    if(c.width/2 == radius){
	growing = !growing;
    }
    if(0 == radius){
	growing = !growing;
    }
    ctx.beginPath();
    ctx.arc(c.width/2, c.height/2, radius, 0, 2*Math.PI);
    ctx.stroke();
    ctx.fill();
    requestId = window.requestAnimationFrame();
    if(growing){
	radius ++;
    }
    else{
	radius --;
    }
};

var stopIt = function(){
    console.log(requestId);
    //ctx.cancelAnimationFrame(requestId);
};

var dotButton = document.getElementById("circle");
var stopButton = document.getElementById("stop");
dotButton.addEventListener('click', drawDot);
stopButton.addEventListener('click', stopIt);
