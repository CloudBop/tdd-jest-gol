//
// Arrange
//
require('../scripts/game');
const { isAlive, generate, regenerate, countNeighbours, drawGrid, attachGridEventHandler, getCellsFromDom } = window.game;

// jest helper
jest.useFakeTimers();

describe('gol', () => {
  describe('is cell alive algorithm', () => {

    // ASSERT
    //
    test('dead cell with no neighbours should remain dead 0', () => {
      expect(isAlive(0, 0)).toEqual(0);
    })

    test('dead cell with 3 neighbours should return alive 1 ', () => {
      expect(isAlive(0, 3)).toEqual(1);
    })

    test('live cell with 0 neighbours should return dead 0 ', () => {
      expect(isAlive(1, 0)).toEqual(0);
    })

    test('live cell with 2 neighbours should return alive 1', () => {
      expect(isAlive(1, 2)).toEqual(1)
    })
  })
  //
  describe('generate function', () => {
    test('should create an array = X * X', () => {
      // should equal 1 dead cell
      expect(generate(1)).toEqual([0]);
      expect(generate(2)).toEqual([0, 0, 0, 0]);
    })
  })
  //
  describe('count neighbours', () => {

    test('should count 0 for array of one', () => {

      expect(countNeighbours([1], 0)).toEqual(0)
    })


    test('should return 2 alive neighbours', () => {
      const idx = 0
      // [
      //   1, 1 ,
      //    1 , 0 
      // ]
      expect(countNeighbours([1, 1, 1, 0], idx)).toEqual(2)
    })

    test('should return 2 alive neighbours', () => {
      const idx = 1
      // [
      //    1 , 1
      //    1 , 0 
      // ]
      expect(countNeighbours([1, 1, 1, 0], idx)).toEqual(2)
    })

    test('should return 2 alive neighbours', () => {
      const idx = 2
      // [
      //    1 , 1
      //   1, 0 
      // ]
      expect(countNeighbours([1, 1, 1, 0], idx)).toEqual(2)
    })

    test('should return 3 alive neighbours', () => {
      const idx = 3
      // [
      //    1 , 1 ,
      //    1 , idx 
      // ]
      expect(countNeighbours([1, 1, 1, 0], idx)).toEqual(3)
    })

    test('should return 3 alive neighbours', () => {
      const idx = 4
      // [
      //    1 , 1 , 1
      //    1 , idx 
      // ]
      expect(countNeighbours([
        1, 1, 1,
        0, 0, 0,
        0, 0, 0]
        , idx)).toEqual(3)
    })

  })
  //
  describe('runs regeneration', () => {
    test('test that a grid of [0] is always dead', () => {
      const grid = generate(1)
      expect(regenerate(grid)).toEqual([0]);
    })

    test('test that a grid of [1,0,0,0] is always dead', () => {
      const startingGrid = generate(2)
      const grid = generate(2)
      grid[0] = 1
      expect(regenerate(grid)).toEqual(startingGrid);
    })
    // xtest skip test
    test('test [1,1,1,0] returns [1,1,1,1]', () => {
      const grid = [1, 1, 1, 0];
      const expResult = [1, 1, 1, 1];

      console.log('before grid', grid)
      console.log('after regenerate(grid)', regenerate(grid))

      expect(regenerate(grid)).toEqual(expResult);
      console.log("regenerate(grid)", regenerate(grid))
    })
  })

  describe('browser grid', () => {
    //
    test('should display fours cells', () => {
      document.body.innerHTML = `<div id="grid"> </div>`
      drawGrid([1, 0, 1, 0]);
      expect(document.querySelectorAll('.row').length).toEqual(2)
      expect(document.querySelectorAll('.cell').length).toEqual(4)
      expect(document.querySelectorAll('.alive').length).toEqual(2)
      expect(document.querySelectorAll('.dead').length).toEqual(2)


      drawGrid([1, 1, 0, 0]);
      expect(document.querySelectorAll('.row').length).toEqual(2)
      expect(document.querySelectorAll('.cell').length).toEqual(4)
      expect(document.querySelectorAll('.alive').length).toEqual(2)
      expect(document.querySelectorAll('.dead').length).toEqual(2)
    })
  })

  describe('grid event handler', () => {
    test('cell should toggle alive/dead', () => {
      //
      document.body.innerHTML = `<div id="grid"> </div>`
      drawGrid([0])
      attachGridEventHandler();
      //
      expect(document.querySelectorAll('.dead').length).toEqual(1)
      expect(document.querySelectorAll('.alive').length).toEqual(0)

      document.querySelector('.dead').click();
      expect(document.querySelectorAll('.dead').length).toEqual(0)
      expect(document.querySelectorAll('.alive').length).toEqual(1)

      document.querySelector('.alive').click();
      expect(document.querySelectorAll('.dead').length).toEqual(1)
      expect(document.querySelectorAll('.alive').length).toEqual(0)
    })
  })

  describe('get all cells from DOM', () => {
    document.body.innerHTML = `<div id="grid"> </div>`
    const cells = [0, 0, 1, 1]
    drawGrid(cells)
    expect(getCellsFromDom()).toEqual(cells)
  })

  describe('start function, initial generation', () => {
    document.body.innerHTML = `<div id="grid"> </div>`
    // spy on these fns to make sure they're called
    const getCellsFromDomSpy = jest.spyOn(game, 'getCellsFromDom');
    const regenerateSpy = jest.spyOn(game, 'regenerate');
    const drawGridSpy = jest.spyOn(game, 'drawGrid');
    //
    game.start()
    // stop indefinite set interval 
    jest.runOnlyPendingTimers();
    expect((setInterval)).toHaveBeenCalled();
    expect(getCellsFromDomSpy).toHaveBeenCalled();
    expect(regenerateSpy).toHaveBeenCalled();
    expect(drawGridSpy).toHaveBeenCalled();
  })

  describe('stop function', () => {
    test('should clear interval', () => {
      game.stop();
      expect(clearInterval).toHaveBeenCalled();
    })

  })

})

