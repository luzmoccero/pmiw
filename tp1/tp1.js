// Moccero Maria Luz
// Comision 4
// link: https://youtu.be/tV1NSP3tbcU

let img;
let cant = 60; 
let tamcirc = 18;
let tam;
let negro; // color que cambia al principio los circulitos
let estoyEnLaMitadDerecha; 
let x, y; 

function preload(){
  img = loadImage("data/illusion.jpg"); 
}

function setup() {
  createCanvas(800, 400);
  resetProgram(); 
  circledibujin(495, 170, 20);
 
  x = 400;
  y = 0;
}

function draw() {
  stroke(100);
  strokeWeight(15);
  print(mouseX + "/" + mouseY);
  
  estoyEnLaMitadDerecha = mouseX > width / 2; 

  if (estoyEnLaMitadDerecha) {
    fill(50);
  } else {
    fill(0);
  }
  rect(x, y, 400, 400);
  
  // Dibujo de líneas
  for (let i = 400; i <= width; i += cant) {
    line(i + 36, 0, i + 36, height); // Líneas verticales
    line(400, i - 350, width, i - 350); // Líneas horizontales
  }
  
  stroke(240);
  strokeWeight(4);
  
  for (let i = 436; i <= width; i += cant) {
    for (let j = -10; j <= height; j += cant) {
      let posX = i - width / 2; 
      let posY = j; 
      let d = dist(mouseX, mouseY, posX + width / 2, posY);

      if (posX >= 0 && d < tamcirc * 5) {
        fill(negro); 
      } else {
        fill(240);
      }
      ellipse(posX + width / 2, posY, tamcirc, tamcirc); 
    }
  }
  
  noStroke();
  circledibujin(495, 170, 20);

}

function mouseClicked() {
  negro = color(random(255), random(255), random(255)); 
}

function keyPressed() {
  if (key == 'r' || key == 'R') {
    resetProgram(); 
  }
}

function circledibujin(centerX, centerY, radius) {
  push();
  fill(240);
  circle(centerX, centerY, radius);
  circle(centerX + 60, centerY, radius); 
  circle(centerX + 60, centerY + 60, radius); 
  circle(centerX + 120, centerY + 60, radius); 
  pop();
}

function resetProgram() {
  mouseX = 0;
  mouseY = height / 2;
  tam = width / cant; 
  image(img, 0, 0, 400, 400); 
  negro = color(0); 
}
