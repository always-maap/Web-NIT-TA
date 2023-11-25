/**
 * @param {string} id
 * @return {number[]} [row, col]
 * @example
 * parseCellId("3-4"); // [3, 4]
 */
export function parseCellId(id) {
  return id.split("-").map(Number);
}
