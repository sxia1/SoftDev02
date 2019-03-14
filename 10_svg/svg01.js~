var pic = document.getElementById("vimage")

var prevX = -1;
var prevY = -1;

pic.addEventListener('click', function(e){
    var x = e.offsetX;
    var y = e.offsetY;
    console.log(x, y);
    //CIRCLE
    var c = document.createElementNS(
    "http://www.w3.org/2000/svg", "circle");
    c.setAttribute("cx", x);
    c.setAttribute("cy", y);
    c.setAttribute("r", 10);
    c.setAttribute("fill", "blue");
    pic.appendChild(c);
    if(prevX > 0){
	//LINE
	var l = document.createElementNS(
	    "http://www.w3.org/2000/svg", "line");
	l.setAttribute("x1", prevX);
	l.setAttribute("y1", prevY);
	l.setAttribute("x2", x);
	l.setAttribute("y2", y);
	l.setAttribute("stroke", "green");
	pic.appendChild(l);
    }
    prevX = x;
    prevY = y;
});

//CLEAR BUTTON
var clearB = document.getElementById("but_clear");
clearB.addEventListener('click', function(e){
    while(pic.lastChild){
	pic.removeChild(pic.lastChild);
    }
    prevX = -1;
    prevY = -1;
});
