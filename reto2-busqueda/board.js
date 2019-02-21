class Board
{
    constructor()
    {
        this.background=new Rectangle(0,0,WIDTH, HEIGHT, "#48ff72");
        this.background.draw();
        this.board=[];
        this.isDrawing=false;
        this.isDeleting=false;
        this.initBoard();
        let me=this;
        canvas.onmousedown = function (event) {Board.mouseDown(event, me)};
        canvas.onmousemove = function (event) {Board.mouseMove(event, me)}
        canvas.onmouseup = function (event) {Board.mouseUp(event, me)};
    }

    initBoard()
    {
        for(let i=0;i<20;i++)
        {
            let row=[];
            for(let j=0;j<20;j++)
            {
                row.push(new Node(i,j));
                row[j].draw();
            }
            this.board.push(row);
        }
    }

    static mouseDown(event, board)
    {
        let x=parseInt((event.clientX - rect.left)/SQUARE_WIDTH);
        let y=parseInt((event.clientY - rect.top)/SQUARE_WIDTH);
        if(board.board[x][y].isAWall())
        {
            board.board[x][y]=new Node(x,y);
            board.isDeleting=true;
        }
        else
        {
            board.board[x][y]=new WallNode(x,y);
            board.isDrawing=true;
        }
    }

    static mouseMove(event, board)
    {
        let x=parseInt((event.clientX - rect.left)/SQUARE_WIDTH);
        let y=parseInt((event.clientY - rect.top)/SQUARE_WIDTH);
        if(board.isDrawing)
        {
            board.board[x][y]=new WallNode(x,y);
        }
        else if(board.isDeleting)
        {
            board.board[x][y]=new Node(x,y);
        }
    }

    static mouseUp(event,board)
    {
        board.isDrawing=false;
        board.isDeleting=false;
    }


}