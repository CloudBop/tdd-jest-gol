//
// Arrange
//
require('../scripts/game');
const { isAlive } = window.game;

describe('gol', () => {
  describe('is cell alive algorithm', () => {

    // ASSERT
    //
    test('dead cell with no neighbours should remain dead ', () => {
      expect(isAlive(0, 0)).toEqual(0)
    })

  })

})

