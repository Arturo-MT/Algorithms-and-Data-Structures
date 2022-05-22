// Two children, Lily and Ron want to share a chocolate bar.
// Each of the squares has an integer on it.
// Lily decides to share a contiguous segment of the bar selected such that:
// The length of the segment matches Ron's birth month, and,
// The sum of the integers on the squares is equal to his birth day.
// How many different ways can Lily choose a segment to share with Ron?

const birthday = (s, d, m) => {
  let count = 0
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      if (j - i + 1 === m && s.slice(i, j + 1).reduce((a, b) => a + b) === d) {
        count++
      }
    }
  }
  return count
}

console.log(birthday([1, 1, 1, 1, 1, 1], 3, 2))
