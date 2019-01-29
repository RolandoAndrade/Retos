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
class Graph
{
    constructor(matrix)
    {
        this.nodes=[];
        for(let i=0;i<matrix.length;i++)
        {
            let n=[];
            for(let j=0;j<matrix.length;j++)
            {
                if(matrix[i][j]===1)
                {
                    n.push(j);
                }
            }
            let node = new NodeCircle(i);
            node.setNodes(n);
            this.nodes.push(node);
        }
    }

    selectANode(x,y)
    {
        for(let i=0;i<this.nodes.length;i++)
        {
            if(this.nodes[i].contains(x,y))
            {
                return this.nodes[i];
            }
        }
        return undefined;
    }

    draw()
    {
        for(let i=0;i<this.nodes.length;i++)
        {
            this.nodes[i].draw();
        }
    }
}

const NUMBER_OF_CITIES=13;

class NodeCircle
{
    constructor(index)
    {
        this.tag=new TagNode(index,100*Math.cos(2*Math.PI*index/NUMBER_OF_CITIES)+
            200,100*Math.sin(2*Math.PI*index/NUMBER_OF_CITIES)+205,15);
        this.body=new Circle(100*Math.cos(2*Math.PI*index/NUMBER_OF_CITIES)+
            200,100*Math.sin(2*Math.PI*index/NUMBER_OF_CITIES)+200,20,"#c392ff");
    }


    setNodes(nodes)
    {
        this.nodes=nodes;
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