var rocketImg;
var spaceImg, space;


function preload(){

    rocketImg = loadImage("rocket.png");
    spaceImg = loadImage("space bgrnd.jpg");
}

function setup() {
    createCanvas(600,600);
    space = createSprite(300,300,600,600);
    space.addImage(spaceImg);

 
}

function draw() {
    drawSprites();

    space.velocityY = 5;

    if(space.y > 400){
        space.y = 300
      }
 
}