class Enemy {
  constructor() { //instructions on how to set up the object

    this.r = 100;

    this.x = random(w);
    this.y = 0 - this.r;






  }


  display() {

    image(enemyImg, this.x, this.y, this.r, this.r); //displays image

  }
  move() { //movement speed
    this.y += 2.3;

  }

}
