function splitStringBySpaces(string) {
  // - all spaces 
  return string.match(/[^ ]+/g)
}


module.exports = function dictionary(words) {

  return (splitStringBySpaces(words) || []).reduce((current, nextWord) => {
    //
    current[nextWord] = current[nextWord] + 1 || 1

    return current;
  },
    // return object
    {})
}

  // //
  // const result = {}
  // //
  // if (words) {
  //   const wordList = splitStringBySpaces(words)

  //   wordList.forEach(word => {
  //     if (result[word]) {
  //       result[word]++
  //     } else {
  //       result[word] = 1;
  //     }
  //   });
  // }
  //