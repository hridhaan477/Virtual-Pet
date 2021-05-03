//Create variables here
var dog,happyDog,databse,foodS,foodStock;
var dogImage,dogImage1;

function preload()
{
	//load images here
  dogImage=loadImage("images/dog1.png");
  dogImage1=loadImage("images/dog2.png");
}

function setup() {
	createCanvas(500, 500);
  database=firebase.database();

  dog=createSprite(200,350,10,10);
  dog.addImage(dogImage);
  dog.scale=0.3;
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);

  
}


function draw() {  
  background(255,255,254);

  if(keyWentDown(UP_ARROW)){
writeStock(foodS);
dog.addImage(dogImage1);

  }


  drawSprites();
  //add styles here
stroke("black");
text("Food remaining: "+foodS,170,200);
textSize(13);
text("Press Up Arrow Key To Feed The Dog",130,10,300,20);
}

function writeStock(x){
  if(x<=0){
    x=0;
  }
else{
 x=x-1; 
}
database.ref('/').update({
  Food:x
})
}

function readStock(data){
  foodS=data.val();
}

