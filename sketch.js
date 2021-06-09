
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var fish, eel, present, starfish, shark;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);


	fish = new Fish();
	shark = new Shark();
	starfish = new Starfish();
	eel = new Eel();
	present = new Present();

  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
  fish.display()
  eel.display()
  present.display()
  starfish.display()
  shark.display()





}



