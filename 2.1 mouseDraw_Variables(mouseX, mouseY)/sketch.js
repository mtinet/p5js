var col = {
  r: 0,
  g: 0,
  b: 0
}


function setup() {
  createCanvas(600,400);
  //background
  background(250,250,100);
}

function draw() {
  col.r = random(0, 255);
  col.g = random(0, 255);
  col.b = random(0, 255);
  
  //ellipse
  noStroke();
  fill(col.r, col.g, col.b, 50);
  ellipse(mouseX,mouseY,20,20);
    
  //rectangle
  //fill(200,250,200);
  //rect(400,100,50,50);
}

function mousePressed() {
    background(250,250,100);
}