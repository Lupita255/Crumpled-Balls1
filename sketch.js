const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine;
var paper;
var bin1, bin2, bin3;
var ground;

function preload() {}

function setup() {
  createCanvas(800, 700);

  engine = Engine.create();
  world = engine.world;

  //Create the Bodies Here.
  paper = new Paper(150, 200, 50, 50);
  bin1 = new Bin(495, 550, 20, 200);
  bin2 = new Bin(605, 640, 200, 20);
  bin3 = new Bin(705, 550, 20, 200);
  ground = new Ground(400, 15, 800, 100);

  Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(0);
	
  Engine.update(engine);
	
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
    Matter.Body.applyForce(paper.body, paper.body.position, { x: 20, y: -10 });
  }
}
