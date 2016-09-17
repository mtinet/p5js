
var bubble = {
  x : 300,
  y : 200,
  display : function() {
    stroke(50,150,200);
    strokeWeight(4);
    fill(255);
    ellipse(this.x, this.y, 20,20);
  },
  move : function() {
    this.x = this.x + random(-5,5);
    this.y = this.y + random(-5,5);
  }
}

function setup() {
  createCanvas(600,400);
  background(100,0,140);
}


function draw() {

  bubble.move();
  bubble.display();
}

