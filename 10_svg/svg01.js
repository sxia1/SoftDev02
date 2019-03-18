var pic = document.getElementById("vimage")
var rect = pic.getBoundingClientRect();

pic.addEventListener('click', function(e){
    draw(e);
});

var draw = function(e){
    var x = e.clientX - rect.left;
    var y = e.clientY - rect.top;
    console.log(x, y);
    circle(x, y);
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
	e.stopPropagation();
	change_color(e, c);
    });
}

var change_color = function(e, c){
    if(c.getAttribute("fill") == "blue"){
	c.setAttribute("fill", "green");
    }
    c.addEventListener('click', function(e){
	e.stopPropagation();
	move_circle(e, c);
    });
}

var move_circle = function(e, c){
    if(c.getAttribute("fill") == "green"){
	pic.removeChild(c);
	var nx = Math.random()*rect.width;
	var ny = Math.random()*rect.height;
	circle(nx, ny);
    }
}

//CLEAR BUTTON
var clearB = document.getElementById("but_clear");
clearB.addEventListener('click', function(e){
    while(pic.lastChild){
	pic.removeChild(pic.lastChild);
    }
});
