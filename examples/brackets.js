// given a string of brackets, return true if the brackets are balanced
// example:
// "()" => true
// "(())" => true
// ")(" => false
// "(()" => false

const str = '({[[()]]})'

const brackets = (str) => {
  const brackets = {
    '(': ')',
    '[': ']',
    '{': '}'
  }
  const stack = []
  for (let i = 0; i < str.length; i++) {
    if (brackets[str[i]]) {
      stack.push(brackets[str[i]])
    } else if (stack.pop() !== str[i]) {
      return false
    }
  }
  return stack.length === 0
}

console.log(brackets(str))
