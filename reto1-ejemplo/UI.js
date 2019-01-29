let cities=[[0,1,0,0,0,0,0,0,0,0,1,0,0],
            [1,0,1,0,0,0,0,0,0,0,0,1,0],
            [0,1,0,1,0,0,0,0,0,0,0,0,0],
            [0,0,1,0,1,1,1,0,0,0,0,0,0],
            [0,0,0,1,0,0,0,0,0,0,0,0,0],
            [0,0,0,1,0,0,1,1,1,0,0,0,0],
            [0,0,0,1,0,1,0,0,1,1,0,0,0],
            [0,0,0,0,0,1,0,0,0,1,0,0,0],
            [0,0,0,0,0,1,1,0,0,1,0,0,0],
            [0,0,0,0,0,0,1,1,1,0,1,0,0],
            [1,0,0,0,0,0,0,0,0,1,0,0,1],
            [0,1,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,1,0,0]];

class Board
{
    constructor()
    {
        Board.background=new Rectangle(0,0,400,400,"#9c79ff");
        Board.graph=new Graph(cities);
        Board.selection=undefined;
        Board.rect=canvas.getBoundingClientRect();
        canvas.onmousedown = function (event) {Board.mouseDown(event)};
        canvas.onmousemove = function (event) {Board.mouseMove(event)};
        canvas.onmouseup = function (event) {Board.mouseUp(event)};
    }

    static mouseDown(event)
    {

        let x=(event.clientX - Board.rect.left);
        let y=(event.clientY - Board.rect.top);
        try
        {
            Board.selection=Board.graph.selectANode(x,y);
        }
        catch (e)
        {

        }
    }

    static mouseMove(event)
    {
        if(Board.selection)
        {
            let x=(event.clientX - Board.rect.left);
            let y=(event.clientY - Board.rect.top);
            Board.selection.move(x,y);
            Board.draw();
        }
    }

    static mouseUp(event)
    {
        Board.selection=undefined;
        Board.draw();
    }

    static draw()
    {
        Board.background.draw();
        Board.graph.draw();
    }
}