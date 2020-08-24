//
// ACT
//
const isAlive = (cell, neighbours) => {

  if (Boolean(cell) && Number(neighbours) === 2 || Number(neighbours) === 3) return 1

  return 0;
}
const generate = (root) => new Array(root * root).fill(0)
const regenerate = (grid) => grid.map(cell => {

  return isAlive(cell, 0)
})

const add = (...args) => args.reduce((acc, current) => acc + (current || 0))

const countNeighbours = (grid, cellIdx) => {
  // cellIdx = 4
  // `[
  //   1, 1, 1, 
  //   1, idx, 1, 
  //   1, 1, 1
  // ]`

  const width = Math.sqrt(grid.length)

  return add(
    (grid[cellIdx + 1] || 0) +
    (grid[cellIdx + width] || 0) +
    (grid[cellIdx + width + 1] || 0)
  )
}

window.game = {
  isAlive,
  generate,
  regenerate,
  countNeighbours
}