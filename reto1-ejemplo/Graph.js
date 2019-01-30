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
        this.matrix=matrix;
        for(let i=0;i<matrix.length;i++)
            this.nodes.push(new NodeCircle(i));
        this.restartPath();
    }

    findPath(startNode, endNode)
    {
        try
        {
            this.restartPath();
            this.paintPath(this.search(this.nodes[startNode],this.nodes[endNode]));
            Board.draw();
        }
        catch (e)
        {
            alert("Datos incorrectos");
        }

    }

    restartPath()
    {
        for(let i=0;i<this.matrix.length;i++)
        {
            let n=[];
            for(let j=0;j<this.matrix.length;j++)
            {
                if(this.matrix[i][j]===1)
                {
                    n.push(j);
                }
            }
            this.nodes[i].setNodes(n,this.nodes);
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
            this.nodes[i].drawSides();
        }
        for(let i=0;i<this.nodes.length;i++)
        {
            this.nodes[i].draw();
        }
    }

    paintPath(path)
    {
        for(let i=0;i<path.length-1;i++)
        {
            path[i].paint(path[i+1]);
            path[i+1].paint(path[i]);
        }
    }

    search(startNode, endNode)
    {
        if(startNode.equals(endNode))
            return [endNode];
        let min=[];
        for(let i=0;i<startNode.sides.length;i++)
        {
            let ax=startNode.sides[i].b;
            if(!ax.visited)
            {
                startNode.visited=true;
                let s=[startNode].concat(this.search(this.nodes[ax.index],endNode));
                startNode.visited=false;
                if(s.length>1&&(min.length===0||min.length>s.length))
                    min=s;
                if(min.length===2)
                    return min;
            }
        }
        return min;
    }
}

const NUMBER_OF_CITIES=13;

class Side
{
    constructor(a,b)
    {
        this.a=a;
        this.b=b;
        this.color="#fff";
    }

    draw()
    {
        ctx.beginPath();
        ctx.moveTo(this.a.body.x,this.a.body.y);
        ctx.lineTo(this.b.body.x,this.b.body.y);
        ctx.strokeStyle = this.color;
        ctx.stroke();
    }

    colorPath()
    {
        this.color="#ff405f";
    }
}


class NodeCircle
{
    constructor(index)
    {
        this.index=index;
        this.tag=new TagNode(index,100*Math.cos(2*Math.PI*index/NUMBER_OF_CITIES)+
            200,100*Math.sin(2*Math.PI*index/NUMBER_OF_CITIES)+205,15);
        this.body=new Circle(100*Math.cos(2*Math.PI*index/NUMBER_OF_CITIES)+
            200,100*Math.sin(2*Math.PI*index/NUMBER_OF_CITIES)+200,20,"#c392ff");
        this.sides=[];
        this.visited=false;
    }


    setNodes(nodes, all)
    {
        this.sides=[];
        for(let i=0;i<nodes.length;i++)
        {
            this.sides.push(new Side(all[this.index],all[nodes[i]]))
        }
    }

    contains(x,y)
    {
        return this.body.contains(x,y);
    }

    drawSides()
    {
        for(let i=0;i<this.sides.length;i++)
        {
            this.sides[i].draw();
        }
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

    equals(node)
    {
        return this.index===node.index;
    }

    paint(bro)
    {
        for(let i=0;i<this.sides.length;i++)
        {
            if(this.sides[i].b.equals(bro))
            {
                this.sides[i].colorPath();
                break;
            }
        }
    }
}