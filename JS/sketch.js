let w = 400;
let h = 600;

function setup(){
    //createCanvas(400,400);
    //createCanvas(w,h);
    createCanvas(windowWidth, windowHeight);
    background('orange');
}

function draw(){
    background(150);
    //noStroke(); si no volem traç
    strokeWeight(10); //mida del borde
    stroke('yellow'); //color del borde
    fill('black');
    //rect(0,0,100,100); rectangle
    ellipse(100,100,100); 
    //ellipse(300,100,100);
    noFill();
    //fill(134,134,234); //color triangle
    ellipse(mouseX,mouseY,100);
    noFill();
    //stroke('chartreuse');
    stroke(20,mouseX,mouseY);
    strokeWeight(1);
    //noStroke(); //no borde al triangle
    triangle(mouseX, mouseY, 200,200,300,300,100,300);
    fill('brown');
    rectMode(CENTER);
    rect (0,0,200,200);
}

//per a que el rectangle gris sigui responsive
function windowResized(){
    resizeCanvas(windowWidth,windowHeight);
}