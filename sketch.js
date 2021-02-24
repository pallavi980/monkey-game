var obs,back;
var monkey , monkey_running
var banana ,banana2, obstacle1, obstacleImage
var bananaGroup, obstacleGroup
var score,ground;
var obstacleGroup, obstacle2;

function preload(){
  
  monkey_running =                             loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 obstacle1Image=loadImage("obstacle.png")
}



function setup() {
   createCanvas(400,400 );
monkey=createSprite(40,320,60,70)
  monkey.addAnimation("moving",monkey_running)
  monkey.scale=0.1
  
  ground=createSprite(400,350,1200,10)
  ground.velocityX=-4
  ground.x=ground.width/2
  console.log(ground.x)
  
  
  obstacleGroup=createGroup();
  bananaGroup=createGroup();
}


function draw() {
background("white")  
  drawSprites();

  if (ground.x < 0){
      ground.x = ground.width/2;
    } 
 
  stroke("black")
  textSize(20)
  fill("black")
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time=" +survivalTime,200,50)
  
  if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -20;
    }
    
   spawnObstacles();
   spawnbananas(); 
  
    monkey.velocityY = monkey.velocityY +1
  monkey.collide(ground)
  
  if(obstacleGroup.isTouching(monkey)){
    obstacleGroup.setvelocityEach=0
    bananaGroup.setvelocityEach=0
    ground.velocity=0
  }
  
  }
  
function spawnObstacles(){
 if (frameCount % 300=== 0){
   var obstacle = createSprite(500 ,330,10,40);
   obstacle.addImage(obstacle1Image)
   obstacle.velocityX=-3
 var rand = Math.round(random(1,2));
   
   //  obstacle.addImage(obstacle1image)          
    obstacle.scale = 0.1;
    obstacle.lifetime = 300;
   
   //add each obstacle to the group
    obstacleGroup.add(obstacle);
 }
} 

  function spawnbananas(){
    if (frameCount % 80 === 0){
 var banana=createSprite(400,500,30,20)
 banana.y = Math.round(random( 80,200  ));
  banana.velocityX=-3
  banana.addImage(bananaImage)
  banana.scale=0.1
  bananaGroup.add(banana);
 }
  }

