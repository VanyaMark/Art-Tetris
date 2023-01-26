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

       const ctx = myGameArea.context

        // render the background
        ctx.drawImage(background.img, background.x, background.y, myGameArea.canvas.width, myGameArea.canvas.height)
        ctx.drawImage(background.img, background.x + background.w, background.y, myGameArea.canvas.width, myGameArea.canvas.height)

        background.x--
        if (background.x < -background.w) background.x = 0

        //it's not GameOver - render the game

        if(!myGameArea.isGameOver) {
            myGameArea.components.forEach(component => {
                component.render()
            })

            if (paintingsArray[0].checkCollision(museum1) && paintingsArray[0].type == museum1.type) {
                score++;
                console.log(`score: ${score}`);
                console.log(paintingsArray[0].type);
                console.log(museum1.type);
                paintingsArray.shift();
                console.log(`Paintings Array at this point: ${paintingsArray}`);
            }
            else if (paintingsArray[0].checkCollision(museum1) && paintingsArray[0].type != museum1.type) {
                myGameArea.isGameOver = true; 
            }

            if (paintingsArray[0].checkCollision(museum2) && paintingsArray[0].type == museum2.type) {
                score++;
                console.log(`score: ${score}`);
                console.log(paintingsArray[0].type);
                console.log(museum2.type);
                paintingsArray.shift();
                console.log(`Paintings Array at this point: ${paintingsArray}`); 
            }
            else if (paintingsArray[0].checkCollision(museum2) && paintingsArray[0].type != museum2.type) {
                myGameArea.isGameOver = true;
            }

            if (paintingsArray[0].checkCollision(museum3) && paintingsArray[0].type == museum3.type) {
                score++;
                console.log(`score: ${score}`);
                console.log(paintingsArray[0].type)
                console.log(museum3.type)
                paintingsArray.shift();
                console.log(`Paintings Array at this point: ${paintingsArray}`); 
            }
            else if (paintingsArray[0].checkCollision(museum3) && paintingsArray[0].type != museum3.type) {
                myGameArea.isGameOver = true;
            }
            if (myGameArea.isGameOver == true) {
                if (score <= 8) {
                    ctx.clearRect(0, 0, myGameArea.canvas.width, myGameArea.canvas.height);
                    document.getElementById("game-over").style.display = "flex";
                    let result = document.getElementById("result");
                    result.innerHTML = `Your score is ${score}. Keep practicing! You've got a long way to go!`

                    console.log(`score: ${score}`);
                    console.log(`Keep practicing! You've got a long way to go!`);
                    console.log(paintingsArray[0].type);
                    console.log(museum3.type);
                }
                else if (score <= 16) {
                    ctx.clearRect(0, 0, myGameArea.canvas.width, myGameArea.canvas.height);
                    document.getElementById("game-over").style.display = "flex";
                    let result = document.getElementById("result");
                    result.innerHTML = `Your score is ${score}. You are doing fine, but don't stop practicing!`

                    console.log(`score: ${score}`);
                    console.log(`You're doing fine, but don't stop practicing!`);
                    console.log(paintingsArray[0].type);
                    console.log(museum3.type);
                }
                else if (score <= 24) {
                    ctx.clearRect(0, 0, myGameArea.canvas.width, myGameArea.canvas.height);
                    document.getElementById("game-over").style.display = "flex";
                    let result = document.getElementById("result");
                    result.innerHTML = `Your score is ${score}. Good job! You are almost there!`

                    console.log(`score: ${score}`);
                    console.log(`Good job! You are almost there`);
                    console.log(paintingsArray[0].type);
                    console.log(museum3.type);
                }
                else if (score > 30) {
                    ctx.clearRect(0, 0, myGameArea.canvas.width, myGameArea.canvas.height);
                    document.getElementById("game-over").style.display = "flex";
                    document.getElementById("result")
                    let result = document.getElementById("result");
                    result.innerHTML = `Your score is ${score}. Awesome! You are officially an art expert!`

                    console.log(`score: ${score}`);
                    console.log(`Awesome! You are officially an art expert!`);
                    console.log(paintingsArray[0].type);
                    console.log(museum3.type);
                }
            }

        }

        paintingsArray.forEach(painting => {
            painting.y += 0.2;
            painting.render();
        })

        paintingsArray[0].checkCollisionToWalls();

        if (score >= 15) {
            paintingsArray[0].fasterSpeed();
        }  
    }

};

myGameArea.start();