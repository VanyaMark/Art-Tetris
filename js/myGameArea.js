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

            paintingsArray[0].checkCollision(museum1);

            //Check for collisions
            /* paintingsArray.forEach(painting => {
                
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

                } */

             /*   if (painting.checkCollision(museum1)) {
                    alert('collided')  
                } 
            })*/
        
        }

         
    }

};

myGameArea.start();