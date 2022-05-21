/**
 * If the number is less than 2, return 1, otherwise return the sum of
 * the previous two numbers.
 * @param n - The number of the Fibonacci sequence you  want  to  find.
 * @returns The nth number in the fibonacci sequence.
 */
const fiboRecursive = (n) => {
  if (n < 2) {
    return 1
  }
  return fiboRecursive(n - 1) + fiboRecursive(n - 2)
}

/**
 * It returns the nth fibonacci number, and it uses memoization to store
 * the results of previous calculations  so  that  it  doesn't  have  to
 * recalculate them
 * @param n - the number of the  fibonacci  sequence  you  want  to  find
 * @param [memo] - an array that will store the results of the  recursive
 * calls.
 * @returns The nth number in the fibonacci sequence.
 */
const fiboWithMemo = (n, memo = []) => {
  if (n < 2) {
    return 1
  }
  if (memo[n]) {
    return memo[n]
  }
  memo[n] = fiboWithMemo(n - 1, memo) + fiboWithMemo(n - 2, memo)
  return memo[n]
}

console.log(fiboWithMemo(50))
console.log(fiboRecursive(50))
