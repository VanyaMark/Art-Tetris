let paintingsArray = [];

let background = new Component(0, 0, myGameArea.canvas.width, myGameArea.canvas.height, "#F2DCE8");
myGameArea.components.push(background); 

let score = 0;

/* let paintingsList1 = ["./img/b1.png", "./img/b2.png", "./img/b3.png", "./img/b4.png", "./img/b5.png", "./img/b6.png", "./img/b7.png", "./img/b8.png"];
let paintingsList2 = ["./img/r1.png", "./img/r2.png", "./img/r3.png", "./img/r4.png", "./img/r5.png", "./img/r6.png", "./img/r7.png", "./img/r8.png"];
let paintingsList3 = ["./img/m1.png", "./img/m2.png", "./img/m3.png", "./img/m4.png", "./img/m5.png", "./img/m6.png", "./img/m7.png", "./img/m8.png"]; */

let paintingsList1 = [
    "green",
    "lightgreen",
    "blue",
    "lightblue"
]

let paintingsList2 = [
    "purple",
    "pink",
    "violet"
]

let paintingsList3 = [
    "black",
    "brown",
    "gray"
]

let currentPaintingList = 0;

setInterval(() => {
    console.log(currentPaintingList);

    currentPaintingList = currentPaintingList % 2;
    currentPaintingList++
    console.log(currentPaintingList);

    if (currentPaintingList == 0) {
        let currentImage = paintingsList1.shift();
        let painting = new Painting(0, -50, 80, 80, currentImage, "baroque");
        paintingsArray.push(painting);
    }
    else if (currentPaintingList == 1) {
        let currentImage = paintingsList2.shift();
        let painting = new Painting(0, -50, 80, 80, currentImage, "romanticism");
        paintingsArray.push(painting);
    }
    else if (currentPaintingList == 2) {
        let currentImage = paintingsList3.shift();
        let painting = new Painting(0, -50, 80, 80, currentImage, "modernArt");
        paintingsArray.push(painting);
    }

}, 2500)


/* let painting1 = new Painting(0, 0, 80, 80, "green", "baroque");
let painting2 = new Painting(100, 0, 80, 80, "#90ee90", "romanticism");
let painting3 = new Painting(180, 0, 80, 80, "#faf0e6", "modernArt");
let painting4 = new Painting(270, 0, 80, 80, "#ff4500", "baroque"); */


paintingsArray.push(new Painting(0, 0, 80, 80, "red", "baroque"));
console.log(paintingsArray);

let museum1 = new Museum(0, (myGameArea.canvas.height - 150), 150, 150, "./img/museum1.png", "baroque");
myGameArea.components.push(museum1);
let museum2 = new Museum(150, (myGameArea.canvas.height - 150), 150, 150, "./img/museum2.png", "romanticism");
myGameArea.components.push(museum2);
let museum3 = new Museum(300, (myGameArea.canvas.height - 150), 150, 150, "./img/museum3.png", "modernArt");
myGameArea.components.push(museum3);

let museumArray = [];
museumArray.push(museum1, museum2, museum3);
console.log(myGameArea.components)


setInterval(myGameArea.update, 100 / 60);



