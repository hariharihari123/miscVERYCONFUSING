
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var misc,ground;
var invisibellol,cube,whiteimg,humanpng,miscimg,greyimg,blackimg,cloudbgimg,cloudbg,startbuttonimg,
startbuttonanimation,floor1img,startbuttonimg2;
var gamestate,startingscreen,beforehumanmeetsmisc,humanmeetsmisc,testforthewalkinganimations;
var entercount,floort;
var misc1img,human1img,human2img,misc2img;
var startbutton;
var human2imgsprite,human1imgsprite,misc1imgsprite,misc2imgsprite;
entercount =0;
gamestate = startingscreen;
humanmeetsmisc = 0;
beforehumanmeetsmisc = 0;
testforthewalkinganimations = 0;
//gamestate = humanmeetsmisc;
var white,human,miscmeethuman,gmh;

function preload()
{
  cube = loadAnimation('c2p.png','c1p.png','c3p.png','c4p.png');
  humanpng = loadImage('human.png');
  whiteimg = loadImage('whitebg.png');
  miscimg = loadImage('c4p.png');
  misc1img = loadImage('editedmisc1.png');
  human1img = loadImage('editedhuman1.png');
  human2img = loadImage('editedhuman2.png');
  invisibellol = loadImage('invis.png');
  misc2img = loadImage('editedmisc2.png');
  greyimg = loadImage('greyimg.png');
  blackimg = loadImage('blackimg.png');
  cloudbgimg = loadImage('cloudbackground.png');
  startbuttonimg = loadImage('start.png');
  startbuttonimg2 = loadImage('start2.png');
  floor1img = loadImage('floor1.png');
  //startbuttonanimation = loadAnimation('start.png','start2.png','start.png');
}

function setup() 
{
  engine = Engine.create();
  world = engine.world;

  createCanvas(displayWidth,displayHeight);
  //ground = new Ground (displayWidth/4,displayHeight/2 + 100,2*displayWidth ,10);
  ground = new Ground (displayWidth/2,displayHeight/2 + 100,displayWidth,30);
  misc = new Box (displayWidth/5 ,displayHeight/2 ,50,50);
  floort = new floor(displayWidth/2,displayHeight/2,2000,2000);

}

function draw()
 {
  Engine.update(engine);
 
  //console.log(gamestate);
  console.log(entercount);
  if(gamestate == humanmeetsmisc)
  {
   x(); 
  }

  if(gamestate == startingscreen)
  {
   y();
  }

  if(gamestate == beforehumanmeetsmisc)
  {
    
  }
  if(gamestate==testforthewalkinganimations){
    clear();
    //startbutton.destroy();
  //var test2 = createSprite(10,10,200,200);
  //test2.addImage(cloudbgimg);
  //test2.scale = 3;
  
  }
  floort.display();
  entercountishard();
  ground.display();
  misc.display();
  drawSprites();

}

function entercountishard(){
  if(keyCode == 13 && gamestate == humanmeetsmisc){
    entercount = entercount +3;
    }
    //console.log(entercount);
}
function x(){
  background(255);
   /*var gamestatehumanmeetsmisc = createSprite(displayWidth/2,displayHeight/2,displayWidth*2 + displayWidth*2,
      displayHeight*2 + displayHeight*2);
      gamestatehumanmeetsmisc.addImage(blackimg);*/
   
      white = createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight);
      white.addImage(whiteimg);
      white.scale = 10;
      human = createSprite(displayWidth/2 + 625,displayHeight/2,50,50);
      human.addImage(humanpng);
    //white.depth =1;
    //human.depth =  white.depth
    
      miscmeethuman = createSprite(displayWidth/2 - 625,displayHeight/2 + 69,50,50);
      miscmeethuman.addImage(miscimg);
      gmh = createSprite(displayWidth/2,displayHeight/2 + 550,displayWidth + displayWidth,20);
      gmh.addImage(greyimg);
      gmh.scale= 2;
      //miscmeethuman.collide(gmh);
      if(entercountishard&&entercount < 150&&keyCode == 13){
      misc1imgsprite = createSprite(displayWidth/2 - 570,displayHeight/2 - 40);
      misc1imgsprite.addImage(misc1img);
      }
      if(entercount > 150){
      human1imgsprite = createSprite(displayWidth/2 + 560,displayHeight/2 - 170 );
      human1imgsprite.addImage(human1img);
      misc1imgsprite.addImage(invisibellol);
      }
      if(entercount > 250){
      human2imgsprite = createSprite(displayWidth/2 + 560,displayHeight/2 - 170);
      human2imgsprite.addImage(human2img);
      human1imgsprite.addImage(invisibellol);
      }
      if(entercount > 250){
        human.x = human.x -10;
        //human.debug = true;
        }
      if(entercount > 350){
      misc2imgsprite = createSprite(displayWidth/2 - 570 ,displayHeight/2 - 40);
      misc2imgsprite.addImage(misc2img);
      human2imgsprite.addImage(invisibellol);
      }
      if(entercount == 0){
      //test2.addImage(invisibellol);
      }
      if(entercount > 450){
      gamestate = testforthewalkinganimations;
      }
}
function y(){
  //background(cloudbgimg);
  beforehumanmeetsmisct =1;
  cloudbg = createSprite(displayWidth/2,displayHeight/2,20,20);
  cloudbg.addImage(cloudbgimg);

  startbutton = createSprite(displayWidth/2,displayHeight/2,20,20);
  startbutton.addImage(startbuttonimg);

 cloudbg.scale = 2;
  if(mouseDown(LEFT)&&mouseY > 350 && mouseY < 420&&mouseX > 500&&mouseX < 800){
    //humanmeetsmisc = 0;
    gamestate = humanmeetsmisc;
  }
  if(mouseDown&&mouseY > 350 && mouseY < 420&&mouseX > 500&&mouseX < 800){
  startbutton.addImage(startbuttonimg2);
  }
  /*if(keyCode == 13){
  beforehumanmeetsmisc = 0;
  gamestate = beforehumanmeetsmisc;
  }*/
}