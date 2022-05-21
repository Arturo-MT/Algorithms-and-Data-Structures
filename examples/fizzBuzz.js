for (let i = 0; i <= 100; i++) {
  let result = ''
  if (i % 3 === 0) {
    result += 'Fizz'
  }
  if (i % 5 === 0) {
    result += 'Buzz'
  }
  /* If the result is empty, then it will print the number. */
  if (result === '') {
    result = i
  }
  console.log(result)
}
