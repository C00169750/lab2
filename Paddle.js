function Paddle(startPosX, startPosY)
{
	this.paddleWidth = 20;
	this.paddleHeight = 100;
	this.posX = startPosX;
	this.posY = startPosY;
	this.velY = 10;
	this.boolMoveUp = false;
	this.boolMoveDown = false;
}

Paddle.prototype.render = function(ctx)
{
	//parameters are (r,g,b)
	ctx.fillStyle = rgb(255,255,255);
	//parameters are (x,y,w,h)
	ctx.fillRect(this.posX,this.posY,this.paddleWidth,this.paddleHeight);
}

Paddle.prototype.update = function()
{
	this.moveUp();
	this.moveDown();
}

Paddle.prototype.moveUp = function()
{
	if(this.boolMoveUp == true)
	{
		this.posY += this.velY;
	}
}

Paddle.prototype.moveDown = function()
{
	if(this.boolMoveDown == true)
	{
		this.posY -= this.velY;
	}
}