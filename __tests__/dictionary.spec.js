const dictionary = require('../dictionary');
//
describe('dictionary', () => {
  //
  test('should return an empty object for an empty string ', () => {
    //
    expect(dictionary('')).toEqual({})
  })
  //
  test('should return 1 for a single word', () => {
    //
    expect(dictionary('the')).toEqual({ the: 1 })
  })
})
