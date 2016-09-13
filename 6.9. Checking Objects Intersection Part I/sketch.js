
var b1;
var b2;

function setup() {
  createCanvas(600, 400);
  b1 = new Bubble(250, 150);
  b2 = new Bubble(350, 150);
  b3 = new Bubble(300, 240);
}

function draw() {
  background(0);

  b1.update();
  b2.update();
  b3.update();
  b1.display();
  b2.display();
  b3.display();

  if (b1.intersects(b2)) {
    b1.changeColor();
    b2.changeColor();
  }
  if (b2.intersects(b3)) {
    b2.changeColor();
    b3.changeColor();
  }
  if (b1.intersects(b3)) {
    b1.changeColor();
    b3.changeColor();
  }  
}