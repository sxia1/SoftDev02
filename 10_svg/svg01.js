var pic = document.getElementById("vimage")

pic.addEventListener('click', function(e){
    draw(e);
});

var draw = function(e){
    var x = e.offsetX;
    var y = e.offsetY;
    console.log(x, y);
    circle(x, y);
    console.log(e.clientX - e.offsetX);
    console.log(e.clientY - e.offsetY);
}

var circle = function(x, y){
    var c = document.createElementNS(
	"http://www.w3.org/2000/svg", "circle");
    c.setAttribute("cx", x);
    c.setAttribute("cy", y);
    c.setAttribute("r", 10);
    c.setAttribute("fill", "blue");
    pic.appendChild(c);
    c.addEventListener('click', function(e){
	change_color(e, c);
    });
    c.addEventListener('click', function(e){
	move_random(e, c);
    });
}

var change_color = function(e, c){
    if(c.getAttribute("fill") == "blue"){
	c.setAttribute("fill", "green");
    }
    else if(c.getAttribute("fill") == "green"){
	pic.removeChild(c);
	var circ = circle(100, 100);
	pic.appendChild(circ);
    }
}

var move_random = function(e, c){
    if(c.getAttribute("fill") == "green"){
	pic.removeChild(c);
	//var circ = circle(100, 100);
	//pic.appendChild(circ);
    }
}

//CLEAR BUTTON
var clearB = document.getElementById("but_clear");
clearB.addEventListener('click', function(e){
    while(pic.lastChild){
	pic.removeChild(pic.lastChild);
    }
});
