const arr = [9, 8, 7, 6, 5, 4, 3, 2, 1];
oldArr = [...arr];

// Time complexity: O(n^2)
const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      /* Comparing the current element with the next element.
      If the current element is greater than the next element,
      it swaps the two elements. */
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};

console.log(oldArr, bubbleSort(arr));
