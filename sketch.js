'use strict';


let state = 'title';
let cnv;
let points = 0;
let w = 400;
let h = 400;
let player;
let coins = [];
let playerImg;
let coinImg;


function preload(){
  playerImg = loadImage('assets/player.png');
  coinImg = loadImage('assets/coin.jpg');
}



function setup() {
  cnv = createCanvas(w, h);
  textFont('monospace');
  player = new Player();
  // coins[0] = new Coin();
  coins.push(new Coin);
}

function draw() {


  switch (state) {
    case 'title':
      title();
      cnv.mouseClicked(titleMouseClicked);
      break;
    case 'level 1':
      level1();
      cnv.mouseClicked(level1MouseClicked);
      break;
    case 'YOU WIN':
      youWin();
      cnv.mouseClicked(youWinMouseClicked);
      break;
    default:
      break;
  }



}


function keyPressed() {
  if (keyCode == LEFT_ARROW) {
    player.direction = 'left';
  } else if (keyCode == RIGHT_ARROW) {
    player.direction = 'right';
  } else if (keyCode == UP_ARROW) {
    player.direction = 'up';
  } else if (keyCode == DOWN_ARROW) {
    player.direction = 'down';
  } else if (key = ' ') {
    player.direction = 'still';
  }
}

function title() {
  background(0);
  textSize(10);
  fill(255);
  textAlign(CENTER);
  text('ZA WARUDO', w / 2, h / 5);
  text('click anywhere to start', width / 2, h / 2);
  textSize(10);

}

function titleMouseClicked() {

  console.log('canvas is clicked on title page');
  state = 'level 1';

}

function level1() {
  background(50, 150, 200);
  text('DIO!', 0, height - 50);
  textSize(30);
  text('ORA ORA ORAs:' + points, 0, height - 10);
  textSize(30);



  if (random(1) <= 0.01) {
    coins.push(new Coin());
  }



    player.display();
    player.move();

//iterating through coins array to display and move them
// using for loop
// for (let i = 0; i < coins.length; i++) {
//   coins[i].display();
//   coins[i].move();
// }

// using for each method

coins.forEach(function(coin) {

  coin.display();
  coin.move();


})





  for (let i = coins.length -1; i >= 0; i--) {

    //check for collision, if there is collision then increase point by 1
    if (dist(player.x, player.y, coins[i].x, coins[i].y) <= (player.r + coins[i].r) / 2) {
      points++;
      console.log(points);
      coins.splice(i,1);
    }else if (coins[i].y > h) {
      coins.splice(i,1);
    }

  }

  text(`Points: ${points} `);

}

function level1MouseClicked() {

  // points++;
  // if(points >= 10){
  //   state = 'YOU WIN';
  // }
}



function youWin() {
  background(255, 50, 80);
  textSize(80);
  stroke(255);
  text('ROADA ROLLA DA', 100, 100);
  text('click anywhere to re-start', 70, 300);
  textSize(10);
}

function youWinMouseClicked() {
  state = 'level 1';
  points = 0;
}
