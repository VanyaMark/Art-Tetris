let paintingsArray = [];

let background = new Component(0, 0, myGameArea.canvas.width, myGameArea.canvas.height, "#F2DCE8");
myGameArea.components.push(background); 

let score = 0;
// -----------LINKING IMAGES NOT WORKING !!!!!!!!! -----------------------------------------------
/* let paintingsList1 = ["./img/b1.png", "./img/b2.png", "./img/b3.png", "./img/b4.png", "./img/b5.png", "./img/b6.png", "./img/b7.png", "./img/b8.png"];
let paintingsList2 = ["./img/r1.png", "./img/r2.png", "./img/r3.png", "./img/r4.png", "./img/r5.png", "./img/r6.png", "./img/r7.png", "./img/r8.png"];
let paintingsList3 = ["./img/m1.png", "./img/m2.png", "./img/m3.png", "./img/m4.png", "./img/m5.png", "./img/m6.png", "./img/m7.png", "./img/m8.png"]; */

//------------- FOR THE COLOR VERSION BEFORE THE IMAGES ------------------------
//------------- CREATE RANDOM COLOR FUNCTION ------------------------------------
//------------- EACH ARRAY HAS DIFFERENT SHADES OF RED, GREEN OR BLUE
let randomColor = 0;

function getRandomColor() {
    randomColor = Math.floor(Math.random() * 256);
    return randomColor;
}

//--------- CREATE 3 ARRAYS TO CORRESPOND TO "BAROQUE", "ROMANTICISM" AND "MODERN ART" | HOLD PAINTINGS' IMAGES' LOCATIONS -------------
let paintingsList1 = [
    "rgb(0, 230, 0)",
    "rgb(0, 100, 0)",
    "rgb(0, 150, 0)",
    "rgb(0, 200, 0)",
    "rgb(0, 187, 0)",
    "rgb(0, 175, 0)",
    "rgb(0, 235, 0)",
    "rgb(0, 120, 0)",
]

let paintingsList2 = [
    "rgb(240, 0, 0)",
    "rgb(160, 0, 0)",
    "rgb(90, 0, 0)",
    "rgb(200, 0, 0)",
    "rgb(135, 0, 0)",
    "rgb(187, 0, 0)",
    "rgb(99, 0, 0)",
    "rgb(218, 0, 0)"
]

let paintingsList3 = [
    "rgb(0, 0, 250)",
    "rgb(0, 0, 220)",
    "rgb(0, 0, 130)",
    "rgb(0, 0, 190)",
    "rgb(0, 0, 100)",
    "rgb(0, 0, 178)",
    "rgb(0, 0, 166)",
    "rgb(0, 0, 215)",
]
//----------- FUNCTION TO GET RANDOM NUMBER ----


let randomNum = 0;
function getRandom(max) {
    randomNum = Math.floor(Math.random() * max);
    return randomNum;
}


//-------- VARIABLE TO ADD RANDOMNESS IN ARRAYS EXECUTION WITHIN setInterval() function -------------------

let currentPaintingList = 0;

setInterval(() => {
    //------------THIS SOLUTION WASN'T GETTING 2---------------------
    // console.log(currentPaintingList);
    // currentPaintingList = currentPaintingList % 2;
   // currentPaintingList++ // each time executing random number between 0 and 2

   currentPaintingList = getRandom(3);

    console.log(currentPaintingList);
    console.log(`currentPaintingList: ${currentPaintingList}`);

    getRandom(370); //----- RANDOM Nº FOR PAINTING'S X: BETWEEN 0 AND (myGameArea.canvas.width - Painting.w), IN THIS CASE = 370

    if (currentPaintingList == 0) {
        let currentImage = paintingsList1.shift();
        let painting = new Painting(randomNum, -80, 80, 80, currentImage, "baroque");
        console.log(`xRandom List 1: ${randomNum}`);
        paintingsArray.push(painting);
        
        paintingsList1.push(currentImage);
        console.log(`paintingsList1: ${paintingsList1}`);
    }
    else if (currentPaintingList == 1) {
        let currentImage = paintingsList2.shift();
        let painting = new Painting(randomNum, -80, 80, 80, currentImage, "romanticism");
        console.log(`xRandom List 2: ${randomNum}`);
        paintingsArray.push(painting);

        paintingsList2.push(currentImage);
        console.log(`paintingsList2: ${paintingsList2}`);
    }
    else if (currentPaintingList == 2) {
        let currentImage = paintingsList3.shift();
        let painting = new Painting(randomNum, -80, 80, 80, currentImage, "modernArt");
        console.log(`xRandom List 3: ${randomNum}`);
        paintingsArray.push(painting);

        paintingsList1.push(currentImage);
        console.log(`paintingsList3: ${paintingsList3}`);
    }

}, 2300);




paintingsArray.push(new Painting(10, 0, 80, 80, "rgb(0, 180, 0)", "baroque"));
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



