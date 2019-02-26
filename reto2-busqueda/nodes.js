const WALL_COLOR="#48ff72";
const START_COLOR="#ff484b";
const PATH_COLOR="#ff68fb";
const END_COLOR="#62f0ff";
const FLOOR_COLOR="#333333";

class Node
{
    constructor(x,y)
    {
        this.number=-1;
        this.square=new Rectangle(x*SQUARE_WIDTH+SQUARE_BORDER,y*SQUARE_WIDTH+SQUARE_BORDER,
            SQUARE_WIDTH-2*SQUARE_BORDER, SQUARE_WIDTH-2*SQUARE_BORDER, this.getColor());
        this.draw();
    }

    draw()
    {
        this.square.draw();
    }

    getNumber()
    {
        return this.number;
    }

    isAWall()
    {
        return false;
    }

    isStart()
    {
        return false;
    }

    isEnd()
    {
        return false;
    }

    getColor()
    {
        return FLOOR_COLOR;
    }

    isEmpty()
    {
        return this.number===-1;
    }

    paint()
    {
        this.square.color=PATH_COLOR;
        this.draw();
    }
}

class WallNode extends Node
{
    constructor(x,y)
    {
        super(x,y);
        this.square=new Rectangle(x*SQUARE_WIDTH,y*SQUARE_WIDTH, SQUARE_WIDTH, SQUARE_WIDTH, WALL_COLOR);
        this.number=-2;
        this.draw();
    }


    isAWall()
    {
        return true;
    }
}

class StartNode extends Node
{
    constructor(x,y)
    {
        super(x,y);
        this.number=0;
    }

    getColor()
    {
        return START_COLOR;
    }

    isStart()
    {
        return true;
    }
}

class EndNode extends Node
{
    constructor(x,y)
    {
        super(x,y);
        this.number=-3;
    }

    getNumber()
    {
        return this.number;
    }

    isEnd()
    {
        return true;
    }

    getColor()
    {
        return END_COLOR;
    }
}

class Fabric
{
    static createNode(value, x, y)
    {
        switch (value)
        {
            case 0:
                return new Node(x,y);
            case 1:
                return new WallNode(x,y);
            case 2:
                return new StartNode(x,y);
            case 3:
                return new EndNode(x,y);
        }
    }
}
