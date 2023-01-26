document.getElementById("play").addEventListener("click", (event) => {
  // Create the Background  
  background = new Component(0, 0, myGameArea.canvas.width, myGameArea.canvas.height);
  background.img = new Image();
  background.img.src = "./img/background.png";

  
  updateTimer = setInterval(myGameArea.update, 1000 / 60);

  document.getElementById("main-menu").style.display = "none";
  
});

document.getElementById("restart-game-over").addEventListener("click", (event) => {
    restart();
    myGameArea.isGameOver = false;
    updateTimer = setInterval(myGameArea.update, 1000 / 60);
    document.getElementById("game-over").style.display = "none";
  });

document.addEventListener("keydown", (event) => {
  //https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key
  switch (event.key) {
    case "Left": // IE/Edge specific value
    case "ArrowLeft":
      paintingsArray[0].moveLeft(); // Moving left for "left arrow" key press.
      break;
    case "Right": // IE/Edge specific value
    case "ArrowRight":
      paintingsArray[0].moveRight(); // Moving right for "right arrow" key press.
      break;
    case "ArrowDown":
      paintingsArray[0].moveDown(); // Moving down manually for "down arrow" key press.
      break;
    case "Enter":
      paintingsArray[0].enterDrop(); // Drop the painting faster for Enter key press.
      break;
    case "Esc": // IE/Edge specific value
    case "Escape":
      // Do something for "esc" key press.
      break;
    default:
      return; // Quit when this doesn't handle the key event.
  }
});
