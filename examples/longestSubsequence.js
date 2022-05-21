// given two strings, find the longest subsequence common to both
// example:
// s1 = "abc"
// s2 = "bcd"
// longest common subsequence = "bc"
const s1 = 'abcdik'
const s2 = 'acdegik'

const longestSubsequenceNonRecursive = (s1, s2) => {
  const longest = []
  for (let i = 0; i < s1.length; i++) {
    for (let j = 0; j < s2.length; j++) {
      if (s1[i] === s2[j]) {
        longest.push(s1[i])
      }
    }
  }
  return longest.join('')
}

const longestSubsequenceRecursive = (s1, s2) => {
  if (s1.length === 0 || s2.length === 0) return ''
  if (s1[0] === s2[0]) {
    return s1[0] + longestSubsequenceRecursive(s1.slice(1), s2.slice(1))
  }
  const s1_ = longestSubsequenceRecursive(s1.slice(1), s2)
  const s2_ = longestSubsequenceRecursive(s1, s2.slice(1))
  return s1_.length > s2_.length ? s1_ : s2_
}

console.log(longestSubsequenceRecursive(s1, s2))
console.log(longestSubsequenceNonRecursive(s1, s2))
