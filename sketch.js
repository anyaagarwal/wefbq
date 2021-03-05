var starImg, fairyImg,fairyImg2, bgImg;
var fairy , fairyVoice;
var star, starBody;
var star2, star2Body;
var star3, star3Body;
var star4, star4Body;
var star5, star5Body;
var star_options;


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("starImage.png");
	fairyImg = loadImage("d9da3y9-4e605939-170e-4aa4-9063-4137177fbe09-removebg-preview.png");
	fairyImg2 = loadImage("WhatsApp_Image_2021-02-10_at_11.04.52_AM-removebg-preview-removebg-preview.png");
	fairyImg3 = loadImage("Capture-removebg-preview.png");
	bgImg = loadImage("starryNight.jpg");
	fairyVoice = loadSound("JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);
    
	fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addImage("fairyImge",fairyImg); 
	fairy.addImage("fairyImage",fairyImg2);
	fairy.addImage("fairyImages",fairyImg3);  
	fairy.scale =0.25;

	star = createSprite(650,37);
	star.addImage(starImg);
	star.scale = 0.04;

	 star_options={
		isStatic:true
	}

	star2 = createSprite(550,30);
	star2.addImage(starImg);
	star2.scale = 0.02;

	star3 = createSprite(450,33);
	star3.addImage(starImg);
	star3.scale = 0.03;

	star4 = createSprite(350,44);
	star4.addImage(starImg);
	star4.scale = 0.04;

	star5 = createSprite(250,47);
	star5.addImage(starImg);
	star5.scale = 0.03;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 ,{restitution:0.5, isStatic:true});
	World.add(world, starBody);

	star2Body = Bodies.circle(550 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, star2Body);

    star3Body = Bodies.circle(450 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, star3Body);

	star4Body = Bodies.circle(350 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, star4Body);

	star5Body = Bodies.circle(250 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, star5Body);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);
  star.x= starBody.position.x 
  star.y= starBody.position.y 
  Engine.update(engine);

  if(keyDown("left_arrow")){
	lefty();

}

if(keyDown("right_arrow")){
	righty();
}

if(keyDown("R")){
	fairy.changeAnimation("fairyImge",fairyImg);
}

if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(starBody,false); 
}

if(star.y>470&&starBody.position.y>470){
	Matter.Body.setStatic(starBody,true);
}
  drawSprites();

}

function righty() {
	
	fairy.changeAnimation("fairyImages",fairyImg3);
	fairy.position.x=fairy.position.x+3;

	
}

function lefty(){
	fairy.changeAnimation("fairyImage",fairyImg2);
	fairy.position.x=fairy.position.x-3;
}


