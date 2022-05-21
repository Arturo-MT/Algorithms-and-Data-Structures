const arr = [9, 8, 7, 6, 5, 4, 3, 2, 1]
const oldArr = [...arr]

// Recurrence: T(n) = 2T(n/2) + c(n)
// Time complexity: O(n log n)
const mergeSort = (arr) => {
  if (arr.length < 2) {
    return arr
  }
  /* Dividing the array into two halves and then sorting them. */
  const middle = Math.floor(arr.length / 2)
  const left = arr.slice(0, middle)
  const right = arr.slice(middle)
  return merge(mergeSort(left), mergeSort(right))
}

const merge = (left, right) => {
  const result = []
  /* Comparing the first element of the left array with the first
    element of the right array.  If the left element is smaller, it
    is pushed to the result  array and removed from the left array.
    If  the  right  element  is smaller, it is pushed to the result
    array and removed from the right array. */
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift())
    } else {
      result.push(right.shift())
    }
  }
  /* Pushing the remaining elements of the left and right arrays
    to the result array. */
  while (left.length) {
    result.push(left.shift())
  }
  while (right.length) {
    result.push(right.shift())
  }
  return result
}

console.log(oldArr, mergeSort(arr))
