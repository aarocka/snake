var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");

//draws a black background

//draws a black background
//Ok wtf this function works
function consoleJunk (){
	console.log("Hello there. It seems you've stumbled upon the JavaScript console.");
	console.log("This is awesome because if you type help() you can see a list of commands");
}
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
	},
	colision : function(){
		if (player.y + player.vy > canvas.height || player.y + player.vy < 0) {
  			player.vy = -player.vy;
		}
		if (player.x + player.vx > canvas.width || player.x + player.vx < 0) {
  			player.vx = -player.vx;
		}
	},
	move : function(){
		player.x += player.vx;
		player.y += player.vy;
	}
};

function draw(){
	ctx.clearRect(0,0,canvas.width,canvas.height);
	drawBackground();
	player.draw();
	player.move();
	player.colision();
	window.requestAnimationFrame(draw);
};

draw();