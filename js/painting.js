class Painting extends Component{
    constructor (x, y, w, h, color, /*image,*/ type) {
      super(x, y, w, h, color)
      this.type = type;
      this.ySpeed = 30;
      this.gravity = 0.3;
      /* let img = new Image();
      img.src = image;
      this.img = img; */
      
    }
    moveLeft() {
      this.x -= 10;
    }
    moveRight() {
      this.x += 10;
    }
    moveUp() {
      this.y -= 10;
    }
    moveDown() {
        this.y += 30; // !!! Wanna add Gravity here
      //this.ySpeed = this.ySpeed - this.gravity;
    } 
  }
