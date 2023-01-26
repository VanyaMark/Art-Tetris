class Painting extends Component{
    constructor (x, y, w, h, image, type) {
      super(x, y, w, h)
      this.type = type;
      this.ySpeed = 1;
      this.gravity = 0.1;
      let img = new Image();
      img.src = image;
      this.img = img;
      
    }
    moveLeft() {
      this.x -= 10;
    }
    moveRight() {
      this.x += 10;
    }
   /* moveUp() {
      this.y -= 10;
    } */
    moveDown() {
        this.y += 30; 
        // !!! Wanna add Gravity here
      //this.ySpeed = this.ySpeed - this.gravity;
      //player.y -= player.ySpeed
    } 

    checkCollisionToWalls() {
      if (this.x < 0)
      {
        this.moveRight()
        console.log("Painting out of game area")
      }
      else if (this.x + this.w > myGameArea.canvas.width) {
       this.moveLeft();
       console.log("Painting out of game area")
     }
   }
   fasterSpeed() {
    this.y += 0.5;
    console.log("faster speed"); 
   }

    enterDrop() {
// ------- FAILED TO ADD GRAVITY HERE / ASK DIOGO -----------
   /* this.ySpeed = this.ySpeed - this.gravity
    this.y -= this.ySpeed; */ 
    this.y += 200;
    console.log("Painting dropped with Enter button")
   }
  }


  /* painting.ySpeed = painting.ySpeed - painting.gravity
          painting.y -= painting.ySpeed
          painting.render();
          console.log("gravity check") */