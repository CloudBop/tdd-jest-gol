//
// Arrange
//
require('../scripts/game');
const { isAlive, generate, regenerate, countNeighbours } = window.game;

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

      expect(countNeighbours([1])).toEqual(0)
    })


    xtest('should return all alive neighbours', () => {
      const grid = [1, 1, 1, 1]
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
    xtest('test [1,1,1,0] returns [1,1,1,1]', () => {

      const grid = [1, 1, 1, 0]
      const expResult = [1, 1, 1, 1]
      expect(regenerate(grid)).toEqual(expResult);
    })
  })
})

