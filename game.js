var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");

//draws a black background

//draws a black background
function drawBackground(){
	ctx.fillStyle = '#000'
	ctx.fillRect(0,0,canvas.width,canvas.height);
};

//Ok wtf this function works
/*
function drawBackground(){
	ctx.fillStyle = '#000'
	ctx.fillRect(0,0,canvas.width,canvas.height);
};
*/
//yet this one doesn't
/*
function drawBackground(){
	ctx.rect(0,0,canvas.width,canvas.height);
	ctx.fillStyle = '#FFF'
	ctx.fill();
};
*/


//set's up the player
var player = {
	x:0,
	y:0,
	vx: 5,
	vy: 2,
	size:10,
	color:'blue',
	draw : function(){
		ctx.rect(this.x, this.y, this.size, this.size);
		ctx.fillStyle = this.color;
		ctx.fill();
	}
};
function draw(){
	ctx.clearRect(0,0,canvas.width,canvas.height);
	ctx.fillRect(0, 0, 640, 480);
	player.draw();
	player.x += player.vx;
	player.y += player.vy;
	window.requestAnimationFrame(draw);
};
drawBackground();
player.draw();