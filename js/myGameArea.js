const myGameArea = {
    canvas: document.createElement("canvas"),
    components: [],
    isGameOver: false,
    start: function () {
        this.canvas.width = 450;
        this.canvas.height = 600;
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

        //it's not GameOver - render the game

        if(!myGameArea.isGameOver) {
            myGameArea.components.forEach(component => {
                component.render()
            })

            if (paintingsArray[0].checkCollision(museum1) && paintingsArray[0].type == museum1.type) {
                score++;
                console.log(`score: ${score}`);
                console.log(paintingsArray[0].type)
                console.log(museum1.type)
                paintingsArray.shift();
                console.log(paintingsArray); //works but stays on top of the museum, has to fall inside
            }
            else if (paintingsArray[0].checkCollision(museum1) && paintingsArray[0].type != museum1.type) {
                alert('game over');
            }

            if (paintingsArray[0].checkCollision(museum2) && paintingsArray[0].type == museum2.type) {
                score++;
                console.log(`score: ${score}`);
                console.log(paintingsArray[0].type)
                console.log(museum2.type)
                paintingsArray.shift();
                console.log(paintingsArray); //works but stays on top of the museum, has to fall inside
            }
            else if (paintingsArray[0].checkCollision(museum2) && paintingsArray[0].type != museum2.type) {
                alert('game over');
            }

            if (paintingsArray[0].checkCollision(museum3) && paintingsArray[0].type == museum3.type) {
                score++;
                console.log(`score: ${score}`);
                console.log(paintingsArray[0].type)
                console.log(museum3.type)
                paintingsArray.shift();
                console.log(paintingsArray); //works but stays on top of the museum, has to fall inside
            }
            else if (paintingsArray[0].checkCollision(museum3) && paintingsArray[0].type != museum3.type) {
                alert('game over');
            }
        }

        paintingsArray.forEach(painting => {
            painting.y += 0.2;
            painting.render();
        })
         
    }

};

myGameArea.start();