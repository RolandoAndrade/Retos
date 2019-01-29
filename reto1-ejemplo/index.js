let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let board=new Board();
for(let i=0;i<5;i++)
{
    Board.draw();
}
