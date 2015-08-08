var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");

//draws a black background
//draws a black background
//Ok wtf this function works

function drawBackground(){
	ctx.fillStyle = '#000';
	ctx.fillRect(0,0,canvas.width,canvas.height);
}
//set's up the player
var player = {
	x:100,
	y:100,
	vx: 0,
	vy: 0,
	size:10,
	color:'white',
	draw : function(){
		ctx.beginPath();
		ctx.rect(this.x, this.y, this.size, this.size);
		ctx.fillStyle = this.color;
		ctx.fill();
		ctx.closePath();
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
	ctx.clearRect(0,0,canvas.width, canvas.height);
	drawBackground();
	player.draw();
	player.move();
	player.colision();
	window.requestAnimationFrame(draw);
}

/* char codes
87 = w
83 = s
65 = a
68 = d
38 = up
40 = down
37 = left
39 = right
*/
window.addEventListener('keydown', function(e){
	//console.log(e.keyCode);
	
	if (e.keyCode === 83) {
		console.log('player pressed s');
		player.vx=0;
		player.vy=5;
		draw();
	}
	if (e.keyCode === 87) {
		console.log('player pressed w');
		player.vx = 0;
		player.vy = -5;
		draw();
	}
	if (e.keyCode === 65){
		console.log('player pressed a');
		player.vx = -5;
		player.vy = 0;
		draw();
	}
	if (e.keyCode === 68) {
		console.log('player pressed d');
		player.vx = 5;
		player.vy = 0;
		draw();	
	}
});
window.addEventListener('keyup', function(e){
	if (e.keyCode === 83) {
		player.vx = 0;
		player.vy = 0;
	}
	if (e.keyCode === 87) {
		player.vx = 0;
		player.vy = 0;
	}
	if (e.keyCode === 65){
		player.vx = 0;
		player.vy = 0;
	}
	if (e.keyCode === 68) {
		player.vx = 0;
		player.vy = 0;
	}
});