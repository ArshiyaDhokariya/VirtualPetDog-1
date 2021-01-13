var dog , happyDog ;
var database ;
var food , foodStock ;



function preload()
{
  dog2= loadImage("images/dogImg.png");
  dog1 = loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500,500);
 
  dog = createSprite(250,250);
  dog.addImage(dog2);
  dog.scale =0.3

  database = firebase.database();
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);

}


function draw() {  

 background(46, 139, 87)

 if(keyWentDown(UP_ARROW))
 {
   writeStock(food);
   dog.addImage(dog1);
  }
 

 
 
   




  
 


  drawSprites();
 
  textSize (20);
  fill("black")
  stroke("black");
  strokeWeight(0.5);
  text("Note:Press UP_ARROW KEY to feed Drago Milk",40,50);
  

  text("Food Remaining :" +food , 150,100);
  textSize (15);
  fill("black");
  stroke("black");
  strokeWeight(0.5);

 
}

function readStock(data)
{
food = data.val()
}

function writeStock(x)
{

  if (x<=0)
  {
    x=0
  }else{
    x=x-1;
  }

   
  database.ref('/').update ({
    Food:x
  })

 
  
}

