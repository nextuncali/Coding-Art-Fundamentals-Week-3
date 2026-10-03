let x, y, d;
let colorPalette = ['#F8B195', '#F67280', '#C06C84', '#6C5B7B', '#355C7D'];
let numCircles;
let spacing; 

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  x = width/2;
  y = height/2;
  d = width/2;
spacing = d/numCircles;
  numCircles = 5;
}

function draw() {
  background(0,0,0);
d = width/6;
  for (let i = 0; i < numCircles; i++)
  {
   fill(colorPalette[i]);
    circle(x,y,d);
     d = d - 15;
  }


}