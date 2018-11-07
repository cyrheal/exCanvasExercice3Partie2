var c = document.getElementById( "mon_canvas" );
var ctx = c.getContext("2d");

ctx.fillStyle = "#976f0f"; //bras
ctx.fillRect(80,100,310,40);

ctx.fillStyle = "#976f0f"; //corps
ctx.fillRect(160,140,150,160);

ctx.fillStyle = "#976f0f"; //pied gauche
ctx.fillRect(160,300,50,40);

ctx.fillStyle = "#976f0f";  //pied droit
ctx.fillRect(260,300,50,40);

ctx.beginPath();  //tête
ctx.arc(235,70,50,0,Math.PI*2,true);
ctx.fillStyle = "#976f0f";
ctx.fill();

ctx.beginPath(); //main gauche
ctx.fillStyle = "#976f0f";
ctx.moveTo(80,100);
ctx.quadraticCurveTo(50,120,80,140);
ctx.fill();

ctx.beginPath(); //main droite
ctx.fillStyle = "#976f0f";
ctx.moveTo(390,100);
ctx.quadraticCurveTo(420,120,390,140);
ctx.fill();

ctx.beginPath(); //pied gauche arrondi
ctx.fillStyle = "#976f0f";
ctx.moveTo(160,340);
ctx.quadraticCurveTo(185,380,210,340);
ctx.fill()

ctx.beginPath(); //pied droit arrondi
ctx.fillStyle = "#976f0f";
ctx.moveTo(260,340);
ctx.quadraticCurveTo(285,380,310,340);
ctx.fill()

ctx.beginPath();  //bouton
ctx.arc(235,150,10,0,Math.PI*2,true);
ctx.fillStyle = "#813B59";
ctx.fill();

ctx.beginPath();  //bouton
ctx.arc(235,200,10,0,Math.PI*2,true);
ctx.fillStyle = "#813B59";
ctx.fill();

ctx.beginPath(); // entre jambe
ctx.fillStyle = "white";
ctx.moveTo(210,300);
ctx.quadraticCurveTo(235,260,260,300);
ctx.fill()

ctx.beginPath();  //oeil gauche
ctx.arc(220,60,10,0,Math.PI*2,true);
ctx.fillStyle = "white";
ctx.fill();

ctx.beginPath();  //oeil droit
ctx.arc(250,60,10,0,Math.PI*2,true);
ctx.fillStyle = "white";
ctx.fill();

ctx.beginPath(); //lèvre inférieure
ctx.lineWidth = 2;
ctx.arc(235,80,20,0,Math.PI,false);
ctx.strokeStyle = "red";
ctx.stroke();

ctx.beginPath(); // lèvre supérieure
ctx.strokeStyle = "red";
ctx.moveTo(215,80);
ctx.quadraticCurveTo(220,100,255,80);
ctx.stroke();

ctx.beginPath(); // sourcil gauche
ctx.arc(250,45,10,0,Math.PI,true);
ctx.strokeStyle = "white";
ctx.stroke();

ctx.beginPath(); // sourcil droit
ctx.arc(220,45,10,0,Math.PI,true);
ctx.strokeStyle = "white";
ctx.stroke();
