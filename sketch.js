const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var bg, bgImg;

function preload(){
  bgImg = loadImage("bg.png");
}

function setup() {
  createCanvas(400,400);

  bg = createSprite(100,200,10,10);
  bg.addImage(bgImg);

  engine = Engine.create();
  world = engine.world;

  var ground_options={
    isStatic : true
  }


  var holder_options={
    isStatic: true
  }

  ground = Bodies.rectangle(200,330,400,20,ground_options)
  World.add(world,ground);

holder = Bodies.rectangle(200,100,200,20,holder_options);
World.add(world,holder);

var ball_options = {

  restitution : 1.0,
  density : 1.0

}

ball  = Bodies.circle(220,200,40,ball_options);
World.add(world,ball);


var options = {
  bodyA : ball,
  bodyB : holder,
  stiffness: 0.004,
  length : 100
}
var string = Constraint.create(options);
World.add(world,string);

fill("WHite");
}


function draw() {
  background("white"); 


  Engine.update(engine);


if(keyCode===32){
ball.position.y = mouseY;
ball.position.x = mouseX;
}

else if (keyCode === ENTER){
ball.position.x = 200;

}

drawSprites();
textSize(12)
fill("red");
text("Press space bar to oscillate the pendulam to left and right with mouse",10,20);
  text("Press Enter to stop the Pendulum from oscillating",70,50);

  fill ("pink");
rectMode(CENTER);
rect(holder.position.x,holder.position.y,200,20);

//fill(0);
//rectMode(CENTER);
//rect(ground.position.x,ground.position.y,400,20);


fill("purple");
ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,40);

strokeWeight(8);
stroke("black");
line(ball.position.x,ball.position.y,holder.position.x,holder.position.y)
}

