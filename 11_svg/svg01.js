var pic = document.getElementById("vimage")
var rect = pic.getBoundingClientRect();

var requestId = 0;

pic.addEventListener('click', function(e){
    draw(e);
});

var draw = function(e){
    var x = e.clientX - rect.left;
    var y = e.clientY - rect.top;
    console.log(x, y);
    circle(x, y);
};

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
};

var change_color = function(e, c){
    if(c.getAttribute("fill") == "blue"){
	c.setAttribute("fill", "green");
    }
    c.addEventListener('click', function(e){
	e.stopPropagation();
	random_spot(e, c);
    });
};

var random_spot = function(e, c){
    if(c.getAttribute("fill") == "green"){
	pic.removeChild(c);
	var nx = Math.random()*rect.width;
	var ny = Math.random()*rect.height;
	circle(nx, ny);
    }
};

var move = function(){
    window.cancelAnimationFrame(requestId);
    var xVel = 1;
    var yVel = 1;
    for(let i = 0; i < pic.children.length; i++){
	let c = pic.children[i];
	console.log(c);
	var xcor = parseInt(c.getAttribute("cx"));
	var ycor = parseInt(c.getAttribute("cy"));
	console.log("Coordinates", xcor, ycor);
	console.log("Velocity", xVel, yVel);
	if(xcor < 0 || xcor > 495){
	    xVel = xVel*-1;
	}
	if(ycor < 0 || ycor > 495){
	    yVel = yVel*-1;
	}
	console.log("R2Vel", xVel, yVel);
	xcor += xVel;
	ycor += yVel;
	console.log("R2Coor", xcor, ycor);
	c.setAttribute("cx", parseInt(xcor));
	c.setAttribute("cy", parseInt(ycor));
    }
    requestId = window.requestAnimationFrame(move);
};

//CLEAR BUTTON
var clearB = document.getElementById("but_clear");
clearB.addEventListener('click', function(e){
    window.cancelAnimationFrame(requestId);
    while(pic.lastChild){
	pic.removeChild(pic.lastChild);
    }
});

//? BUTTON
var questB = document.getElementById("but_?");
questB.addEventListener('click', function(e){
    var quest = function(e, c){
    }
    while(pic.lastChild){
	//quest(pic.lastChild);
    }
});

//MOVE BUTTON
var moveB = document.getElementById("but_move");
moveB.addEventListener('click', move);
