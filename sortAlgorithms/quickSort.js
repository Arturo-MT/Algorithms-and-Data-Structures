const arr = [6, 5, 4, 3, 2, 1, 0, -1, -2, -3, -4, -5, -6, 7, 9, 8, 10]
const oldArr = [...arr]

// Time complexity: O(n^2)
const quickSort = (arr) => {
  if (arr.length < 2) {
    return arr
  }

  const pivot = arr[0]
  const left = []
  const right = []
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)]
}

console.log(oldArr, quickSort(arr))
