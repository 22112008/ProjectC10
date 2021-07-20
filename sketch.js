var ship,ship_floating,edges
var groundImage ;

function preload(){
ship_floating = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png" ) ;
groundImage = loadImage("sea.png")
}

function setup(){
  createCanvas(400,400);
  //creating ground
ground = createSprite(400,200);
ground.addImage("ground",groundImage)
ground.velocityX =-4;
ground.scale=0.3;
  ship = createSprite(130,200,30,30);
  ship.addAnimation("floating", ship_floating);
  edges = createEdgeSprites();
 ship.scale=0.25;  

}

function draw() {
 
background("blue")  
 if (ground.x<0) {
ground.x=ground.width/8;
 }


drawSprites();
}


