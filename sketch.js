const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var engine,world;
var hex, ground;
var slingshot;
var box1;

function setup() {
  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;

  hex = new Hexagon(200,200,20,6)
  ground = new Ground(200,380,2000,50)
  ground2 = new Ground(550,220,250,20)
  ground3 = new Ground(900,150,250,20)
  slingshot = new SlingShot(hex.body,{x:200,y:200})
  
  box1 = new BaseClass(500,200,30,40)
  box2 = new BaseClass(530,200,30,40)
  box3 = new BaseClass(540,200,30,40)
  box4 = new BaseClass(550,200,30,40)
  box5 = new BaseClass(560,200,30,40)
  
  box6 = new BaseClass(545,160,30,40)
  box7 = new BaseClass(520,160,30,40)
  box8 = new BaseClass(525,160,30,40)
  box9 = new BaseClass(535,160,30,40)

  box10 = new BaseClass(515,120,30,40)
  box11 = new BaseClass(530,120,30,40)
  box12 = new BaseClass(545,120,30,40)
}

function draw() {
  background("black"); 
  Engine.update(engine);
  hex.display();
  ground.display();
  ground2.display();
  ground3.display();
  slingshot.display();
  
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
}

function mouseDragged(){
  Matter.Body.setPosition(hex.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32)
  {
    slingshot.attach(hex.body)
  }
}