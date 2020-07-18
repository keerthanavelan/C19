//Global Variables
var  bananaImage , obstacleImage , obstacleGroup , back, score , monkey , monkeyA , backgroundA , groundA,ground , bananaGroup ;

function preload(){
  monkeyA = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png")
  backgroundA = loadImage("jungle.jpg");
  groundA = loadImage("ground.jpg");
  bananaImage = loadImage("Banana.png");
  obstacleImage = loadImage("stone.png");
}


function setup() {
  createCanvas(400,400);
  back = createSprite(200,200,10,10);
  monkey = createSprite(50,200,10,10);
  ground = createSprite(200,490,10,400);
  textFont(20);
  textColor = "white";
  text ("Score = " + score,200,200);
  
  bananaGroup = createGroup;
  
  monkey.scale = 0.1;
  back.scale = 0.6;
  ground.scale = 0.2;
  monkey.addAnimation("MONKEY" , monkeyA);
  back.addImage("jungly", backgroundA);
  ground.addImage("scroll",groundA);
  
  score = 0;
}


function draw(){
 background(255);
  text ("Score:" + score, 200,50);
  textColor = "white";
  drawSprites();
  if (keyDown("space") && monkey.y>=320){
    monkey.velocityY = monkey.velocityY - 5;
  }
  monkey.velocityY = monkey.velocityY + 1;
  monkey.collide(ground);
  
  Banana();
  Stone();
}

function Banana(){
  if (World.frameCount % 60 === 0){
    var fruit;
    fruit = createSprite(400,300,10,10);
    fruit.scale = 0.05;
    fruit.addImage("banana",bananaImage);
    fruit.velocityX = -5;
    fruit.lifetime = 134;
    if (monkey.isTouching(fruit)){
      score = score+1;
      console.log(score);
    }
  }
}

function Stone(){
 if(World.frameCount % 60 === 0){
   var obstacle
   obstacle = createSprite(400,380,10,10);
   obstacle.scale = 0.2;
   obstacle.velocityX = -5;
   obstacle.addImage("stone" , obstacleImage);
  }
}