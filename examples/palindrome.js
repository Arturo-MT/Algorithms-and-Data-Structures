// Determine f a string is a palindrome

const string = 'The quick brown fox jumps over the lazy dog'
const string2 = 'ana'
const string3 = 'Eye'

const palindrome = (string) => {
  string = string.toLowerCase()
  const stringArray = string.split('')
  const reversedString = stringArray.reverse().join('')
  return string === reversedString
}

console.log(palindrome(string), palindrome(string2), palindrome(string3))
