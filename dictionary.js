function splitStringBySpaces(string) {
  // - all spaces 
  return string.match(/[^ ]+/g)
}


module.exports = function dictionary(words) {

  //
  const result = {}
  //
  if (words) {
    const wordList = splitStringBySpaces(words)

    wordList.forEach(word => {

      if (result[word]) {
        result[word]++
      } else {
        result[word] = 1;
      }

    });
  }
  //
  return result
}