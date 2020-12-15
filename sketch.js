const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,ground1,ground2, polygon, polygonImg;
var engine, world;
var slingShot;
var score = 0;
var bg = "brown";
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16, box17,box18,box19,box20,box21,box22,box23,box24,box25;

function preload(){
	polygonImg = loadImage("polygon.png")
}

function setup() {
	createCanvas(1800, 700);

	engine = Engine.create();
	world = engine.world;

	

	//Create the Bodies Here.
	ground2 = new Ground(1300,280,250,20)
	ground1 = new Ground(900,600,1800,20);
	ground = new Ground(640,470,350,20);
	
	box1 = new Box(520,440,40,40);
	box2 = new Box(560,440,40,40);
	box3 = new Box(600,440,40,40);
	box4 = new Box(640,440,40,40);
	box5 = new Box(680,440,40,40);
	box6 = new Box(720,440,40,40);
	box7 = new Box(760,440,40,40);
	box8 = new Box(560,400,40,40);
	box9 = new Box(600,400,40,40);
	box10 = new Box(640,400,40,40);
	box11 = new Box(680,400,40,40);
	box12 = new Box(720,400,40,40);
	box13 = new Box(600,360,40,40);
	box14 = new Box(640,360,40,40);
	box15 = new Box(680,360,40,40);
	box16 = new Box(640,320,40,40)

	box17 = new Box(1300,260,40,40);
	box18 = new Box(1260,260,40,40);
	box19 = new Box(1220,260,40,40);
	box20 = new Box(1340,260,40,40);
	box21 = new Box(1380,260,40,40);
	box22 = new Box(1340,220,40,40);
	box23 = new Box(1300,220,40,40);
	box24 = new Box(1260,220,40,40);
	box25 = new Box(1300,180,40,40);

	var polygon_options = {
		restitution : 0.1,
		density : 0.01
	  }

	polygon = Bodies.circle(200, 450, 20,polygon_options);
	
	World.add(world,polygon);
	slingShot = new SlingShot(this.polygon,{x:200,y:450});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bg);
  ground2.display() 
  ground1.display()
  ground.display()
  
  fill("white");
  box1.display();
  box3.display();
  box5.display();
  box7.display();
  box9.display();
  box11.display();
  box13.display();
  box15.display();
  box17.display();
  box19.display();
  box21.display();
  box23.display();
  box25.display();

  fill("orange");
  box2.display(); 
  box4.display();
  box6.display();
  box8.display();
  box10.display();
  box12.display();
  box14.display();
  box16.display();
  box18.display();
  box20.display();
  box22.display();
  box24.display();

  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  box10.score();
  box11.score();
  box12.score();
  box13.score();
  box14.score();
  box15.score();
  box16.score();
  box17.score();
  box18.score();
  box19.score();
  box20.score();
  box21.score();
  box22.score();
  box23.score();
  box24.score();
  box25.score();

  

  push();
  imageMode(CENTER)
  image(polygonImg,polygon.position.x,polygon.position.y,60,60);
  pop();

  fill("yellow");
  textSize(20)
  text("SCORE : "+ score,1250,40)
  getBackgroundImage()
}


function mouseDragged(){
    Matter.Body.setPosition(polygon,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	slingShot.fly();
	
}

function keyPressed(){
	if(keyCode === 32){
	  slingShot.attach(polygon);
	  Body.setPosition(polygon,{x:200,y:450});
	  Body.setAngle(polygon,0)
	  Body.setVelocity(polygon,{x:0,y:0})
	}
  }

  async function getBackgroundImage(){
	var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
	var responseJson = await response.json();
	var dateTime = responseJson.datetime;
	var hour = dateTime.slice(11,13)
	if(hour<18 && hour>6){
	bg = "brown"
	}
	else{
		bg = "blue"
	}
}