
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper
var ground
var box1;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    paper = new Paper(200,350,40);
    ground = new Ground(800,height,1600,20);
    box1 = new Box(1200,620,20,100);
    box2 = new Box(1000,620,20,100)
    box3 = new Box(1100,680,200,20)
    

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  

  paper.display()
  ground.display()
  box1.display()
  box2.display()
  box3.display()
  keyPressed();

  drawSprites();


 
}
function keyPressed(){
  if (keyCode === UP_ARROW) {

     Matter.Body.applyForce(paper.body,paper.body.position,{x:3,y:-4})

  }


}



