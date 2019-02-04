/*
  WitchBolt
  Sophia Xia, Hui Min Wu
  SoftDev2 pd8
  K02 -- Connecting the Dots
  2019-02-01
*/

//preventDefault(): used to stop default undesired behaviors when a certain event occurs

var c = document.getElementById("slate");
var ctx = c.getContext("2d");

var prevX = -1;
var prevY = -1;

ctx.strokeStyle = 'blue';

//Clicking in the canvas draws a rectangle or ellipse
//offsetX and offsetY gives the coordinates of the event with respect to the origin of the canvas instead of the page
c.addEventListener('click', function(e){
    //create local var for offset, doesn't work otherwise
    var x = e.offsetX;
    var y = e.offsetY;
    console.log(x, y);
    //place circle
    ctx.beginPath();
    ctx.ellipse(e.offsetX, e.offsetY, 10, 10, 0, 0, 2*Math.PI);
    ctx.stroke();
    //move to center of circle
    ctx.moveTo(e.offsetX, e.offsetY);
    console.log(prevX, prevY)
    //if a prev circle exists, draw a line to it
    if(prevX >= 0){
	ctx.lineTo(prevX, prevY);
	ctx.stroke();
    }
    //set the prev circle coor to current circle coor
    prevX = x;
    prevY = y;
});

//upon button push clear the canvas
var clearB = document.getElementById("clear");
clearB.addEventListener('click', function(){
    //clear canvas
    ctx.clearRect(0, 0, 600, 600);
    //reset the prev circle coor
    prevX = -1;
    prevY = -1;
});
