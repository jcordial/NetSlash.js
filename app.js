/**
 * @author Jason Cordial
 */

var canvas;
var ctx;

var x = 0;
var y = 0;
var speed = 5;


function loaded() {
	canvas = document.getElementById("canvas");
	ctx = canvas.getContext('2d');

	ctx.fillStyle = "#FF0000";

	document.addEventListener("keydown", keyDownEvent);
	
	draw();

	console.log("test");
}

var keyDownEvent = function(e) {
	console.log(e.keyIdentifier);
	if(e.keyIdentifier == "Right") x+=speed;
	if(e.keyIdentifier == "Left") x-=speed;
	if(e.keyIdentifier == "Up") y-=speed;
	if(e.keyIdentifier == "Down") y+=speed;
};

var draw = function() {
	clear(ctx,"#fff");
	ctx.fillRect(x, y, 80, 80);
	setTimeout(draw,100)
};

function clear(context, color)
{
    var tmp = context.fillStyle;
    context.fillStyle = color;
    context.fillRect(0, 0, context.canvas.width, context.canvas.height);
    context.fillStyle = tmp;
}