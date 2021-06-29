var garden,rabbit;
var gardenImg,rabbitImg;
var apple;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
}

function setup(){
  
createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating rabbit
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

}

function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  rabbit.x = World.mouseX;

  createApples();

  drawSprites();
}

function createApples(){
 
 if (frameCount%80==0) {
  
  apple = createSprite(200,10,20,20);
  apple.shapeColor = "red";
  apple.velocityY = 4;

  apple.x = Math.round(random(20,340));

  apple.lifetime = 70

 }
   
}
