class Player {
  constructor() { //instructions on how to set up the object
    this.r = 100;
    this.x = w / 2;
    this.y = h - this.r;
    this.direction = 'still';
    this.speed = 2;
  }

  display() {
    image(playerImg, this.x, this.y, this.r, this.r); //displays image

  }

  move() {
    switch (this.direction) { //player movement of object
      case 'still':
        //dont move anything

        break;

        //allows for player movement events

      case 'up':

        //decrease y position
        if (this.y > 0) {
          this.y -= this.speed;
        }
        break;



      case 'down':
        //increase y position
        if (this.y < h - this.r) {
          this.y += this.speed;
        }
        break;
      case 'right':
        //increase x positon
        if (this.x < w - this.r) {
          this.x += this.speed;
        }
        break;
      case 'left':

        //decrease x position
        if (this.x > 0) {
          this.x -= this.speed;
        }
        break;
      default:
        break;
    }




  }
}
