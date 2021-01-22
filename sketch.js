var dataBase;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;

var player, form,game;
var player1,player2;
var players;
var fruits;
var fruitCount=0
var fruitGroup;
var fruit1_img, fruit2_img, fruit3_img, fruit4_img, fruit5_img;
var player_img;
var game
var plr1Score=0
var plr2Score=0

function preload(){
  back_img = loadImage("images/jungle.jpg");
  player_img = loadImage("images/basket2.png");
  fruit1_img = loadImage("images/apple2.png");
  fruit2_img = loadImage("images/banana2.png");
  fruit3_img = loadImage("images/melon2.png");
  fruit4_img = loadImage("images/orange2.png");
  fruit5_img = loadImage("images/pineapple2.png");
  fruitGroup = new Group();
}
function setup() {
  createCanvas(1000, 600);
  dataBase = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  //game.getScore()
}

function draw() {

  background(back_img);
  
   if (playerCount === 2) {
     game.update(1);
   }
   if (gameState === 1) {
     clear(); 
     game.play();

    //  fill("gold")
    //  textSize(20)
    //  text("Player 1's score: "+plr1Score, 50, 100)
   
    //  fill("gold")
    //  textSize(20)
    //  text("Player 2's score: "+plr2Score, 50, 200)
   }
   if (gameState === 2) {
    
     game.end();
   }
}