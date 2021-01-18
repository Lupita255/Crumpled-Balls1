
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var papers;
var bin1, bin2, bin3;
var bin, binImg;

function preload(){}

function setup() {
	createCanvas(1100,700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(150,200,50,50);

	bin1 = new Bin(840,660,230,20);
	bin2 = new Bin(715,605,20,130);
	bin3 = new Bin(965,605,20,130);

	ground = new Ground(500,680,1200,20);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  paper.display();
  bin1.display();
  bin2.display();
  bin3.display();
  ground.display();

  keyPressed();

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	  Matter.Body.applyForce(paper.body, paper.body.position, {x:6, y:-6});
	}
  }
