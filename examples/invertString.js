// invert string

const string = 'The quick brown fox jumps over the lazy dog'

const invertString = (string) => {
  const invertedString = string.split('').reverse().join('')
  return invertedString
}

console.log(invertString(string))
