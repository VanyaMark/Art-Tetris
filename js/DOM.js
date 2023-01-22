document.getElementById("play").addEventListener("click", (event) => {
  // Create the Background
  background = new Component(
    0,
    0,
    myGameArea.canvas.width,
    myGameArea.canvas.height
  );
  background.img = new Image();
  background.img.src = "../img/Background.png";

  // Create Paintings

  /* let painting1 = new Painting(0, 0, 80, 80, "green", "baroque");
  let painting2 = new Painting(100, 0, 80, 80, "#90ee90", "romanticism");
  let painting3 = new Painting(180, 0, 80, 80, "#faf0e6", "modernArt");
  let painting4 = new Painting(270, 0, 80, 80, "#ff4500", "baroque");
  myGameArea.components.push(painting1, painting2, painting3, painting4);
  let paintingsArray = [];
  paintingsArray.push(painting1, painting2, painting3, painting4);
  console.log(paintingsArray); */

  updateTimer = setInterval(myGameArea.update, 1000 / 60);

  document.getElementById("main-menu").style.display = "none";
});

document
  .getElementById("restart-game-over")
  .addEventListener("click", (event) => {
    restart();
    myGameArea.isGameOver = false;
    document.getElementById("game-over").style.display = "none";
  });

document.addEventListener("keydown", (event) => {
  //https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key
  switch (event.key) {
    case "Left": // IE/Edge specific value
    case "ArrowLeft":
      paintingsArray[0].moveLeft(); // Do something for "left arrow" key press.
      break;
    case "Right": // IE/Edge specific value
    case "ArrowRight":
      paintingsArray[0].moveRight(); // Do something for "right arrow" key press.
      break;
    case "ArrowDown":
      paintingsArray[0].moveDown(); // Do something for "down arrow" key press.
      break;
    case "Enter":
      // Do something for "enter" or "return" key press.
      break;
    case "Esc": // IE/Edge specific value
    case "Escape":
      // Do something for "esc" key press.
      break;
    default:
      return; // Quit when this doesn't handle the key event.
  }
});
