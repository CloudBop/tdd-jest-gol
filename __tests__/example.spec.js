// 3 A's of testing - Arrange, Act, Assert

//
// ARRANGE
//

//
//
require('../scripts/example');

//
// this is scoped in above script
const example = window.example;

//
//
beforeAll(() => console.log('Run before all tests, preparing state'));
afterAll(() => console.log('Run after all tests, resetting state'));

//
// 
beforeEach(() => console.log('setup before each test'));
afterEach(() => console.log('stripdown after each test'));

//
//
describe('An example module', () => {

  test('window.example module should be defined', () => {
    expect(example).toBeDefined();
  })

  // - only run single test
  // test.only
  // xtest

  // xtest('I am only test run in suite', () => {
  //   expect(typeof example).toEqual('object')
  // })

  //
  // ASSERT
  //
  test('should return Hello, {name} ', () => {
    const name = 'Mark';
    const expected = example.hello(name);
    expect(expected).toEqual("Hello, " + name);
  })
})
