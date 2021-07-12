var background, backgroundImg;
var runner1, runner2, runner3, runner4;
var runner1Img, runner2img, runner3Img, runner4Img;

function preload(){
backgroundImg=loadImage("images/th.jpeg");
runner1Img=loadImage("images/runner1.png");
runner2Img=loadImage("images/runner2.png");
runner3Img=loadImage("images/runner1.png");
runner4Img=loadImage("images/runner2.png");
}

function setup() {
  canvas = createCanvas(600,600);
 
}

function draw(){
  background(backgroundImg)
runner1=createSprite(900,900);
runner1.addImage("runner1", runner1Img);
  drawSprites();
}
