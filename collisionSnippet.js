
//The parameter e is the object you want to check is colliding with the player.
checkCollision = function (e)
{
	var collides=false;
		
	//do the two bounding boxes overlap?
	if ((this.x < e.x + e.width) &&
	(this.x + this.width > e.x) &&
	(this.y + this.height > e.y) &&
	(this.y < e.y + e.height) )
	{			
		collides = true;		
	}
		
	return collides;
};

