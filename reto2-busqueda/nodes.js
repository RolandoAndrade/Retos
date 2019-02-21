const WALL_COLOR="#48ff72";
const FLOOR_COLOR="#333333";

class Node
{
    constructor(x,y)
    {
        this.number=0;
        this.square=new Rectangle(x*SQUARE_WIDTH+SQUARE_BORDER,y*SQUARE_WIDTH+SQUARE_BORDER,
            SQUARE_WIDTH-2*SQUARE_BORDER, SQUARE_WIDTH-2*SQUARE_BORDER, FLOOR_COLOR);
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
