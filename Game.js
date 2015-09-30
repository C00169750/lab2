var game;

function Game()
{
	this.screenWidth = window.innerWidth;
	this.screenHeight = window.innerHeight;
	this.ball = new Ball();
	this.paddle1 = new Paddle(this.screenWidth-50, window.innerHeight/2-(100/2));
	this.paddle2 = new Paddle(50, window.innerHeight/2-(100/2));
}

Game.prototype.initCanvas = function()
{
	this.canvas = document.createElement('canvas');
	
	this.ctx = this.canvas.getContext('2d')

	document.body.appendChild(this.canvas);

	this.canvas.width = this.screenWidth;
	this.canvas.height = this.screenHeight;
}

Game.prototype.draw = function()
{
	this.ball.render(this.ctx);
	this.paddle1.render(this.ctx);
	this.paddle2.render(this.ctx);
}

Game.prototype.gameLoop = function()
{
	game.ctx.clearRect(0,0,game.canvas.width,game.canvas.height);
	game.draw();
	window.requestAnimationFrame(game.gameLoop);

	if(game.ball.move == true)
	{
		game.ball.update();
		game.paddle1.update();
		game.paddle2.update();
	}
	if(game.ball.move == false)
	{
		game.paddle1.posX = window.innerWidth-50;
		game.paddle1.posY = window.innerHeight/2-(100/2);

		game.paddle2.posX = 50;
		game.paddle2.posY = window.innerHeight/2-(100/2);
	}
	game.ball.checkCollision(game.paddle1);
	game.ball.checkCollision(game.paddle2);
}

function main()
{
	game = new Game();

	console.log("Insert pong message here");

	game.initCanvas();

	document.addEventListener("keydown", move);
	document.addEventListener("keyup", stop);

	game.gameLoop();
}

function move(e)
{
	//Paddle 1
	if(e.keyCode==38)
		game.paddle1.boolMoveDown = true;
	if(e.keyCode==40)
		game.paddle1.boolMoveUp = true;

	//Paddle 2
	if(e.keyCode==87)
		game.paddle2.boolMoveDown = true;
	if(e.keyCode==83)
		game.paddle2.boolMoveUp = true;

	//Ball
	if(e.keyCode==32)
		game.ball.move = true;
}

function stop(e)
{
	//Paddle 1
	if(e.keyCode==38)
		game.paddle1.boolMoveDown = false;
	if(e.keyCode==40)
		game.paddle1.boolMoveUp = false;

	//Paddle 2
	if(e.keyCode==87)
		game.paddle2.boolMoveDown = false;
	if(e.keyCode==83)
		game.paddle2.boolMoveUp = false;
}

//function for rgb for convenience
function rgb(r, g, b) 
{ 
	return 'rgb('+clamp(Math.round(r),0,255)+', '+clamp(Math.round(g),0,255)+', '+clamp(Math.round(b),0,255)+')';
}

//helper function
function clamp(value, min, max) 
{ 
	if(max<min) 
	{ 
		var temp = min; 
		min = max; 
		max = temp; 
	}
	return Math.max(min, Math.min(value, max)); 
}