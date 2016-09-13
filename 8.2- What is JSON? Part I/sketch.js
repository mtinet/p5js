var flower;

function preload() {
  flower = loadJSON("flower.json");
}

function setup() {
  createCanvas(600,400);
  
  // {
  //   name: "sunflower",
  //   col: color(50,255,0)
  // }
}

function draw() {
  background(0);
  
  fill(flower.r, flower.g, flower.b);
  text(flower.name, 30, 50);
}