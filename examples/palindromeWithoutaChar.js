const palindromeWithoutaChar = (str) => {
  if (!str) {
    return true
  }

  str = str.toLowerCase()

  if (str === str.split('').reverse().join('')) {
    return true
  }

  for (let i = 0; i < str.length; i++) {
    const strArr = str.split('')
    strArr.splice(i, 1)
    if (strArr.join('') === strArr.reverse().join('')) return true
  }
  return false
}

console.log(palindromeWithoutaChar('AsadA'))
