const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, papersprite, paperimg;
var bin1, bin2, bin3, binimg, binsprite;

function preload() {
	binimg = loadImage("dustbin.png");
	paperimg = loadImage("paper.png");
}

function setup() {
	createCanvas(1200, 800);
	
	engine = Engine.create();
	world = engine.world;

	papersprite = createSprite(800, 400);
	papersprite.addImage(paperimg);
	papersprite.scale = 0.4;

	binsprite = createSprite(900, 625);
	binsprite.addImage(binimg);
	binsprite.scale = 0.8;
	//Create the Bodies Here.
	//bin class structure (x, y, width, height, angle).
	ground = new Ground(200, 780, 2000, 40);
	paper = new paperball(200, 400, 55);
	bin1 = new bin(900, 750, 200, 20 ,PI/2);
	bin2 = new bin(800, 625, 20, 250);
	bin3 = new bin(1000, 625, 20, 250);
	
	Engine.run(engine);
}

function draw() {
  	rectMode(CENTER);
	background(0);
	if (keyDown("UP_ARROW")) {
		Matter.Body.applyForce(paper.body, paper.body.position,{x:70,y:-100})
	}
	papersprite.x = paper.body.position.x;
	papersprite.y = paper.body.position.y;
	paper.display();
	ground.display();
	bin1.display();
	bin2.display();
	bin3.display();

	drawSprites();
}



