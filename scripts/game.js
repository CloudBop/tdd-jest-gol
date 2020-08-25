//
// ACT
//
const isAlive = (cell, neighbours) => {

  if (Boolean(cell) && Number(neighbours) === 2 || Number(neighbours) === 3) return 1

  return 0;
}
const generate = (root) => new Array(root * root).fill(0)
const regenerate = (grid) => grid.map((cell, idx) => {

  return isAlive(cell, countNeighbours(cell, idx))
})

const add = (...args) => args.reduce((acc, current) => acc + (current || 0), 0)
//
const leftColumnValue = (idx, width, cells) =>
  idx % width ? [cells[idx - 1], cells[idx - width - 1], cells[idx + width - 1]] : []
//
const rightColumnValue = (idx, width, cells) =>
  (idx + 1) % width ? [cells[idx + 1], cells[idx - width + 1], cells[idx + width + 1]] : []

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
    // above
    grid[idx - width],
    // below
    grid[idx + width],
    //
    ...leftColumnValue(idx, width, grid),
    ...rightColumnValue(idx, width, grid)
  )
}

window.game = {
  isAlive,
  generate,
  regenerate,
  countNeighbours
}