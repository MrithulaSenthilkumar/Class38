var canvas;
var gameState=0;
var playerCount;
var database;
var form,player,game;
var allplayers;
var car1,car2,car3,car4;
var cars;

function setup(){
  database= firebase.database();
  canvas=createCanvas(displayWidth+300,displayHeight+50);

  game= new Game();
  game.getState();
  game.start();

}

function draw(){
  background("white");

 if(playerCount===4){
    game.update(1);
 }
  
    if(gameState===1){
      clear ();
      game.play();
    }
  
}

