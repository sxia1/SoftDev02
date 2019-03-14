var pic = document.getElementById("vimage")

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
