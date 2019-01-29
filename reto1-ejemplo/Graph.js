class TagNode
{
    constructor(text,x,y, fontSize)
    {
        this.text = text;
        this.fontSize = fontSize;
        this.x=x;
        this.y=y;
    }

    draw()
    {
        ctx.font = this.fontSize+'px Arial, sans-serif';
        ctx.textAlign="center";
        ctx.fillStyle="#fff";
        ctx.fillText(this.text,this.x,this.y);
    }

    move(x,y)
    {
        this.x=x;
        this.y=y;
    }

}

class NodeCircle
{
    constructor(index)
    {
        this.tag=new TagNode(index,50*index+50,50*index+55,15);
        this.body=new Circle(50*index+50,50*index+50,20,"#c392ff");
    }

    contains(x,y)
    {
        return this.body.contains(x,y);
    }

    draw()
    {
        this.body.draw();
        this.tag.draw();
    }

    move(x,y)
    {
        this.body.move(x,y);
        this.tag.move(x,y+5);
    }
}