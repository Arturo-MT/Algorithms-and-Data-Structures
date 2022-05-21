const matrix = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25]
]

const spiralMatrix = (matrix) => {
  const result = []
  let startRow = 0
  let endRow = matrix.length - 1
  let startCol = 0
  let endCol = matrix[0].length - 1
  while (startRow <= endRow && startCol <= endCol) {
    // top row
    for (let i = startCol; i <= endCol; i++) {
      result.push(matrix[startRow][i])
    }
    startRow++
    // right col
    for (let i = startRow; i <= endRow; i++) {
      result.push(matrix[i][endCol])
    }
    endCol--
    // bottom row
    for (let i = endCol; i >= startCol; i--) {
      result.push(matrix[endRow][i])
    }
    endRow--
    // left col
    for (let i = endRow; i >= startRow; i--) {
      result.push(matrix[i][startCol])
    }
    startCol++
  }
  return result
}

console.log(spiralMatrix(matrix))
