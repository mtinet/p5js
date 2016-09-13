var weather;

function setup() {
  createCanvas(400, 200);
  loadJSON("http://api.openweathermap.org/data/2.5/weather?q=Seoul&APPID=24109ddecb29a5405afe2a8df42c5e34&units=metric", gotData)
}

function gotData(data) {
  // println(data);
  weather = data;
  
}


function draw() {
  background(0);
  if (weather) {
    ellipse(100, 100, weather.main.temp, weather.main.temp);
    ellipse(300, 100, weather.main.humidity, weather.main.humidity);
    
  }
}