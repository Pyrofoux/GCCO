class Sparckle extends Entity
{
    constructor(x, y, width, height, targetX, targetY)
    {
        super(x,y,width,height, true);
        this.targetX = targetX;
        this.targetY = targetY;
    }
    draw(ctx)
    {

        if(this.y < this.targetY)
            this.y ++;
        else if(this.y > this.targetY)
            this.y--;
        else if(this.x < this.targetX)
            this.x++;
        else if(this.x > this.targetX)
            this.x--;

        ctx.fillStyle = "red";
        ctx.lineCap = "round";
        ctx.fillRect(this.x - this.width/2, this.y-this.height/2,this.width, this.height);
        ctx.stroke();
    }
}