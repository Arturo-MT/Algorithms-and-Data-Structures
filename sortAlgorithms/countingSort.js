const arr = [9, 8, 7, 0, 6, 10, 5, 4, 3, 2, 9, 9, 8, 7, 0, 6, 5, 4, 3, 2, 1]
const oldArr = [...arr]

// Time complexity: O(n^2)
const countingSort = (arr) => {
  /* Creating an array of the max value of the array + 1. */
  const max = Math.max(...arr) + 1
  const counts = Array(max).fill(0)
  let j = 0

  /* Incrementing the value of the index of the array. */
  arr.forEach((item) => ++counts[item])

  for (let i = 0; i < counts.length; i++) {
    /* Looping through the array and decrementing the value
        of the index of the array. */
    while (counts[i]) {
      arr[j] = i
      j++
      counts[i]--
    }
  }
  return arr
}

console.log(oldArr, countingSort(arr))
