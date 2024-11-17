let sonido;

let pantalla = 1;
let imagenes = [];
let guiontxt;
let miFuente;

function preload() {
  soundFormats('mp3');
  miFuente = loadFont('data/dogica.ttf');

 sonido = loadSound('/data/sonido.mp3');

  for (let i = 1; i <= 19; i++) {
    imagenes[i] = loadImage('data/img' + i + '.png');
  }
  guiontxt = loadStrings('data/guion.txt');
}

function setup() {
  createCanvas(640, 480);
  textFont(miFuente);
  
  sonido.setVolume(0.1);
  sonido.play();
  
}

function draw() {
  background(220);

  if (pantalla === 1) {
    p1();
  } else if (pantalla === 2) {
    p2();
  } else if (pantalla === 3) {
    p3();
  } else if (pantalla === 4) {
    p4();
  } else if (pantalla === 5) {
    pant5();
  } else if (pantalla === 6) {
    p6();
  } else if (pantalla === 7) {
    p7();
  } else if (pantalla === 8) {
    p8();
  } else if (pantalla === 9) {
    p9();
  } else if (pantalla === 10) {
    p10();
  } else if (pantalla === 11) {
    p11();
  } else if (pantalla === 12) {
    p12();
  } else if (pantalla === 13) {
    p13();
  } else if (pantalla === 14) {
    p14();
  } else if (pantalla === 15) {
    p15();
  } else if (pantalla === 16) {
    p16();
  } else if (pantalla === 17) {
    p17();
  } else if (pantalla === 18) {
    p18();
  } else if (pantalla === 19) {
    p19();
  } else if (pantalla === 20) {
    p20();
  } else if (pantalla === 21) {
    p21();
  } else if (pantalla === 22) {
    p22();
  }
}

// Pantalla 1
function p1() {
  image(imagenes[1], 0, 0, width, height);
  fill(255);
  rect(150, 300, 100, 50); // Botón "START"
  fill(0);
  textSize(13);
  text("START", 175, 330);
}

// Pantalla 2
function p2() {
  image(imagenes[2], 0, 0, width, height);
textSize(7);
  // Texto y recuadro
  fill(255, 95);
  noStroke();
  rect(20, 380, 600, 80);
  fill(0);
  text(guiontxt[0], 30, 390, 600);

  // Botón para pasar a la pantalla 3
  fill(255);
  rect(580, 450, 20, 20);
  fill(0);
  text(">", 585, 463);
}

// Pantalla 3
function p3() {
  image(imagenes[3], 0, 0, width, height);

  // Texto y recuadro
  fill(255, 95);
  rect(20, 380, 600, 80);
  fill(0);
  
  text(guiontxt[2], 30, 390,600); //el 600 es para que no supere el ancho de la pantalla

  // Botón para pasar a la pantalla 4
  fill(255);
  rect(580, 450, 20, 20);
  fill(0);
  text(">", 585, 463);
}

// Pantalla 4
function p4() {
  image(imagenes[4], 0, 0, width, height);

  // Texto y recuadro
  fill(255, 95);

  rect(20, 380, 600, 80);
  fill(0);

  text(guiontxt[4], 30, 390,600);

  // Botón "Ayudarlo"
  fill(255);
  rect(50, 420, 100, 30);
  fill(0);
  text("Ayudarlo", 65, 435);

  // Botón "Dejarlo"
  fill(255);
  rect(250, 420, 100, 30);
  fill(0);
  text("Dejarlo", 265, 435);
}

// Pantalla 5
function pant5() { // dejarlo
  image(imagenes[6], 0, 0, width, height);

  // Texto y recuadro
  fill(255, 95);
  rect(20, 380, 600, 80);
  fill(0);
  text(guiontxt[12], 30, 390,600);
  text(guiontxt[13], 30, 410,600);
  text(guiontxt[14], 30, 425,600);
  text(guiontxt[15], 30, 440,600);

  // agregar un boton para pasar d pantalla
  fill(255);
  rect(580, 450, 20, 20);
  fill(0);
  text(">", 585, 463);
}

function p6() { // AYUDARLO
  image(imagenes[5], 0, 0, width, height);

  // Texto y recuadro
  fill(255, 95);
  rect(20, 380, 600, 80);
  fill(0);
  text(guiontxt[6], 30, 390,600);
  text(guiontxt[7], 30, 410,600);
  text(guiontxt[8], 30, 425,600);
  text(guiontxt[9], 30, 440,600);
  text(guiontxt[10], 30, 455,600);

  //boton para pasar d pantalla
  fill(255);
  rect(580, 450, 20, 20);
  fill(0);
  text(">", 585, 463);
}


