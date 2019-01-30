let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let board=new Board();
Board.draw();


function findPath()
{
    let startNode = document.getElementById("startNode").value;
    let endNode = document.getElementById("endNode").value;
    Board.graph.findPath(startNode,endNode);
}
