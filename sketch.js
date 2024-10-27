let backgroundImg, snitchBodyImg, snitchWingImg;
let snitchX, snitchY;
let wingOffset = 0;
let wingDirection = 1;

function preload() {
  backgroundImg = loadImage('background.png');
  snitchBodyImg = loadImage('snitch_body.png');
  snitchWingImg = loadImage('snitch_wing.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  snitchX = width / 2;
  snitchY = height / 2;
}

function draw() {
  image(backgroundImg, 0, 0, width, height);
  displaySnitch();
}

function displaySnitch() {
  wingOffset += wingDirection * 7; 

 
  if (wingOffset > 3 || wingOffset < -3) {
    wingDirection *= -1; 
  }

  image(snitchWingImg, snitchX - 90, snitchY + wingOffset, 180, 30);
  image(snitchBodyImg, snitchX - 20, snitchY, 40, 40);
}
