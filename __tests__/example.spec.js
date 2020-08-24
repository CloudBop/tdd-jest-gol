require('../scripts/example');
// this is scoped in above script
const example = window.example;
//
describe('An example module', () => {
  test('should be defined', () => {
    expect(example).toBeDefined();
  })

})
