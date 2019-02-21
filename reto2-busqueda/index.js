let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let rect=canvas.getBoundingClientRect();
const WIDTH=600;
const HEIGHT=600;
let DIMENSIONS=20;
let SQUARE_WIDTH=WIDTH/DIMENSIONS;
let SQUARE_BORDER=1;
let drawing=false;

let board=[];



new Board();



document.onkeydown = function (event)
{
    let b=[];
    for (let i = 0; i < 20; i++)
    {
        let r=[];
        for (let j = 0; j < 20; j++)
        {
            r.push(board[i][j].print());
        }
        b.push(r);
    }
    console.table(b);
};