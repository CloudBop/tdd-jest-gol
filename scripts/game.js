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

const createDiv = (className) => {
  const el = document.createElement('div');
  el.className = className
  return el
}

const drawGrid = (cells) => {
  const width = Math.sqrt(cells.length);
  const grid = document.getElementById('grid');
  const container = createDiv('container')
  let row;
  cells.forEach((cell, idx) => {

    if (idx % width === 0) {
      row = createDiv('row')
      container.appendChild(row)
    }
    //
    const el = createDiv(`cell ${cell === 0 ? 'dead' : 'alive'}`)
    row.appendChild(el)
  });
  //
  grid.innerHTML = ""
  grid.appendChild(container)
}

const attachGridEventHandler = () => {
  document.getElementById('grid').addEventListener('click', function (evt) {
    const className = evt.target.className;
    evt.target.className = className.includes('dead')
      ? className.replace('dead', 'alive')
      : className.replace('alive', 'dead')
  }, false)
}

window.game = {
  isAlive,
  generate,
  regenerate,
  countNeighbours,
  drawGrid,
  attachGridEventHandler
}