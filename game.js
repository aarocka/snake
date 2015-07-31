var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");

//draws a black background

//draws a black background
//Ok wtf this function works

function drawBackground(){
	ctx.fillStyle = '#000'
	ctx.fillRect(0,0,canvas.width,canvas.height);
};

//yet this one doesn't
/*
function drawBackground(){
	ctx.rect(0,0,canvas.width,canvas.height);
	ctx.fillStyle = '#000'
	ctx.fill();
};
*/
//JS Y U NO WORK!!!

//set's up the player
var player = {
	x:0,
	y:0,
	vx: 5,
	vy: 2,
	size:10,
	color:'white',
	draw : function(){
		ctx.rect(this.x, this.y, this.size, this.size);
		ctx.fillStyle = this.color;
		ctx.fill();
	}
};

function draw(){
	ctx.clearRect(0,0,canvas.width,canvas.height);
	drawBackground();
	player.draw();
	player.x += player.vx;
	player.y += player.vy;
	if (player.y + player.vy > canvas.height || player.y + player.vy < 0) {
  		player.vy = -player.vy;
	}
	if (player.x + player.vx > canvas.width || player.x + player.vx < 0) {
  		player.vx = -player.vx;
	}
	window.requestAnimationFrame(draw);
};

draw();