class Enemy {
  constructor() {

    this.r = 100;

    this.x = random(w);
    this.y = 0 - this.r;






  }


display(){

  image(enemyImg,this.x, this.y,this.r, this.r);

}
  move(){
    this.y+= 2.3;

  }

}
