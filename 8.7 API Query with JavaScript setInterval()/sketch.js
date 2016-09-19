var linex = 0;
var url = 'http://api.open-notify.org/iss-now.json?callback=CALLBACK';

var issX = 0;
var issY = 0;

function setup() {
  createCanvas(600,400);
  setInterval(askISS,1000);

  
}

function gotData(data) {
  var lat = data.iss_position.latitude;
  var long = data.iss_position.longitude;
  issX = map(lat, 0, 20, 0, width);
  issY = map(long, 100, 120, 0, height);
  
}

function askISS() {
  loadJSON(url, gotData, 'jsonp');
}

function draw() {
  background(51);
  
  fill(255);
  ellipse(issX, issY, 24, 24);
  stroke(255);
  line(linex, 0, linex, height);
  linex = linex +5;
  if(linex > width) {
    linex = 0;
  }
}