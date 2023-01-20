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