class Rectangle
{
    constructor(x,y,width, height, color, borderColor, lineWidth)
    {
        this.x=x;
        this.y=y;
        this.w=width;
        this.h=height;
        this.color=color;
        this.borderColor=borderColor?borderColor:color;
        this.lineWidth=lineWidth?lineWidth:0;
    }
    draw()
    {
        ctx.fillStyle=this.color;
        ctx.borderColor=this.borderColor;
        ctx.lineWidth = this.lineWidth;
        ctx.strokeStyle = this.borderColor;
        ctx.stroke();
    }
}


class Circle
{
    constructor(x, y, radius, color, borderColor, lineWidth)
    {
        this.x=x;
        this.y=y;
        this.radius=radius;
        this.color=color;
        this.borderColor=borderColor?borderColor:color;
        this.lineWidth=lineWidth?lineWidth:0;
    }

    draw()
    {
        ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
            ctx.fillStyle = this.color;
        ctx.fill();
        ctx.lineWidth = this.lineWidth;
        ctx.strokeStyle = this.borderColor;
        ctx.stroke();
    }
}