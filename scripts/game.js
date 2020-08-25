//
// ACT
//
const isAlive = (cell, neighbours) => {

  return neighbours === 3 || (Boolean(cell) && neighbours === 2) ? 1 : 0
}
const generate = (root) => new Array(root * root).fill(0)

const add = (...args) => args.reduce((acc, current) => acc + (current || 0), 0)
//
const leftColumnValue = (idx, width, cells) =>
  idx % width ? [cells[idx - 1], cells[idx - width - 1], cells[idx + width - 1]] : []
//
const rightColumnValue = (idx, width, cells) =>
  (idx + 1) % width ? [cells[idx + 1], cells[idx - width + 1], cells[idx + width + 1]] : []

//
const regenerate = (grid) => grid.map((cell, idx) => {

  return isAlive(cell, countNeighbours(grid, idx))
})
const countNeighbours = (grid, idx) => {
  const width = Math.sqrt(grid.length)
  // idx = 4
  // `[
  //   1, 1, 1, 
  //   1, idx, 1, 
  //   1, 1, 1
  // ]`
  // use reduce to check neighbours 
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
    console.log('this', evt.target)
    evt.target.className = className.includes('dead')
      ? className.replace('dead', 'alive')
      : className.replace('alive', 'dead')
  })
}

const getCellsFromDom = () => {
  //
  return Array.from(document.querySelectorAll('.cell'))
    .map((cell, idx) => {
      //
      if (cell.className.includes('dead')) {
        return 0
      }
      return 1
    })
}

let gameLoop;
const start = () => {
  //
  let generation = game.getCellsFromDom();
  // loop
  gameLoop = setInterval(() => {
    generation = game.regenerate(generation)
    game.drawGrid(generation)
  }, 1000)
}
const stop = () => clearInterval(gameLoop)

window.game = {
  isAlive,
  generate,
  regenerate,
  countNeighbours,
  drawGrid,
  attachGridEventHandler,
  getCellsFromDom,
  start,
  stop
}