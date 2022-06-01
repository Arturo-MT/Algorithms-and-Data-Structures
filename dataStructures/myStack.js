class Stack {
  constructor () {
    this.items = []
  }

  push = (element) => {
    this.items.push(element)
  }

  pop = () => {
    return this.items.pop()
  }

  peek = function () {
    return this.items[this.items.length - 1]
  }

  isEmpty = function () {
    return this.items.length === 0
  }

  size = function () {
    return this.items.length
  }
}

module.exports = Stack
