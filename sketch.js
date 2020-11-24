var helicopterIMG, helicopterSprite, packageSprite,packageIMG,redSprite1,redSprite2,redSprite3;
var packageBody,ground, redBody1,redBody2,redBase;
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

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	redSprite1=createSprite(300,610,20,100);
	redSprite1.shapeColor=color("red");
	
	redSprite2=createSprite(500,610,20,100);
	redSprite2.shapeColor=color("red");

	redSprite3=createSprite(400,650,200,20);
	redSprite3.shapeColor=color("red");


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	
	redBody1= Bodies.rectangle(300,610,20,100,{isStatic:true}) ;
	World.add(world,redBody1);

	redBody2=Bodies.rectangle(500,610,20,100,{isStatic:true});
	World.add(world,redBody2);

	redBase=Bodies.rectangle(400,650,200,20,{isStatic:true});
    World.add(world,redBase);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  
  redSprite1.x= redBody1.position.x;
  redSprite1.y= redBody1.position.y;

  redSprite2.x= redBody2.position.x;
  redSprite2.y= redBody2.position.y;

  redSprite3.x=redBase.position.x;
  redSprite3.y=redBase.position.y;

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
Matter.Body.setStatic(packageBody,false);
    
  }
}



