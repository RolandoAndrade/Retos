let matrix=[
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,2,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,1,0,1,1,1,1,1,0,1,1,1,1,1,0,1,0,1],
    [1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1],
    [1,0,1,0,0,1,0,0,0,1,0,1,1,1,1,1,0,1,0,1],
    [1,0,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1],
    [1,0,1,3,1,0,0,0,1,1,0,1,1,1,1,1,0,1,0,1],
    [1,0,1,1,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1],
    [1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0,1,0,1],
    [1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1],
    [1,0,1,1,1,1,1,0,0,0,1,1,0,0,1,0,0,1,0,1],
    [1,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,1],
    [1,0,1,1,1,0,1,1,1,1,1,1,0,0,0,1,0,1,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1],
    [1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,0,0,0,0,1],
    [1,0,1,1,0,1,1,0,0,0,0,1,1,1,1,0,0,1,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
];



class Board
{
    constructor()
    {
        this.background=new Rectangle(0,0,WIDTH, HEIGHT, "#48ff72");
        this.background.draw();
        this.board=[];
        this.isDrawing=false;
        this.isDeleting=false;

        this.initBoard(matrix);
        let me=this;
        canvas.onmousedown = function (event) {Board.mouseDown(event, me)};
        canvas.onmousemove = function (event) {Board.mouseMove(event, me)};
        canvas.onmouseup = function (event) {Board.mouseUp(event, me)};
        document.onkeydown = function (event) {Board.keyDown(event, me)};
    }

    initBoard(matrix)
    {
        for(let i=0;i<DIMENSIONS;i++)
        {
            let row=[];
            for(let j=0;j<DIMENSIONS;j++)
            {
                if (matrix)
                {
                    row.push(Fabric.createNode(matrix[j][i],i,j));
                }
                else
                {
                    row.push(new Node(i,j));
                }

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

    static mouseUp(event, board)
    {
        board.isDrawing=false;
        board.isDeleting=false;
    }


    static print()
    {
        for(let i=0;i<20;i++)
        {
            let s="[";
            for(let j=0;j<20;j++)
            {
                s+=board.board[i][j].print()+",";
            }
            s+="]";
            console.log(s);
        }
    }
    static keyDown(event,board)
    {




    }



}