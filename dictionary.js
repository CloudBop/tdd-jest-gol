module.exports = function dictionary(words) {

  //
  const result = {}
  //
  if (words) {
    result[words] = 1;
  }
  //
  return result
}