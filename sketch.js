var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground , rect1 , rect2, rect3 ;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	engine = Engine.create();
	world = engine.world;

	var package_Opts = {
		restitution : 0
	}

	packageBody = Bodies.circle(width/2 , 200 , 5 , package_Opts);
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 680, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	rect1 = new Rectangles(400 , 680 , 200, 20);
	rect1.color = "red";

	rect2 = new Rectangles(310, 620 ,20 , 100);
	rect2.color = "red";

	rect3 = new Rectangles(490 , 620, 20, 100 );
	rect3.color = "red";


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
  if(keyDown(DOWN_ARROW)){
	  keyPressed();
  }
  rect1.display();
  rect2.display();
  rect3.display();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
    packageSprite.velocityX = -3
  }
}



