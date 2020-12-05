
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,ground ;
var part1,part2,part3;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 500);
	engine = Engine.create();
	world = engine.world;
	
	//Create the Bodies Here.


	ball = new Paper();
	ground = new Ground(width/2,height-50,width,10);
	part1 = new Dustbin((width/2)-8,410,40,70);
	part2 = new Dustbin((width/2)+151,410,40,70);
	part3 = new Dustbin((width/2)+70,height-50,200,40);
	//ball.body.setCollider("circle",0,0,40); 
	//ball.body.debug=true;

	Engine.run(engine);
  
}


function draw() {	
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  

  ball.display();
  ball.body.debug = true;
  ground.display();
  part1.display();
  part2.display();
  part3.display();

  
}

function keyPressed (){

	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-185});
	}
}