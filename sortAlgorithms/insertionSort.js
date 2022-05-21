const arr = [9, 8, 7, 6, 5, 4, 3, 2, 1]
const oldArr = [...arr]

// Time complexity: O(n^2)
const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    const temp = arr[i]
    let j = i - 1
    while (j >= 0 && arr[j] > temp) {
      /* Swapping the values of the array. */
      arr[j + 1] = arr[j]
      j--
    }
    arr[j + 1] = temp
  }
  return arr
}

console.log(oldArr, insertionSort(arr))
