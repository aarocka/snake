var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");

//draws a black background
//draws a black background
//Ok wtf this function works

function drawBackground() {
  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}
//set's up the player
var player = {
  x: 200,
  y: 200,
  vx: 0, //current velocity in x and y direction
  vy: 0,
  speed: 5, //This is the player speed and it determines the vx and vy
  size: 10,
  color: 'white',
  //This draws the player square
  draw: function() {
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.size, this.size);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  },
  //This handles the colision with the walls if forced into easy mode
  colision: function() {
    if (player.y + player.vy > canvas.height || player.y + player.vy < 0) {
      this.vy = -this.vy;
    }
    if (player.x + player.vx > canvas.width || player.x + player.vx < 0) {
      this.vx = -this.vx;
    }
  },
  //This is what actually moves the player according to the current velocity. This function is now depreciated and is scheduled for deletion i guess
  move: function() {
    player.x += player.vx;
    player.y += player.vy;
  },
  //This is an input handler or some shit I guess
  input: function() {
    //Deals with keydown
    window.addEventListener('keydown', function(e) {
      e.repeat
      if (e.keyCode === 83) {
        console.log('player pressed s');
        player.move_down();
      }
      if (e.keyCode === 87) {
        console.log('player pressed w');
        player.move_up();
      }
      if (e.keyCode === 65) {
        console.log('player pressed a');
        player.move_left();
      }
      if (e.keyCode === 68) {
        console.log('player pressed d');
        player.move_right();
      }
    });
    //Deals with key up events
    window.addEventListener('keyup', function(e) {
      if (e.keyCode === 83) {
        player.vx = 0;
        player.vy = 0;
      }
      if (e.keyCode === 87) {}
      if (e.keyCode === 65) {}
      if (e.keyCode === 68) {}
    });
  },
  //The following functions are called by the input handler to move the player left and right
  move_left: function() {
    this.vx = -this.speed;
    this.vy = 0;
    this.x += this.vx;
    this.y += this.vy;
  },
  move_right: function() {
    this.vx = this.speed;
    this.vy = 0;
    this.x += this.vx;
    this.y += this.vy;
  },
  move_up: function() {
    this.vx = 0;
    this.vy = -this.speed;
    this.x += this.vx;
    this.y += this.vy;
  },
  move_down: function() {
    this.vx = 0;
    this.vy = this.speed;
    this.x += this.vx;
    this.y += this.vy;
  },
  //handles the player eating a square or something
  eat: function() {}
};

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBackground();
  player.draw();
  player.input();
  player.colision();
  window.requestAnimationFrame(draw);
}

/* char codes for future refrence
87 = w
83 = s
65 = a
68 = d
38 = up
40 = down
37 = left
39 = right
*/
