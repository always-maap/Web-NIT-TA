/**
 * @param {string[][]} board
 * @returns {number[][]}
 */
export function checkForMatches(board) {
  const matches = [];

  //
  for (let i = 0; i < 9; i++) {
    let matchLength = 1;
    for (let j = 0; j < 10; j++) {
      const current = board[i][j];
      const next = board[i][j + 1];
      if (current === next) {
        matchLength++;
      } else {
        if (matchLength >= 3) {
          console.log("called");
          matches.push(...Array.from({ length: matchLength }, (_, k) => [i, j - k]));
        }
        matchLength = 1;
      }
    }
  }

  // for (let j = 0; j < 10; j++) {
  //   let matchLength = 1;
  //   for (let i = 0; i < 9; i++) {
  //     const current = board[i][j];
  //     const next = board[i + 1][j];
  //     if (current === next) {
  //       matchLength++;
  //     } else {
  //       if (matchLength >= 3) {
  //         matches.push(...Array.from({ length: matchLength }, (_, k) => [i - k, j]));
  //       }
  //       matchLength = 1;
  //     }
  //   }
  // }

  return matches;
}
