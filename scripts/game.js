//
// ACT
//
window.game = {
  isAlive: (cell, neighbours) => {

    if (Boolean(cell) && Number(neighbours) === 2 || Number(neighbours) === 3) return 1

    return 0;
  },
  generate: (root) => new Array(root * root).fill(0)
}