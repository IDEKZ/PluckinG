const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var dground, tree,treeimg;
var boy, boyimg;
var stones;
var mango1, mango2, mango3, mango4, mango5, mango6, maango7, mango8, mango9, mango10;

function preload(){
	treeimg=loadImage("tree.png");
	boyimg=loadImage("boy.png");
}

function setup() {
	createCanvas(1600, 650);
    background("white")
	engine = Engine.create();
	world = engine.world;

	dground=new Ground();
	stones=new Stone(100,460,23);
	mango1=new Mango(900,290,34);
	mango2=new Mango(1155,325,35);
	mango3=new Mango(970,260,35);
	mango4=new Mango(1030,200,35);
	mango5=new Mango(1010,320,36);
	mango6=new Mango(1080,250,35);
	mango7=new Mango(1125,170,33);
	mango8=new Mango(1180,260,35);
	mango9=new Mango(1240,220,35);
	mango10=new Mango(1200,305,35);

	attach=new Throw(stones.body,{x:100,y:465});

	tree=createSprite(1075,380);
	tree.addImage(treeimg);
	tree.scale=0.38;

	boy=createSprite(160,550);
	boy.addImage(boyimg);
	boy.scale=0.12;

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background("white");

  fill("black");
  textSize(18);

  detectCollision(stones,mango1);
  detectCollision(stones,mango2);
  detectCollision(stones,mango3);
  detectCollision(stones,mango4);
  detectCollision(stones,mango5);
  detectCollision(stones,mango6);
  detectCollision(stones,mango7);
  detectCollision(stones,mango8);
  detectCollision(stones,mango9);
  detectCollision(stones,mango10);

  drawSprites();

  stones.display();
  dground.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();

}

function mouseDragged(){
	Matter.Body.setPosition(stones.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	attach.fly();
}

function detectCollision(lstones,lmango){

	if(lstones.body.position.x- lmango.body.position.x <lmango.diametre + lstones.diametre
		&& lmango.body.position.x - lstones.body.position.x  < lmango.diametre + lstones.diametre
		&&lstones.body.position.y -lmango.body.position.y < lmango.diametre + lstones.diametre
		&& lmango.body.position.y - lstones.body.position.y < lmango.diametre + lstones.diametre){
		Matter.Body.setStatic(lmango.body,false);
	}

}
 
function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stones.body,{x:100,y:465});
		attach.Launch(stones.body);
	}
}