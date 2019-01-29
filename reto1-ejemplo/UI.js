class Board
{
    constructor()
    {
        Board.background=new Rectangle(0,0,400,400,"#9c79ff");
        Board.nodes=[new NodeCircle(0), new NodeCircle(1)];
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
        if(this.nodes)
        {
            for(let i=0;i<Board.nodes.length;i++)
            {
                if(Board.nodes[i].contains(x,y))
                {
                   Board.selection=Board.nodes[i];
                }
            }
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
        for(let i=0;i<Board.nodes.length;i++)
            Board.nodes[i].draw();
    }
}