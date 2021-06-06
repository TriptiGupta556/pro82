canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 10;
ctx.rect(180, 170, 430, 200);
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = 6;
ctx.arc(280, 250, 40 ,0 , 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 6;
ctx.arc(380, 250, 40 ,0 , 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 6;
ctx.arc(485, 250, 40 ,0 , 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "yellow";
ctx.lineWidth = 6;
ctx.arc(330, 290, 40 ,0 , 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "green";
ctx.lineWidth = 6;
ctx.arc(432, 290, 40 ,0 , 2 * Math.PI);
ctx.stroke();