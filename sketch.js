var bullet1,bullet2,bullet3,wall1,wall2,wall3;
var speed,speed0,speed1,weight,weight0,weight1,thickness,thickness1,thickness2;
function setup() {
  createCanvas(1600,800);
  
  wall1=createSprite(1500,200,thickness,200);
  bullet1=createSprite(50, 200, 70, 50);
  bullet1.shapeColor="blue";
 
  
  wall2=createSprite(1500,450,thickness,200);
  bullet2=createSprite(50, 450, 70, 50);
  bullet2.shapeColor="blue";

  wall3=createSprite(1500,700,thickness,200);
  bullet3=createSprite(50, 700, 70, 50);
  bullet3.shapeColor="blue";

  

  speed=random(220,330);
  weight=random(30,50);
  thickness=random(20,80);

  speed0=random(330,440);
  weight0=random(50,70);
  thickness1=random(80,140);

  speed1=random(440,550);
  weight1=random(70,90);
  thickness2=random(140,200); 
}

function draw() {
  background(0,0,0);

 bullet1.velocityX=speed;
 bullet2.velocityX=speed0;
 bullet3.velocityX=speed1;

 if(HasCollided1(bullet1,wall1))
{
  bullet1.velocityX=0;
  var damage=0.5* weight* speed* speed/(thickness*thickness*thickness);

   if(damage>10)
   {
      wall1.shapeColor=color(255,0,0);
   }


   if(damage<10)
   {
      wall1.shapeColor=color(0,255,0);
   }

}
if(HasCollided2(bullet2,wall2))
{
  bullet2.velocityX=0;
  var damage=0.5* weight0* speed0* speed0/(thickness1*thickness1*thickness1);

   if(damage>10)
   {
      wall2.shapeColor=color(255,0,0);
   }


   if(damage<10)
   {
      wall2.shapeColor=color(0,255,0);
   }

}
if(HasCollided3(bullet3,wall3))
{
  bullet3.velocityX=0;
  var damage=0.5* weight1* speed1* speed1/(thickness2*thickness2*thickness2);

   if(damage>10)
   {
      wall3.shapeColor=color(255,0,0);
   }


   if(damage<10)
   {
      wall3.shapeColor=color(0,255,0);
   }
}
 drawSprites();
}

function HasCollided1(bullet1, wall1) 
{
bullet1RightEdge=bullet1.x+bullet1.width;
wall1LeftEdge=wall1.x;
if(bullet1RightEdge>=wall1LeftEdge)
{
return true;

}
 return false;
}


function HasCollided2(bullet2, wall2) 
{
bullet2RightEdge=bullet2.x+bullet2.width;
wall2LeftEdge=wall2.x;
if(bullet2RightEdge>=wall2LeftEdge)
{
return true;

}
 return false;
}

function HasCollided3(bullet3, wall3) 
{
bullet3RightEdge=bullet3.x+bullet3.width;
wall3LeftEdge=wall3.x;
if(bullet3RightEdge>=wall3LeftEdge)
{
return true;

}
 return false;
}








