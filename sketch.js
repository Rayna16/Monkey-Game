
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600)
  
  
  monkey=createSprite(80,315,10,10)
  monkey.addAnimation("moving",monkey_running)
  monkey.scale=0.1
  
  ground = createSprite(400,350,1400,10)
  ground.velocityX=-6
  ground.x=ground.width/2;
  console.log(ground.x)
  
 obstaclesGroup=new Group();
 FoodGroup=new Group();
  var survivalTime=0
}


function draw() {
  background(255)
  textSize(20);
  fill("black")
  survivalTime=Math.ceil(frameCount/frameRate())
  text("SURVIVAL TIME: "+ survivalTime,100,50);
  
   if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  if(keyDown("space")){
    monkey.velocityY=-12
  }
  monkey.velocityY = monkey.velocityY + 0.8
  
  
  monkey.collide(ground)
  
  survivalTime = survivalTime + Math.round(getFrameRate()/60);  
  
  
  
  obstacle()
  Food();
drawSprites()
  
}

function obstacle() {
  //write code here to spawn the clouds
  if (frameCount % 300 === 0) {
    var obstacles = createSprite(500,320,40,10);
    obstacles.x = Math.round(random(120,200));
    obstacles.addImage(obstacleImage);
    obstacles.scale = 0.2;
    obstacles.velocityX = -3;
    
     //assign lifetime to the variable
    obstacles.lifetime = 300;
    
    //adjust the depth
    obstacles.depth = monkey.depth;
    monkey.depth = monkey.depth+1;
    
    //add each cloud to the group
    obstaclesGroup.add(obstacles);
  }
  
}

function Food() {
  //write code here to spawn the clouds
  if (frameCount % 80 === 0) {
    var food = createSprite(300,150,40,10);
    food.y = Math.round(random(120,200));
    food.addImage(bananaImage);
    food.scale = 0.1;
    food.velocityX = -3;
    
     //assign lifetime to the variable
    food.lifetime = 300;
    
    //adjust the depth
    food.depth = monkey.depth;
    monkey.depth = monkey.depth+1;
    
    //add each cloud to the group
    FoodGroup.add(food);
  }
  
}


