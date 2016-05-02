var myCanvas = document.getElementById("myCanvas");
var ctx=myCanvas.getContext("2d");
ctx.beginPath();

ctx.arc(500,250,195,0,180);// circulo más grande
ctx.fillStyle = "rgb(35, 31, 32)";//color
ctx.fill();

ctx.fillStyle = "rgba(157, 162, 116, 1.0)";
ctx.beginPath();
ctx.moveTo(686,250);
ctx.arc(500,250,186,0,180);// circulo de color verde
ctx.fill();

ctx.fillStyle = "rgba(255, 255, 255, 1.0)";
ctx.beginPath();
ctx.moveTo(666,250);
ctx.arc(500,250,166,0,180);// circulo de color blanco
ctx.fill();

ctx.fillStyle = "rgba(214, 33, 50, 1.0)";
ctx.beginPath();
ctx.moveTo(646,250);
ctx.arc(500,250,146,0,180);// circulo de color rojo
ctx.fill();

//Texto LUCKY STRIKE.
ctx.fillStyle = "black";
ctx.font = '75px Futura';
ctx.textBaseline = 'bottom';
ctx.fillText('LUCKY', 380, 265);//Posición y texto de la primera palabra
ctx.fillText('STRIKE', 375, 335);//Posición y texto de la segunda palabra
