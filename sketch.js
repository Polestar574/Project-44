var shooter1,shooter1Img;
var shooter2,shooter2Img;
var shooter3,shooter3Img;
var shooter4,shooter4Img;
var shooter5,shooter5Img;
var shooter6,shooter6Img;
var shooterstanding,shooterstandingImg;
var jungle,jungleImg;
var button,buttonImg;
var jungle1,jungle1Img;
var gameState=0;

function preload(){
shooter1Img=loadImage("shooter1.png");
shooter2Img=loadImage("shooter2.png");
shooter3Img=loadImage("shooter3.png");
shooter4Img=loadImage("shooter4.png");
shooter5Img=loadImage("shooter5.png");
shooter6Img=loadImage("shooter6.png");
shooterstandingImg=loadImage("shooterstanding.png");
jungleImg=loadImage("jungle.jpg");
buttonImg=loadImage("button.png");

}
function setup() {
  createCanvas(900,400);
 button=createSprite(450,200,10,10);
 button.addImage(buttonImg);
 shooterstanding=createSprite(100,250);
 shooterstanding.addImage(shooterstandingImg);
 shooterstanding.scale=0.5;
 shooterstanding.visible=false;
 
}

function draw() {
  background(jungleImg); 

  if(mousePressedOver(button)) { 
    button.visible = false;
  
  }

  if(keyDown("S")){
    gameState = PLAY;
  }
   if (button.visible === false) {
    textSize(30);
    fill("yellow");
    text("INTRODUCTION",340,40); 
    fill('yellow')
    text("YOU ARE A SPECIAL COMMANDO",200,80);
    fill("yellow");
    text("1-Army force have sent you on the base of terrorist",10,140);
    fill("yellow");
    text("2-They have gave you a mission",10,190);
    fill("yellow");
    text("3-Your mission is to kill all enemies and destroy their base",10,240);
    fill("yellow");
    text("4-And come back to your Army camp",10,290);
    fill("yellow");
    text("OK, Good Luck Commando",10,340);
    fill("white");
    text("Press- S -TO START THE GAME",200,390);
    
    
  }
  drawSprites();
} 