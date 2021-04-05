var option1,opton2,option3,option4;
var question;
var game='easy';
var score=0;
var c,g,d,e,f;
var i=1;
var option11,option12,option13,option14;
var a,b;
var gameState='Play';
var next;
var restart;
function preload(){

}
function setup(){
    createCanvas(500,500)
    option1=createSprite(100,200,80,40)
    option2=createSprite(200,200,80,40)
    option3=createSprite(300,200,80,40)
    option4=createSprite(400,200,80,40)
    next=createSprite(400,450,80,40)
    next.shapeColor='red';
}
function draw(){
    background('red');
    fill("black")
    textSize(20)
    text("Score: "+score,50,50)
  if(gameState=='Play'){
    if (game=='easy'&&mousePressedOver(next)){
        var x=100;
        var y=200;
        a=Math.round(random(x,y))
        b=Math.round(random(x,y))
        c=a+b;
        d=a+b+2;
        g=a+b+1;
        e=a+b-2;
        f=Math.round(random(1,4))
        game='mid';
    }
    if (f==1){
        option11=c;
        option12=g;
        option13=e;
        option14=d;
    }
    if (f==2){
        option11=e;
        option12=c;
        option13=d;
        option14=g;
    }
    if (f==3){
        option11=g;
        option12=e;
        option13=c;
        option14=d;
    }
    if (f==4){
        option11=g;
        option12=e;
        option13=d;
        option14=c;
    }
    drawSprites()
    text(option11,83,210)
    text(option12,183,210)
    text(option13,283,210)
    text(option14,383,210)
    //text('Next',380,458)
    text('Next',380,458)
    if (mousePressedOver(option1)&&option11==c){
        score+=30;
        game='medium';
        gameState='pause';
    }
    else if((option11==g||option11==d||option11==e)&&mousePressedOver(option1)){
        score=score-20;
        game='easy';
        gameState='pause';
    }
    else{
        score=score;
    }
    if (mousePressedOver(option2)&&option12==c){
        score+=30;
        game='medium';
        gameState='pause';
    }
    else if((option12==g||option12==d||option12==e)&&mousePressedOver(option2)){
        score=score-20;
        game='easy';
        gameState='pause';
    }
    else{
        score=score;
    }
    if (mousePressedOver(option3)&&option13==c){
        score+=30;
        gameState='pause';
        game='medium';
    }
    else if((option13==g||option13==d||option13==e)&&mousePressedOver(option3)){
        score=score-20;
        gameState='pause';
        game='easy';
    }
    else{
        score=score;
    }
    if (mousePressedOver(option4)&&option14==c){
        score+=30;
        game='medium';
        gameState='pause';
    }
    else if((option14==g||option14==d||option14==e)&&mousePressedOver(option4)){
        score=score-20;
        gameState='pause';
        game='easy';
    }
    else{
        score=score;
    }
    if (game=='medium'){
        var x=200;
        var y=700;
        a=Math.round(random(x,y))
        b=Math.round(random(x,y))
        c=a+b;
        d=a+b+2;
        g=a+b+1;
        e=a+b-2;
        f=Math.round(random(1,4))
        game='mid';
    }
    if (i==1){
     text("Question:- "+a+"+"+b,170,100)
 
    }
    if (i==1){
     text("Question:- "+a+"+"+b,170,100)
 
    }
    if (score<0){
       gameState='end';
    }
  // if(mousePressedOver(next)){
    //   i=1
      // gameState='Play';
   //}
   console.log(c);
  }
  if(gameState=='end'){
      background('black')
      fill('white')
      textSize(30)
      text("Game Over",170,200)
    }
  if(gameState=='pause'){
    console.log("test")
    text('Next',380,458)
   if(mousePressedOver(next)){
    i=1
    gameState='Play';
    }
  }
}