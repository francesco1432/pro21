
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var left,right;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 400);
	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
		}
		var ground_options ={
			isStatic: true
		  };
		  var left_options ={
			isStatic: true
		  };
		  var right_options ={
			isStatic: true
		  };
		  ground = Bodies.rectangle(200,390,2000,20,ground_options);
		  World.add(world,ground);
		  left = Bodies.rectangle(800,390,20,200,left_options);
		  World.add(world,left);
		 right = Bodies.rectangle(600,390,20,200,right_options);
		  World.add(world,right);
		ball = Bodies.circle(100,10,20,ball_options);
		World.add(world,ball);
	Engine.run(engine);
	
}


function draw() {
	fill(350,350,150);
	rectMode(CENTER);
  ellipseMode(RADIUS);
  background(0);
  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,2000,20);
  rect(left.position.x,left.position.y,20,200);
  rect(right.position.x,right.position.y,20,200);

  drawSprites();
 
}

function applyForce(){
    Matter.Body.applyForce(ball,{x:0,y:0},{x:60,y:-60});
  }
  
  function keyPressed() {
	if (keyCode === UP_ARROW) {
   applyForce();
   }
 }



