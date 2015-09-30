function Ball()
{
	this.ballWidth = 20;
	this.ballHeight = 20;
	this.posX = (window.innerWidth/2)-(this.ballWidth/2);
	this.posY = (window.innerHeight/2)-(this.ballHeight/2);
	this.velX = 7;
	this.velY = 7;
	this.move = false;
	this.scorePlayer1 = 0;
	this.scorePlayer2 = 0;
}

Ball.prototype.render = function(ctx)
{
	ctx.save();

	ctx.fillStyle = rgb(255,255,255);
	ctx.fillRect(this.posX,this.posY,this.ballWidth,this.ballHeight);

	ctx.font = '100pt Stencil';
	ctx.fillText(this.scorePlayer1,window.innerWidth/4,100);
	ctx.fillText(this.scorePlayer2,window.innerWidth/4*3,100);

	ctx.restore();
}

Ball.prototype.update = function()
{
	this.posX += this.velX;
	this.posY += this.velY;
	if(this.posX <= 0)
	{
		this.posX = (window.innerWidth/2)-(this.ballWidth/2);
		this.posY = (window.innerHeight/2)-(this.ballHeight/2);
		this.move = false;
		this.velX = 7;
		this.velY = 7;
		this.scorePlayer2++;
	}
	if(this.posX >= window.innerWidth)
	{
		this.posX = (window.innerWidth/2)-(this.ballWidth/2);
		this.posY = (window.innerHeight/2)-(this.ballHeight/2);
		this.move = false;
		this.velX = -7;
		this.velY = 7;
		this.scorePlayer1++;
	}
	if(this.posY >= window.innerHeight || this.posY <= 0)
	{
		this.velY *= -1;
	}
}

//The parameter e is the object you want to check is colliding with the player
Ball.prototype.checkCollision = function(Paddle)
{
	var collides=false;
	//do the two bounding boxes overlap?
	if ((this.posX < Paddle.posX + Paddle.paddleWidth) &&
	(this.posX + this.ballWidth > Paddle.posX) &&
	(this.posY + this.ballHeight > Paddle.posY) &&
	(this.posY < Paddle.posY + Paddle.paddleHeight))
	{	
		console.log("hit");
		collides = true;
		this.velX *= -1;
	}
		
	return collides;
};