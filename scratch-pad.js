var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");

//draw the background
var background = ctx;
background.rect(0, 0, 640, 480);
background.fill();

//draw a square
var drawSquare = function (size, posX, posY, color) {
	var rect = ctx;
	rect.fillStyle = color;
	rect.fillRect(posX, posY, size, size);
	return true;
};

var drawCheckerboard = function () {
	var fourSq = function (posX, posY) {
		// draw rect 1
		var rect1 = ctx;
		rect1.fillStyle = 'white';
		rect1.fillRect(0 + posX, 0 + posY, 10, 10);
		// draw rect 2
		var rect2 = ctx;
		rect2.fillStyle = 'black';
		rect2.fillRect(0 + posX, 10 + posY, 10, 10);
		// draw rect 4
		var rect3 = ctx;
		rect3.fillStyle = 'white';
		rect3.fillRect(10 + posX, 10 + posY, 10, 10);
		// draw rect 3
		var rect4 = ctx;
		rect4.fillStyle = 'black';
		rect4.fillRect(10 + posX, 0 + posY, 10, 10);
	};
	//draw checker board
	for (var y = 0; y <= 480; y = y + 20) {
		for (var x = 0; x < 640; x = x + 20) {
			fourSq(x, y);
		}
	}
};

//moves a square across the screen
var cat = function () {
	for (var i = 0; i < 640; i++) {
	//draws a square
	drawSquare(10, i, 10, 'white')
	//there should be a delay in here or something
	
	//clear the square
	ctx.clearRect(i, 10, 10, 10);
	//replace the black background
	drawSquare(10,i,10, 'black');
	return true;
	}
};

var help = function () {
	console.log('this is a thingy about things');
	console.log('fuckers are fuckers');

};