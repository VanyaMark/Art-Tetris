

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

/* let collisionCheckTest = (target1, target2) => {
    if (
        target1.x < target2.x + target2.w  &&
        target1.x + target1.w > target2.x &&
        target1.y < target2.y + target2.h  &&
        target1.y + target1.h > target2.y
    ) {
        console.log('collided check');
        paintingsArray.shift();
        console.log(paintingsArray);
        alert('Game over');
    }
}
collisionCheckTest(paintingsArray[0], museum1);
console.log('keep trying') */

setInterval(myGameArea.update, 100 / 60);



