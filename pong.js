var CanvasX=600
var CanvasY=600
var BorderX=0.033*CanvasX
var BorderY=0.033*CanvasY
var BorderL=0.934*CanvasX
var BorderH=0.934*CanvasY
var r=CanvasY*0.05;
var speedX=3;
var speedY=3;
var ballPositionX;
var ballPositionY;
var c;
var score = 0;

function setup() {
  createCanvas(CanvasX,CanvasY)
  ballPositionX=random(0.2*CanvasX,0.8*CanvasX)
  ballPositionY=random(0.2*CanvasY,0.8*CanvasY)
  
}

function draw() {
  background(4)
   drawField();
   drawPaddle();
   drawBall();
   checkPaddle();
   boundary();
   end();

 fill(143,255,158);
  textSize(28);
  text("Score: " + score, (CanvasX*0.05),(CanvasY*0.085));
  
}

function drawField(){
  strokeWeight(3)
  stroke(255)
  noFill()
  rect(BorderX,BorderY,BorderL,BorderH)
  
}

function drawPaddle(){
  fill(255)
  c=constrain(mouseX,BorderX,width-BorderX-50)
  rect(c,CanvasY*0.9,80,CanvasY*0.015)

}

function drawBall(){
  noFill();
  ellipse(ballPositionX,ballPositionY,2*r,2*r)
   if(ballPositionX>width-BorderX-r || ballPositionX<(0+BorderX+r)){
    speedX=speedX*random(-1.2,-0.9)
     
   }
  
   if(ballPositionY>height-BorderY-r || ballPositionY<(0+BorderY+r)){
    speedY=speedY*random(-1.2,-0.9)
  
}

  ballPositionX=ballPositionX+speedX;
  ballPositionY=ballPositionY-speedY;
  
}

function checkPaddle(){
  if(ballPositionX>c && ballPositionX<(c+50) && ballPositionY>CanvasY*0.85 && ballPositionY<(CanvasY*0.85+CanvasY*0.015)){
  speedY=speedY*-1;
  speedX=speedX*1;
  score++;
    
  }
    
}

function boundary(){
  if(ballPositionY>(BorderH*0.98)){
    ballPositionY=BorderH*0.3;
    score=0;
    speedX=0;
    speedY=0;
    
  }

}

function end(){  
   if(score<=0){
    fill(105,240,255);
    textSize(35);
    text('Press any key to begin!',CanvasX*0.2,CanvasY*0.5);

    fill(255,28,28);
    textSize(22);
    text('Pong by Owen J',CanvasX*0.68,CanvasY*0.085);
   }
}


function keyPressed(){
  speedX=3;
  speedY=3;
  score=0;
  
}
