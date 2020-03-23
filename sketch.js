var ball;
var a;

function setup() {
  createCanvas(400, 400);

  ball = createSprite(200, 200, 60, 60);
  ball.shapeColor = "blue";

  a = createSprite(200, 100, 200, 10);
  a.shapeColor = "brown";
}

function draw() {
  background("green");

  ball.collide(a);

  text("hold space to move the pendulum", 50, 20);
  text("press enter to stop the pendulum", 50, 10);

  if (keyCode === 32){
    ball.position.y = mouseY;
    ball.position.x = mouseX;
    ball.collide(a);
    }
    
    else if (keyCode === ENTER){
    ball.position.x = 200;
    
    }

  drawSprites();
}