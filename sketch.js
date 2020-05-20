const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bg;

function preload(){
bg = loadImage("bg.jpg");
}

function setup() {
  createCanvas(1200,450);
  engine = Engine.create();
  world = engine.world;
  ball = new Ball(200,200,50,50);
  block1 = new Box(600,275,30,40);
  block2 = new Box(530,275,30,40);
  block3 = new Box(560,275,30,40);
  block4 = new Box(590,275,30,40);
  block5 = new Box(620,275,30,40);
  block6 = new Box(650,275,30,40);
  block8 = new Box(530,235,30,40);
  block9 = new Box(560,235,30,40);
  block10 = new Box(590,235,30,40);
  block11 = new Box(620,235,30,40);
  block12 = new Box(650,235,30,40);
  block13 = new Box(560,195,30,40);
  block14 = new Box(590,195,30,40);
  block15 = new Box(620,195,30,40);
  block16 = new Box(590,155,30,40);

  blocks1 = new Box(840,425,30,40);
  blocks2 = new Box(870,425,30,40);
  blocks3 = new Box(900,425,30,40);
  blocks4 = new Box(930,425,30,40);
  blocks5 = new Box(960,425,30,40);
  blocks6 = new Box(870,385,30,40);
  blocks7 = new Box(900,385,30,40);
  blocks8 = new Box(930,385,30,40);
  blocks9 = new Box(900,345,30,40);
  ground = new Ground(600,450,1200,20);
  ground1 = new Ground(590,300,250,10);
  ground2 = new Ground(210,370,100,10);
  slingshot = new Catapult(ball.body,{x:200, y:200});
}


function draw() {
  background(0);  
  Engine.update(engine);
  ball.display();
  slingshot.display();
  ground1.display();
  ground.display();
  ground2.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  //block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  blocks1.display();
  blocks2.display();
  blocks3.display();
  blocks4.display();
  blocks5.display();
  fill("pink");
  blocks6.display();
  blocks7.display();
  blocks8.display();
  fill("pink")
  blocks9.display();
}
function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32){
      slingshot.attach(ball.body);
  }
}