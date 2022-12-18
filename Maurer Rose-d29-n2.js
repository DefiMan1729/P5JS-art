function setup() {
    createCanvas(400, 400);
    angleMode(DEGREES);
    d =29;
    n=2;
  }
  
  function draw() {
    background(255);
    noFill();
    translate(width/2,height/2);
    beginShape();
    for(let i=0; i<360; i++){
      k = i*d;
      r = (150)*sin(n*k);
      x = r*cos(k);
      y = r*sin(k);
      vertex(x,y);
    }
    endShape(CLOSE);
  }
  