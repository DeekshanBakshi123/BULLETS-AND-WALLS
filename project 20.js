var car,car1,car2,wall,wall1,wall2;
var speed,weight;
function setup() {
  createCanvas(1600,800);
  
  wall=createSprite(1500,200,60,200);
  car=createSprite(50, 200, 50, 50);

 
  
  wall1=createSprite(1500,450,60,200);
  car1=createSprite(50, 400, 50, 50);


  wall2=createSprite(1500,660,60,200);
  car2=createSprite(50, 600, 50, 50);
 

  

  speed=random(55,90);
  weight=random(400,1500);
  
  speed0=random(70,110);
  weight=random(500,1600);

 speed1=random(80,120);
  weight=random(600,1700);
  
}

function draw() {
  background(0,0,0);

 car.velocityX=speed;
 car0.velocityX=speed0;
 car1.velocityX=speed1;
 

if(wall.x-car.x < (car.width+wall.width)/2)
{
  car.velocityX=0;
  var deformation=0.5*weight*speed*speed/22500;

  if(deformation>180)
  {
    car.shapeColor=color(255,0,0);
  }
  if(deformation<180 && deformation>100)
  {
    car.shapeColor=color(230,230,0);
  }
  if(deformation<100)
  {
    car.shapeColor=color(0,255,0);
  }
 } 
 drawSprites();
}

