import { ITEMS } from "../constant/items";

// move the pieces down
export function moveDown(updatedGrid) {
  for (let i = 0; i < 10; i++) {
    for (let j = 8; j >= 0; j--) {
      if (updatedGrid[j][i] === null) {
        let k = j;
        while (k >= 0) {
          if (updatedGrid[k][i] !== null) {
            updatedGrid[j][i] = updatedGrid[k][i];
            updatedGrid[k][i] = null;
            break;
          }
          k--;
        }
      }
    }
  }
}

export function fillBoard(updatedGrid) {
  // fill the board back up
  for (let i = 0; i < 10; i++) {
    for (let j = 8; j >= 0; j--) {
      if (updatedGrid[j][i] === null) {
        updatedGrid[j][i] = Object.keys(ITEMS)[Math.floor(Math.random() * Object.keys(ITEMS).length)];
      }
    }
  }
}
