let paintingsArray = [];

let background = new Component(0, 0, myGameArea.canvas.width, myGameArea.canvas.height, "#F2DCE8");
myGameArea.components.push(background); 

let score = 0;

/* let paintingsList1 = ["./img/b1.png", "./img/b2.png", "./img/b3.png", "./img/b4.png", "./img/b5.png", "./img/b6.png", "./img/b7.png", "./img/b8.png"];
let paintingsList2 = ["./img/r1.png", "./img/r2.png", "./img/r3.png", "./img/r4.png", "./img/r5.png", "./img/r6.png", "./img/r7.png", "./img/r8.png"];
let paintingsList3 = ["./img/m1.png", "./img/m2.png", "./img/m3.png", "./img/m4.png", "./img/m5.png", "./img/m6.png", "./img/m7.png", "./img/m8.png"]; */

//--------- CREATE 3 ARRAYS TO CORRESPOND TO "BAROQUE", "ROMANTICISM" AND "MODERN ART" | HOLD PAINTINGS' IMAGES' LOCATIONS -------------
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
//----------- FUNCTION TO GET RANDOM X FOR THE PAINTINGS BETWEEN 0 AND (myGameArea.canvas.width - Painting.w), IN THIS CASE = 370 ----

/* const xRandom = () => {
    return Math.floor(Math.random() * 370);
  } NOT WORKING!!!!! */

let xRandom = 0;
function getRandomX() {
    xRandom = Math.floor(Math.random() * 370);
    return xRandom;
}


//-------- VARIABLE TO ADD RANDOMNESS IN ARRAYS EXECUTION WITHIN setInterval() function -------------------
let currentPaintingList = 0;

setInterval(() => {
    console.log(currentPaintingList);

    currentPaintingList = currentPaintingList % 2;
    currentPaintingList++ // each time executing random number between 0 and 2

    console.log(currentPaintingList);

    getRandomX();

    if (currentPaintingList == 0) {
        let currentImage = paintingsList1.shift();
        let painting = new Painting(xRandom, -80, 80, 80, currentImage, "baroque");
        console.log(`xRandom List 1: ${xRandom}`)
        paintingsArray.push(painting);
    }
    else if (currentPaintingList == 1) {
        let currentImage = paintingsList2.shift();
        let painting = new Painting(xRandom, -80, 80, 80, currentImage, "romanticism");
        console.log(`xRandom List 1: ${xRandom}`)
        paintingsArray.push(painting);
    }
    else if (currentPaintingList == 2) {
        let currentImage = paintingsList3.shift();
        let painting = new Painting(xRandom, -80, 80, 80, currentImage, "modernArt");
        console.log(`xRandom List 1: ${xRandom}`)
        paintingsArray.push(painting);
    }

}, 2300);



paintingsArray.push(new Painting(10, 0, 80, 80, "red", "baroque"));
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



