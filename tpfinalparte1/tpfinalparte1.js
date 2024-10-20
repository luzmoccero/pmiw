//Comision 4
//Moccero Maria Luz 
//video: 

let pantalla = 1;
let imagenes = [];
let guiontxt;
let miFuente;


function preload() {
  miFuente = loadFont('data/dogica.ttf');
  
  for (let i = 1; i <= 4; i++) {
    imagenes[i] = loadImage('data/img' + i + '.jpeg');
  }
   guiontxt = loadStrings('data/guion.txt');
}

function setup() {
  createCanvas(640, 480);
  textFont(miFuente);
}

function draw() {
  background(220);
 

 
  
  if (pantalla == 1) {
    image(imagenes[1], 0, 0, width, height);
    fill(255);
    rect(150, 300, 100, 50);
    fill(0);
    textSize(15);
    text("START", 175, 330);
  }
  
 
 
  if (pantalla == 2) {
    image(imagenes[2], 0, 0, width, height);
    fill(255);
    rect(50, 300, 100, 50);
    rect(250, 300, 100, 50);
  fill(0);
    text("Botón 1", 65, 330);
    text("Botón 2", 265, 330);
  }
  
  if (pantalla == 3) {
    image(imagenes[3], 0, 0, width, height);
   
    text(guiontxt[2], 20, 400);
  }
  
  if (pantalla == 4) {
    image(imagenes[4], 0, 0, width, height);
  
    text("Esta es la pantalla 4", 100, 200);
    text(guiontxt[4], 20, 400);
  }
  fill(255);
  rect(580,450,20,20);
  fill(0);
  text(">");
  
 
    // Fondo para el texto
   fill(255, 95);
   noStroke();
   rect(0, 380, 640, 480);
    

  
}

function mousePressed() {
  if (pantalla == 1  && mouseX > 150 && mouseX < 250 && mouseY > 300 && mouseY < 350) {
    pantalla = 2;
  }
  if (pantalla == 2) {
    if (mouseX > 50 && mouseX < 150 && mouseY > 300 && mouseY < 350) {
      pantalla = 4;
    }
    if (mouseX > 250 && mouseX < 350 && mouseY > 300 && mouseY < 350) {
      pantalla = 3;
    }
  }

  
  
}
