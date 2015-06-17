var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");

//draw the background
var background = ctx;
background.rect(0,0,640,480);
background.fill();

//draw some shiteee
var drawSquare = function (size, posX, posY) {
	var rect = ctx;
	rect.fillStyle = "white";
	rect.fillRect(posX,posY, posX + size,posY + size);
}

drawSquare(10,25,25);
drawSquare(10,50,100);
