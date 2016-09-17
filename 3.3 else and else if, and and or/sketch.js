var x = 0;
var speed = 3;

function setup() {
  createCanvas(600,400);
}

function draw() {
  background(100, 30, 240);
  stroke(255);
  strokeWeight(4);
  noFill();


  
  if(mouseX > 300 &&mouseX < 400) {
    fill(2255, 0, 200);
  }
  rect(300,200,100,100);
}