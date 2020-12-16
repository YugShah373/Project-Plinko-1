var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;
var grnd;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  grnd = new Ground(800, 200, 800, 50);
}

function draw() {
  background(255,255,255);  
    
  plinkoCreate();
  particleCreate();
  divisionCreate();

  drawSprites();
}
function plinkoCreate(){
  for(var j = 40; j<=width; j+=50){
    plinkos.push(new Plinko(j, 75))
  }
  for(var j = 15; j<=width-10; j+=50){
    plinkos.push(new Plinko(j, 175))
  }
  for(var j = 40; j<=width; j+=50){
    plinkos.push(new Plinko(j, 275))
  }
  for(var j = 15; j<=width-10; j+=50){
    plinkos.push(new Plinko(j, 375))
  }
  for(var j = 0; j<particle.length; j++){
    particles[j].display();
  }
}
function particleCreate(){
  if(frameCount%60==0){
    particles.push(new Particle(random(width/2-10, width/2+10), 10, 10));
  }
}
function divisionCreate(){
  for(var k = 0; k<=width; k+=80){
    divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
    
  for(var k = 0; k<divisions.length; k++){
    divisions[k].display();
  }
  }
}