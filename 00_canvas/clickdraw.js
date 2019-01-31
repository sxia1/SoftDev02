/*
  Sophia Xia
  SoftDev2 pd8
  K00 -- I See a Red Door...
  2018-01-30
*/

var mode = 1;
var c = document.getElementById("slate");
var ctx = c.getContext("2d");
ctx.fillStyle = 'green';
ctx.strokeStyle = 'blue';

//Clicking in the canvas draws a rectangle or ellipse
c.addEventListener('click', function(e){
    console.log(e);
    if(mode > 0){
	ctx.fillRect(e.offsetX, e.offsetY, 10, 20);
    }
    else{
	ctx.beginPath();
	ctx.ellipse(e.offsetX, e.offsetY, 20, 20, 0, 0, 2*Math.PI);
	ctx.stroke();
    }
});

//upon button push clear the canvas
var clearB = document.getElementById("clear");
clearB.addEventListener('click', function(){
    ctx.clearRect(0, 0, 600, 600);
});

//upon button push toggle
var toggB = document.getElementById("toggle");
toggB.addEventListener('click', function(){
    mode = mode *-1;
});
