//Create variables here
var  database ;
var  dog , happyDog , dogImage ; 
var  foodS , foodStock ;
function preload()
{
  //load images here
  
  dogImage = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  

  database = firebase.database();
   console.log(database);
   foodLeft = database.ref('Food');
   foodLeft.on("value" , readFoodLeft );


  dog = createSprite(200,200);
  dog.addImage(dogImage);
  dog.scale = 0.2 ;
}


function draw() {  
background(46,139,87);

if(keyDown(UP_ARROW)) {
writeStock(foodS);
dog.addImage(happyDog);

}
  drawSprites();
  fill(255,255,254);
   stroke("black");
   
 text("Note: Press UP_ARROW Key To Feed Drago Milk!",130,10,300,20);
  //add styles here
  text("foodStock" + foodS , 170 , 50 );
  textSize(30);
   fill("red");
   stroke(10);


}

function readFoodLeft(data){
  foodS=data.val();
}

function writeStock(x){
if(x<=0){
  x = 0
} else{x=x-1}

 database.ref('/').update({
  Food:x
   
 })
 
}

