var r = 0;
var g = 255;

function setup() {
  createCanvas(800,1200);
  }

function draw() {
  //background
  r = map(mouseX, 0, 800, 0, 255);
  g = map(mouseY, 0, 1200, 255, 0);
  background(r, g, 0);
  
  //ellipse
  fill(250,118,222);
  ellipse(mouseX, mouseY, 64, 64);
}
