const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;

function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(1200,600);

  ground = new Ground(400,270,200,10);
  ground1 = new Ground(680,270,220,10);

  polygon = Bodies.circle(50,200,20);
  World.add(world,this.polygon);

  slingshot = new SlingShot(this.polygon,{x:100,y:200});

  block1 = new Block(330,235,30,40);
  block2 = new Block(360,235,30,40);
  block3 = new Block(390,235,30,40);
  block4 = new Block(420,235,30,40);
  block5 = new Block(450,235,30,40);
  block6 = new Block(360,195,30,40);
  block7 = new Block(390,195,30,40);
  block8 = new Block(420,195,30,40);
  block9 = new Block(390,155,30,40);

  block10 = new Block(650,150,30,40);
  block11 = new Block(680,150,30,40);
  block12 = new Block(710,150,30,40);
  block13 = new Block(650,190,30,40);
  block14 = new Block(680,190,30,40);
  block15 = new Block(710,190,30,40);
  block16 = new Block(620,190,30,40);
  block17 = new Block(740,190,30,40);
  block18 = new Block(680,110,30,40);
  block19 = new Block(620,230,30,40);
  block20 = new Block(650,230,30,40);
  block21 = new Block(680,230,30,40);
  block22 = new Block(710,230,30,40);
  block23 = new Block(740,230,30,40);
  block24 = new Block(770,230,30,40);
  block25 = new Block(590,230,30,40);
}

function preload(){
  polygonImg = loadImage("images/polygon.png")
}

function draw() {
  background(0); 
  ground.display();
  ground1.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();



  image(polygonImg,polygon.position.x,polygon.position.y,40,40);
  slingshot.display();
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingshot.fly();
}