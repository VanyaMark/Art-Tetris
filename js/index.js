const myGameArea = {
    canvas: document.createElement("canvas"),
    components: [],
    isGameOver: false,
    start: function () {
        this.canvas.width = 750;
        this.canvas.height = 1200;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    },
    update: function() {

       /* const ctx = myGameArea.context

        // render the background
        ctx.drawImage(background.img, background.x, background.y, myGameArea.canvas.width, myGameArea.canvas.height)
        ctx.drawImage(background.img, background.x + background.w , background.y, myGameArea.canvas.width, myGameArea.canvas.height)

        background.x--
        if (background.x < -background.w) background.x = 0 */

        paintingsArray.forEach(painting => {
            painting.y += 0.2;
            painting.render();
        })

        //it's not GameOver - render the game

        if(!myGameArea.isGameOver) {
            myGameArea.components.forEach(component => {
                component.render()
            })

            //Check for collisions
            paintingsArray.forEach(painting => {
                
                if (painting.checkCollision(museum1)) {
                    score++;
                    paintingsArray.shift;
                    console.log(score);
                    console.log(paintingsArray);
                }

                else if (painting.checkCollision(museum1) && (painting.type != museum1.type)) {
                    myGameArea.isGameOver = true
                    ctx.clearRect(0,0, myGameArea.canvas.width, myGameArea.canvas.height)
                    document.getElementById("game-over").style.display = "flex"

                }

             /*   if (painting.checkCollision(museum1)) {
                    alert('collided')  
                } */
            })
        
        }

         
    }

};

myGameArea.start();

let background = new Component(0, 0, myGameArea.canvas.width, myGameArea.canvas.height, "pink");
myGameArea.components.push(background); // maybe use sort function to sort properly (Ex. background in the end)

let score = 0;

let painting1 = new Painting(0, 0, 150, 150, "green", "baroque");
let painting2 = new Painting(210, 0, 150, 150, "#90ee90", "romanticism");
let painting3 = new Painting(400, 0, 150, 150, "#faf0e6", "modernArt");
let painting4 = new Painting(570, 0, 150, 150, "#ff4500", "baroque");
myGameArea.components.push(painting1, painting2, painting3, painting4);
let paintingsArray = [];
paintingsArray.push(painting1, painting2, painting3, painting4);
console.log(paintingsArray);

let museum1 = new Museum(0, (myGameArea.canvas.height - 200), 250, 200, "yellow", "baroque");
myGameArea.components.push(museum1);
let museum2 = new Museum(250, (myGameArea.canvas.height - 200), 250, 200, "orange", "romanticism");
myGameArea.components.push(museum2);
let museum3 = new Museum(500, (myGameArea.canvas.height - 200), 250, 200, "purple", "modernArt");
myGameArea.components.push(museum3);

let museumArray = [];
museumArray.push(museum1, museum2, museum3);
console.log(myGameArea.components)

// painting1.checkCollision(museum1)

setInterval(myGameArea.update, 100 / 60);



