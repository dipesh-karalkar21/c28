function preload() {
  //load game assets
 
}
var player;
var wormgroup;
var score=0;

function setup() {
  createCanvas(600,600);
 player=createSprite(40,500,30,30);
  //group fro the worms
  wormgroup=new Group();
}

function draw() {
  background("black");
  //mouse control
  player.x=mouseX;
  player.y=mouseY;
  //infinite sprites from elipes
  stroke("red");
  noFill();

  ellipse(100,350,40,30);
  //call the function
  generateworms();
    //to avoid cheating
  if(player.x<150 && player.x>90 && player.y<318 && player.y>320){
      text("no cheating",200,200);
      player.x=30;
      player.y=30;
      console.log("error");
    }
  
  //player interacting with worms
  for(var i=0;i<(wormgroup).length;i++){
    var temp=(wormgroup).get(i);
    if(player.isTouching(temp)){
      score=score+1;
      temp.destroy();
      temp=null;
    }
  }
  console.log(frameCount);
  drawSprites();  
  textSize(20);
  text("Score="+score,350,350);
}
function generateworms(){
  if(frameCount%30===0){
    var worms=createSprite(100,350,30,10);
  worms.velocityX=random(-4,4);
  worms.velocityY=random(-4,4);
  worms.shapeColor="green";
    wormgroup.add(worms);
  }
  
}