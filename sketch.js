var dustbinImage;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bin1, bin2, bin3;

function preload()
{
	dustbinImage = loadImage("images/dustbingreen.png")
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
	bin1 = new Dustbin(1300,650,180,20);
	bin2 = new Dustbin(1230,600,20,100);
	bin3 = new Dustbin(1380,600,20,100);

	ball1 = new Paper(200, 600, 70, 20);

	ground = new Ground(750, 660, 10000, 10);
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  bin1.display();
  bin2.display();
  bin3.display();


  ball1.display();
  ground.display();
  imageMode(CENTER);
  image(dustbinImage, 1300, 550, 200, 230)
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball1.body,ball1.body.position,{x: 300, y: -270})
	}
}



