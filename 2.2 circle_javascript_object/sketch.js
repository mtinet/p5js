/*
https://vimeo.com/channels/learningp5js/138327558
*/
var circle1 = {
  x: 0, 
  y: 200, 
  diameter: 50
};

var circle2 = {
  x: 0, 
  y: 100, 
  diameter: 30
};


var r = 218;
var g = 160;
var b = 221;

function setup() {
  createCanvas(600, 400);  
}

function draw() {
  // background
  background(r, g, b);
  // ellipse
  fill(250, 200, 200);
  ellipse(circle1.x, circle1.y, circle1.diameter, circle1.diameter);
  
  circle1.x = circle1.x + 1;
  
  fill(50, 20, 100);
  ellipse(circle2.x, circle2.y, circle2.diameter, circle2.diameter);
  
  circle2.x = circle2.x + 2;
}