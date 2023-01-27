let paintingsArray = [];
let updateTimer;

let background;

let score = 0;

// Function to get the paintings in a random order 

const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    return array
}

// ----------- Array of paintings' locations -----------------------------------------------
let paintingsList = ["./img/b1.png", "./img/b2.png", "./img/b3.png", "./img/b4.png", "./img/b5.png", "./img/b6.png", "./img/b7.png", "./img/b8.png",
    "./img/r1.png", "./img/r2.png", "./img/r3.png", "./img/r4.png", "./img/r5.png", "./img/r6.png", "./img/r7.png", "./img/r8.png",
    "./img/m1.png", "./img/m2.png", "./img/m3.png", "./img/m4.png", "./img/m5.png", "./img/m6.png", "./img/m7.png", "./img/m8.png"];

paintingsList = shuffleArray(paintingsList)

//------------- FOR THE COLOR VERSION BEFORE THE IMAGES ------------------------
//------------- CREATE RANDOM COLOR FUNCTION ------------------------------------
//------------- EACH ARRAY HAS DIFFERENT SHADES OF RED, GREEN OR BLUE
let randomColor = 0;

function getRandomColor() {
    randomColor = Math.floor(Math.random() * 256);
    return randomColor;
}

//--------- CREATE 3 ARRAYS TO CORRESPOND TO "BAROQUE", "ROMANTICISM" AND "MODERN ART" | HOLD PAINTINGS' IMAGES' LOCATIONS -------------
/* let paintingsList1 = [
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
] */
//----------- FUNCTION TO GET RANDOM NUMBER ----


let randomNum = 0;
function getRandom(max) {
    randomNum = Math.floor(Math.random() * max);
    return randomNum;
}


//-------- VARIABLE TO ADD RANDOMNESS IN ARRAYS EXECUTION WITHIN setInterval() function -------------------

let currentPaintingList = 0;

generatePaintings = () => {
    //------------THIS SOLUTION WASN'T GETTING 2---------------------
    // console.log(currentPaintingList);
    // currentPaintingList = currentPaintingList % 2;
    // currentPaintingList++ // each time executing random number between 0 and 2

    currentPaintingList = getRandom(3);

    console.log(currentPaintingList);
    console.log(`currentPaintingList: ${currentPaintingList}`);

    getRandom(630); //----- RANDOM Nº FOR PAINTING'S X: BETWEEN 0 AND (myGameArea.canvas.width - Painting.w), IN THIS CASE = 630

    let currentImage = paintingsList.shift();

    let painting

    if (currentImage.substring(6,7) == "b") painting = new Painting(randomNum, -150, 150, 150, currentImage, "baroque");
    else if (currentImage.substring(6,7) == "m") painting = new Painting(randomNum, -150, 150, 150, currentImage, "modernArt");
    else if (currentImage.substring(6,7) == "r") painting = new Painting(randomNum, -150, 150, 150, currentImage, "romanticism");
    
    console.log(painting)

    console.log(`xRandom List: ${randomNum}`);
    paintingsArray.push(painting);

    paintingsList.push(currentImage);
    console.log(`paintingsList: ${paintingsList}`);

}


let restart = () => {
    paintingsArray = [];
    score = 0;
    clearInterval(updateTimer);
    console.log(restart);
}

console.log(paintingsArray);

let museum1 = new Museum(0, (myGameArea.canvas.height - 260), 260, 260, "./img/museum1.png", "baroque");
myGameArea.components.push(museum1);
let museum2 = new Museum(260, (myGameArea.canvas.height - 260), 260, 260, "./img/museum2.png", "romanticism");
myGameArea.components.push(museum2);
let museum3 = new Museum(520, (myGameArea.canvas.height - 260), 260, 260, "./img/museum3.png", "modernArt");
myGameArea.components.push(museum3);

let museumArray = [];
museumArray.push(museum1, museum2, museum3);
console.log(myGameArea.components)







