import { ITEMS } from "../constant/items";

/**
 * @return {string[][]} 9x10 board
 **/
export function initBoard() {
  // 9x10 board
  const items = Object.keys(ITEMS);
  const board = [];
  for (let i = 0; i < 9; i++) {
    const row = [];
    for (let j = 0; j < 10; j++) {
      row.push(items[Math.floor(Math.random() * items.length)]);
    }
    board.push(row);
  }

  // remove any matches initially
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 10; j++) {
      const item = board[i][j];
      if (
        (i >= 2 && board[i - 1][j] === item && board[i - 2][j] === item) ||
        (j >= 2 && board[i][j - 1] === item && board[i][j - 2] === item)
      ) {
        board[i][j] = items[Math.floor(Math.random() * items.length)];
        j = -1;
      }
    }
  }

  return board;
}
