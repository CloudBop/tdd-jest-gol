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
  //
  test('should return 2 for two of the same words', () => {
    //
    expect(dictionary('the the')).toEqual({ the: 2 })
  })

  test('should return 2 for two of the same words and one extra', () => {
    //
    expect(dictionary('the cat the')).toEqual({ the: 2, cat: 1 })
  })

})
