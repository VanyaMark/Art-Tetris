class Museum extends Component {
    constructor (x, y, w, h, image, type) {
        super(x, y, w, h);
        this.type = type;
        let img = new Image();
        img.src = image;
        this.img = img;
    }
}