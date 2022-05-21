// determine the largest of the two diagonals in a matrix
const matrix = [
  [1, 5, 8, 8],
  [4, 2, 9, 8],
  [7, 6, 3, 8],
  [7, 1, 4, 8]
]

const findLargestDiagonal = (matrix) => {
  const diagonal1 = []
  const diagonal2 = []

  let diagonal1Sum = 0
  let diagonal2Sum = 0

  for (let i = 0; i < matrix.length; i++) {
    diagonal1.push(matrix[i][i])
    diagonal2.push(matrix[i][matrix.length - 1 - i])
  }

  diagonal1Sum = diagonal1.reduce((a, b) => a + b)
  diagonal2Sum = diagonal2.reduce((a, b) => a + b)

  if (Math.max(diagonal1Sum, diagonal2Sum) === diagonal1Sum) {
    return diagonal1
  } else if (Math.max(diagonal1Sum, diagonal2Sum) === diagonal2Sum) {
    return diagonal2
  } else {
    return 0
  }
}

console.log(findLargestDiagonal(matrix))
