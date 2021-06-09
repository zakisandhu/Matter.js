const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1
var box2
var ground



function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world
  
  
  box1 = new box(80, 200, 40, 40);
  box2 = new box(100,100, 40, 100);
  ground = new Ground(200,390,400,15);




}

function draw() {
  background(0,0,0);
  Engine.update(engine);
  
  
  box1.display();
  box2.display();
  ground.display();
  
  
}