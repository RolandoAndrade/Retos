const WALL_COLOR="#48ff72";
const START_COLOR="#ff484b";
const END_COLOR="#62f0ff";
const FLOOR_COLOR="#333333";

class Node
{
    constructor(x,y)
    {
        this.number=0;
        this.square=new Rectangle(x*SQUARE_WIDTH+SQUARE_BORDER,y*SQUARE_WIDTH+SQUARE_BORDER,
            SQUARE_WIDTH-2*SQUARE_BORDER, SQUARE_WIDTH-2*SQUARE_BORDER, this.getColor());
        this.draw();
    }

    draw()
    {
        this.square.draw();
    }

    print()
    {
        return 0;
    }

    isAWall()
    {
        return false;
    }

    getColor()
    {
        return FLOOR_COLOR;
    }
}

class WallNode extends Node
{
    constructor(x,y)
    {
        super(x,y);
        this.square=new Rectangle(x*SQUARE_WIDTH,y*SQUARE_WIDTH, SQUARE_WIDTH, SQUARE_WIDTH, WALL_COLOR);
        this.draw();
    }

    print()
    {
        return 1;
    }

    isAWall()
    {
        return true;
    }
}

class StartNode extends Node
{
    print()
    {
        return 2;
    }

    getColor()
    {
        return START_COLOR;
    }
}

class EndNode extends Node
{
    getColor()
    {
        return END_COLOR;
    }

    print()
    {
        return 3;
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
