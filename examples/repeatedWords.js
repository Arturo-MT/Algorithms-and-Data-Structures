// count the repeated words in a string
const string = 'The quick brown fox jumps over the lazy dog'
const string2 = 'repeat Repeat Repeat day day Day'

const countRepeatedWords = (string) => {
  const words = string.split(' ')
  const repeatedWords = {}
  words.forEach((word) => {
    word = word.toLowerCase()
    if (repeatedWords[word]) {
      repeatedWords[word]++
    } else {
      repeatedWords[word] = 1
    }
  })
  return repeatedWords
}

console.log(countRepeatedWords(string))
console.log(countRepeatedWords(string2))
