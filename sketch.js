'use strict';


let state = 'title';
let cnv;
let points = 0;
let w = 800;
let h = 450;
let player;
let enemies = [];
let playerImg;
let enemyImg;
let damageSound;

function preload() {

  //character assets made by me
  playerImg = loadImage('assets/player.png'); //preloads the images
  enemyImg = loadImage('assets/infected.png');

  //sound effect found on http://soundbible.com/995-Jab.html
  damageSound = loadSound('assets/damage.mp3'); //pre-load sound effect
}



function setup() {
  soundFormats('mp3');
  cnv = createCanvas(w, h);
  textFont('monospace');
  player = new Player();

  enemies.push(new Enemy);
}

function draw() {

  //switch statements for events
  switch (state) {
    case 'title':
      title();
      cnv.mouseClicked(titleMouseClicked); ///when mouse is click event occurs
      break;
    case 'level 1':
      level1();
      cnv.mouseClicked(level1MouseClicked);
      break;
    case 'GAME OVER!':
      infected();
      cnv.mouseClicked(restart);
      break;
    default:
      break;
  }



}

//function when keys are pressed by user.
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

//title screen
function title() {
  background(0);
  textSize(50);
  fill(255);
  textAlign(CENTER);
  text('SOCIAL DISTANCING: THE GAME', w / 2, h / 5);
  textSize(25);
  text('Avoid the infected for as long as possible', width / 2, h / 3);

  text('click anywhere to start', width / 2, h / 2);
  textSize(50);

}


//function for when user clicks on screen
function titleMouseClicked() {


  state = 'level 1';

}

//level 1 function
//spawns enemies and allows player to move around
function level1() {
  background(50, 150, 200);
  textSize(30);
  text('CONTACT WITH INFECTED:' + points, 200, height - 10);
  textSize(30);


  if (points >= 10) {
    state = 'GAME OVER!'; //game over screen

  }


  //determines the number of objects spawning
  if (random(1) <= .05) {
    enemies.push(new Enemy()); //enemy spawn
  }



  player.display(); // displays player
  player.move(); // allows player to move



  enemies.forEach(function(enemies) {

    enemies.display(); //displays the enemy
    enemies.move(); //allows for enemy movement along the y axis


  })





  for (let i = enemies.length - 1; i >= 0; i--) {

    //check for collision, if there is collision then increase point by 1
    if (dist(player.x, player.y, enemies[i].x, enemies[i].y) <= (player.r + enemies[i].r) / 2) {
      points++; //adds points whenever player comes into contact with enemy
      console.log(points);
      enemies.splice(i, 1); //de-spawns enemy objects
      damageSound.play(); //plays sound whenever player is damaged
    } else if (enemies[i].y > h) {
      enemies.splice(i, 1);
    }

  }

  text(`Points: ${points} `);

}


//filler function that allows for mouse clicking event
function level1MouseClicked() {

}


//game over function
function infected() {
  background(255, 50, 80);
  textSize(30);
  stroke(255);
  text('YOU GOT INFECTED!', 350, 100);
  text('click anywhere to re-start', 350, 300);
  textSize(10);
}

//function that allows the player to restart after clicking the screen
function restart() {
  state = 'level 1';
  points = 0;
}