function p7() { 
  image(imagenes[7], 0, 0, width, height); 

  // Texto y recuadro
  fill(255, 95);
  rect(20, 380, 600, 80);
  fill(0);
  text(guiontxt[17], 30, 390,600);

  // Botón "Pelear"
  fill(255);
  rect(50, 420, 100, 30);
  fill(0);
  text("Pelear", 65, 435);

  // Botón "Huir"
  fill(255);
  rect(250, 420, 100, 30);
  fill(0);
  text("Huir", 265, 435);
}

function p8() { // (DECIDEN HUIR)
  image(imagenes[8], 0, 0, width, height);

  fill(255, 95);
  rect(20, 380, 600, 80);
  fill(0);
  text(guiontxt[19], 30, 390,600);
  text(guiontxt[20], 30, 410,600);

  // Botones
  fill(255);
  rect(50, 420, 100, 30);
  fill(0);
  text("Vengarse", 65, 435);

  fill(255);
  rect(250, 420, 100, 30);
  fill(0);
  text("Rendirse", 265, 435);
}

function p9() { // (DECIDEN PELEAR)
  image(imagenes[9], 0, 0, width, height);

  fill(255, 95);
  rect(20, 380, 600, 80);
  fill(0);
  text(guiontxt[22], 30, 390,600);

  // Botón FIN
  fill(255);
  rect(250, 420, 100, 30);
  fill(0);
  text("Reiniciar", 265, 435);

  text("FIN", 585, 455);
}

function p10() { // (RENDIRSE)
  image(imagenes[11], 0, 0, width, height);

  fill(255, 95);
  rect(20, 380, 600, 80);
  fill(0);
  text(guiontxt[26], 30, 390,600);
  text("FIN", 585, 455);

  // Botón Reiniciar
  fill(255);
  rect(250, 420, 100, 30);
  fill(0);
  text("Reiniciar", 265, 435);
}

function p11() { // (VENGARSE)
  image(imagenes[10], 0, 0, width, height);

  fill(255, 95);
  rect(20, 380, 600, 80);
  fill(0);
  text(guiontxt[24], 30, 390,600);

  // Botón
  fill(255);
  rect(580, 450, 20, 20);
  fill(0);
  text(">", 585, 463);
}

function p12() {
  image(imagenes[12], 0, 0, width, height);

  fill(255, 95);
  rect(20, 380, 600, 80);
  fill(0);
  text(guiontxt[28], 30, 390,600);
  text(guiontxt[29], 30, 410,600);


  fill(255);
  rect(580, 450, 20, 20);
  fill(0);
  text(">", 585, 463);
}

function p13() {
  image(imagenes[13], 0, 0, width, height);

  fill(255, 95);
  rect(20, 380, 600, 80);
  fill(0);
  text(guiontxt[31], 30, 390,600);


  fill(255);
  rect(580, 450, 20, 20);
  fill(0);
  text(">", 585, 463);
}

function p14() { 
  image(imagenes[13], 0, 0, width, height);

  fill(255, 95);
  rect(20, 380, 600, 80);
  fill(0);

  text(guiontxt[32], 30, 405,600);

  // Botones
  fill(255);
  rect(50, 420, 100, 30);
  fill(0);
  text("Si", 65, 435);

  fill(255);
  rect(250, 420, 100, 30);
  fill(0);
  text("No", 265, 435);
}

function p15() { // SI RECUPERAN SOMBRERO
  image(imagenes[13], 0, 0, width, height);

  fill(255, 95);
  rect(20, 380, 600, 80);
  fill(0);
  text(guiontxt[34], 30, 390,600); 

  fill(255);
  rect(580, 450, 20, 20);
  fill(0);
  text(">", 585, 463);
}

function p16() {
  image(imagenes[14], 0, 0, width, height);

  fill(255, 95);
  rect(20, 380, 600, 80);
  fill(0);
  text(guiontxt[38], 30, 390,600);

  fill(255);
  rect(580, 450, 20, 20);
  fill(0);
  text(">", 585, 463);
}

function p17() {
  image(imagenes[15], 0, 0, width, height);

  fill(255, 95);
  rect(20, 380, 600, 80);
  fill(0);

  
  text("Matamos a Z?", 30, 400);
  // Botones
  fill(255);
  rect(50, 420, 100, 30);
  fill(0);
  text("Si", 65, 435);

  fill(255);
  rect(250, 420, 100, 30);
  fill(0);
  text("No", 265, 435);
}



function p18() { //luffy SI lo mata a z
  image(imagenes[16], 0, 0, width, height);

  fill(255, 95);
  rect(20, 380, 600, 80);
  fill(0);
  text(guiontxt[43], 30, 390,600);
  

  fill(255);
  rect(250, 420, 100, 30);
  fill(0);
  text("Reiniciar", 265, 435);
}


function p19() { //luffy no lo mata a z 
  image(imagenes[15], 0, 0, width, height);

  fill(255, 95);
  rect(20, 380, 600, 80);
  fill(0);
  text(guiontxt[40], 30, 390,600);
  text(guiontxt[41], 30, 410,600);

  fill(255);
  rect(580, 450, 20, 20);
  fill(0);
  text(">", 585, 463);
  
}


