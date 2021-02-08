var robot, r1;
var music;
var a;

function preload(){
   
    r1= loadAnimation("frame_24_delay-0.03s-removebg-preview.png", 
    "frame_04_delay-0.03s-removebg-preview.png", 
    "frame_08_delay-0.03s-removebg-preview.png", 
    "frame_12_delay-0.03s-removebg-preview.png")


    music = loadSound("Undertale Asriel Dreemurr Theme.mp3");
}


function setup(){
    canvas = createCanvas(1366, 657);
robot = createSprite(200, 500);
robot.addAnimation("r", r1);
robot.scale = 0.5;

a = createSprite(0, 10, 10, 10);


}

function draw() {
    background(rgb(169,169,169));

  
    
    
   if(a.x === 15)
   {
    music.play();
   }
   a.velocityX = 1;
   
  
drawSprites();


 
}

