const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var starNightImage,fairyImage,starImage;
var sound;
var world,engine;

function preload()
{
   //preload the images here
   starNightImage = loadImage("images/starnight.png");
   fairyImage =loadAnimation("images/fairy1.png","images/fairy2.png");
   starImage = loadImage("images/star.png");
   sound = loadSound("sound/joyMusic.mp3");

}

function setup() {
  createCanvas(500, 500);

  engine = Engine.create();
  world = engine.world;
  
  fairy = createSprite(100,350);
  fairy.addAnimation("fairy",fairyImage);
  fairy.scale=0.2;

  star = createSprite(400,100);
  star.addImage(starImage);
  star.scale=0.2;

  starBody = Bodies.circle(400,100,10,{isStatic:true});
  World.add(world,starBody);  
}


function draw() {

  background(starNightImage);

  sound.play();
  Engine.update(engine);
  ellipseMode(RADIUS);
  ellipse(starBody.position.x,starBody.position.y,10,10);

  star.x = starBody.position.x;
  star.y = starBody.position.y;

 
  if(fairy.isTouching(star) && star.y>330){
    console.log("fairy touched the star");
    Matter.Body.setStatic(starBody,true);
  }
  drawSprites();

}

function keyPressed(){
  if(keyCode === DOWN_ARROW){
    Matter.Body.setStatic(starBody,false);
  }

  if(keyCode === LEFT_ARROW){
    fairy.x = fairy.x-10;
  }

  if(keyCode === RIGHT_ARROW){
    fairy.x = fairy.x+10;
  }

}