function p20() { 
  image(imagenes[17], 0, 0, width, height);

  fill(255, 95);
  rect(20, 380, 600, 80);
  fill(0);
  text(guiontxt[45], 30, 390,600);

fill(255);
  rect(580, 450, 20, 20);
  fill(0);
  text(">", 585, 463);
 
}


function p21() { 
  image(imagenes[18], 0, 0, width, height);

  fill(255, 95);
  rect(20, 380, 600, 80);
  fill(0);
  text(guiontxt[47], 30, 390,600);


  fill(255);
  rect(250, 420, 100, 30);
  fill(0);
  text("Reiniciar", 265, 435);
}

function p22() { 
  image(imagenes[19], 0, 0, width, height);

  fill(255, 95);
  rect(20, 380, 600, 80);
  fill(0);
  text(guiontxt[49], 30, 390,600);

 fill(255);
  rect(250, 420, 100, 30);
  fill(0);
  text("Reiniciar", 265, 435);
 
}


function mousePressed() {
  
  if (sonido.isPlaying()) {
    sonido.stop()
  } else {
    sonido.play();
  }
  
  if (pantalla === 1 && mouseX > 150 && mouseX < 250 && mouseY > 300 && mouseY < 350) {
    pantalla = 2; // Botón START
  } else if (pantalla === 2 && mouseX > 580 && mouseX < 600 && mouseY > 450 && mouseY < 470) {
    pantalla = 3;
  } else if (pantalla === 3 && mouseX > 580 && mouseX < 600 && mouseY > 450 && mouseY < 470) {
    pantalla = 4;
  } else if (pantalla === 4) {
    if (mouseX > 50 && mouseX < 150 && mouseY > 420 && mouseY < 450) {
      pantalla = 6;
    } else if (mouseX > 250 && mouseX < 350 && mouseY > 420 && mouseY < 450) {
      pantalla = 5;
    }
  } else if (pantalla === 6 && mouseX > 580 && mouseX < 600 && mouseY > 450 && mouseY < 470) {
    pantalla = 7;
  } else if (pantalla === 5 && mouseX > 580 && mouseX < 600 && mouseY > 450 && mouseY < 470) {
    pantalla = 7;
  } else if (pantalla === 7) {
    if (mouseX > 50 && mouseX < 150 && mouseY > 420 && mouseY < 450) {
      pantalla = 9;
    } else if (mouseX > 250 && mouseX < 350 && mouseY > 420 && mouseY < 450) {
      pantalla = 8;
    }
  } else if (pantalla === 8) {
    if (mouseX > 250 && mouseX < 350 && mouseY > 420 && mouseY < 450) {
      pantalla = 10;
    } else if (mouseX > 50 && mouseX < 150 && mouseY > 420 && mouseY < 450) {
      pantalla = 11;
    }
  } else if (pantalla === 9 && mouseX > 250 && mouseX < 350 && mouseY > 420 && mouseY < 450) {
    pantalla = 1; // Reinicia el juego
  } else if (pantalla === 10 && mouseX > 250 && mouseX < 350 && mouseY > 420 && mouseY < 450) {
    pantalla = 1;
  } else if (pantalla === 11 && mouseX > 580 && mouseX < 600 && mouseY > 450 && mouseY < 470) {
    pantalla = 12;
  } else if (pantalla === 12 && mouseX > 580 && mouseX < 600 && mouseY > 450 && mouseY < 470) {
    pantalla = 13;
  } else if (pantalla === 13 && mouseX > 580 && mouseX < 600 && mouseY > 450 && mouseY < 470) {
    pantalla = 14;
  } else if (pantalla === 14) {
    if (mouseX > 50 && mouseX < 150 && mouseY > 420 && mouseY < 450) {
      pantalla = 15;
    } else if (mouseX > 250 && mouseX < 350 && mouseY > 420 && mouseY < 450) {
      pantalla = 10;
    }
  } else if (pantalla === 15 && mouseX > 580 && mouseX < 600 && mouseY > 450 && mouseY < 470) {
    pantalla = 16;
  } else if (pantalla === 16 && mouseX > 580 && mouseX < 600 && mouseY > 450 && mouseY < 470) {
    pantalla = 17;
  } else if (pantalla === 17) {
    if (mouseX > 50 && mouseX < 150 && mouseY > 420 && mouseY < 450) {
      pantalla = 18;
    } else if (mouseX > 250 && mouseX < 350 && mouseY > 420 && mouseY < 450) {
      pantalla = 19;
    }
  } else if (pantalla === 18 && mouseX > 250 && mouseX < 350 && mouseY > 420 && mouseY < 450) {
    pantalla = 1;
  }
}
