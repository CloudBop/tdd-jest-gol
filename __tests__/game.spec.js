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

      expect(countNeighbours([1], 0)).toEqual(0)
    })


    test('should return 2 alive neighbours', () => {
      const idx = 0
      // [
      //   idx, 1 ,
      //    1 , 0 
      // ]
      expect(countNeighbours([1, 1, 1, 0], idx)).toEqual(2)
    })

    test('should return 2 alive neighbours', () => {
      const idx = 1
      // [
      //    1 , idx
      //    1 , 0 
      // ]
      expect(countNeighbours([1, 1, 1, 0], idx)).toEqual(2)
    })

    test('should return 2 alive neighbours', () => {
      const idx = 2
      // [
      //    1 , 1
      //   idx, 0 
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
    xtest('test [1,1,1,0] returns [1,1,1,1]', () => {

      const grid = [1, 1, 1, 0]
      const expResult = [1, 1, 1, 1]
      expect(regenerate(grid)).toEqual(expResult);
    })
  })
})

