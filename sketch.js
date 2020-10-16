const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let ground;
let box1, box2, box3;
let paperImg;
let binImg;

function preload(){
  paperImg = loadImage("crumpled-paper-drawing-14.png");
  binImg = loadImage("dustbin.png");
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
  world = engine.world;
  
  bin_options = {
    'isStatic':true
  };
  // bin = Bodies.rectangle(635, 555, 120, 185, bin_options);
  // World.add(world, bin);

  box1 = new Box(570, 605, 20, 100);
  box2 = new Box(635, 645, 150, 20);
  box3 = new Box(700, 605, 20, 100);

  paper_options = {
    'isStatic':false,
    'restitution':0.3,
    'friction':0.5,
    'density':1.2 
  }
  paper = Bodies.circle(50, 250, 15, paper_options);
  World.add(world, paper);

  ground = new Ground();

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(220);
  
  Engine.update(engine);

  box1.display();
  box2.display();
  box3.display();

  imageMode(CENTER);
  image(paperImg, paper.position.x, paper.position.y, 40, 40);

  imageMode(CENTER); 
  image(binImg, box2.body.position.x, box1.body.position.y-50, 170, 190);

  ground.display();
 
  drawSprites();
}

function keyPressed(){
  if(keyCode === UP_ARROW){
      Matter.Body.applyForce(paper, paper.position, {x:32, y:-45});
  }
}