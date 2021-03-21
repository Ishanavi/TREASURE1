var diver,apple,bg;
var gamestate = 0;


function preload()
{
   diver = loadImage("IMAGES/diver4.png");
   bg = loadImage("IMAGES/BhQ8iO.jpg");
}


function setup() 
{
  createCanvas(windowWidth,windowHeight);
   //var apple =createSprite(400, 200, 50, 50);
  // apple.addImage("d1",diver)

  

}

function draw()
 {

 
 

if(gamestate === 0)
  {
    background("black");

    textSize(30);
    text("UNDERWATER TREASURE HUNT",windowWidth/2-190,30);

    textSize(25);
    text("GOAL OF THE GAME: Help the pirate to collect the maximum treasure in the specified time and protect him ",30,80);
    text("from the sea monsters.",30,105)

    textSize(25);
    text("Instructions:",30,150);

    textSize(20);
    text("1. Press 'S' key to start the game.",30,170);
    text("2. Use right, up and down arrow keys to move the diver.",30,190);
    text("3. Overcome the obstacles and collect the treasure within the time limit.",30,210);
    text("4. Collect the money bags to get extra lives(collecting 3 bags will give 1 extra life).",30,230);

    drawSprites();
  }

 else if(gamestate === 1)
 {
  background(bg);  
  drawSprites();
 }

}