let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
for(let i=0;i<5;i++)
{
    new Circle(50,50,15,"#ff5d5d","yellow",5).draw();
    new Circle(100,100,15,"#7d8cff","green",5).draw();
}
