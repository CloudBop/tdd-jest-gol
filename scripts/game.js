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

const countNeighbours = (grid, idx) => {
  // idx = 4
  // `[
  //   1, 1, 1, 
  //   1, idx, 1, 
  //   1, 1, 1
  // ]`

  const width = Math.sqrt(grid.length)
  // use reducer to check neighbours 
  return add(
    // left
    idx % width ? grid[idx - 1] : 0,
    // right
    (idx + 1) % width ? grid[idx + 1] : 0,
    // above
    grid[idx - width],
    // above left
    idx % width ? grid[idx - width - 1] : 0,
    // above right
    (idx + 1) % width ? grid[idx - width + 1] : 0,
    // below
    grid[idx + width],
    // below left
    idx % width ? grid[idx + width - 1] : 0,
    // below right
    (idx + 1) % width ? grid[idx + width + 1] : 0,

  )
}

window.game = {
  isAlive,
  generate,
  regenerate,
  countNeighbours
}