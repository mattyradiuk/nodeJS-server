let num = 5000;
let dist = 15;

let xs = []
let ys = []

function setup() {
  createCanvas(920, 660);
  for(var i = 0; i < num; i++) {
    xs[i] = width/2;
    ys[i] = height/2;
  }
  frameRate(30);
}

function draw() {
  background(2,2,60);
  
  for(var i = 1; i < num; i++) {
    xs[i-1] = xs[i];
    ys[i-1] = ys[i];
  }

  xs[num-1] += random(-dist, dist);
  ys[num-1] += random(-dist, dist);

  xs[num-1] = constrain(xs[num-1], 0, width);
  ys[num-1] = constrain(ys[num-1], 0, height);
  
  for(var i=1; i<num; i++) {    
    var val = float(i)/num * 204.0 + 51;
    strokeWeight(2);
    stroke(val);
    line(xs[i-1], ys[i-1], xs[i], ys[i]);
  }
}