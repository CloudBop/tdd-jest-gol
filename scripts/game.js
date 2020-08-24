//
// ACT
//
const isAlive = (cell, neighbours) => {

  if (Boolean(cell) && Number(neighbours) === 2 || Number(neighbours) === 3) return 1

  return 0;
}
const generate = (root) => new Array(root * root).fill(0)
const regenerate = (grid) => grid.map(cell => {

  return
})

window.game = {
  isAlive,
  generate,
  regenerate
}