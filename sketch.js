var fixed_rect, moving_rect;

function setup() {
  createCanvas(1200,800);
  fixed_rect = createSprite(200, 200, 50, 80);
  moving_rect = createSprite(400, 200, 80, 50);
  fixed_rect.shapeColor = "green";
  moving_rect.shapeColor = "green";
  fixed_rect.debug = true;
  moving_rect.debug = true;
  moving_rect.velocityX = -2;
  fixed_rect.velocityX = 2;
  moving_rect.velocityY = 2;
  fixed_rect.velocityY = 2;
  
}

function draw() {
  console.log(moving_rect.x - fixed_rect.x);
  background(255,255,255); 
  
  

  
  bounceOff(moving_rect, fixed_rect);

  drawSprites();
}