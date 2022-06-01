const { LinkedList } = require('./myLinkedList')

function HashTableLL () {
  const table = []
  /* const loseLoseHashCode = function (key) {
    hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % 37;
  }; */
  const djb2HashCode = function (key) {
    let hash = 5281
    for (let i = 0; i < key.length; i++) {
      hash = hash * 33 + key.charCodeAt(i)
    }
    return hash % 1013
  }
  const ValuePair = function (key, value) {
    this.key = key
    this.value = value
    this.toString = () => '[' + this.key + ' - ' + this.value + ']'
  }
  this.put = (key, value) => {
    const position = djb2HashCode(key)
    if (table[position] === undefined) {
      table[position] = new LinkedList()
    }
    table[position].append(new ValuePair(key, value))
  }
  this.get = (key) => {
    const position = djb2HashCode(key)

    if (table[position] !== undefined) {
      let current = table[position].getHead()

      while (current.next) {
        if (current.element.key === key) {
          return current.element.value
        }
        current = current.next
      }
      if (current.element.key === key) {
        return current.element.value
      }
    }
    return undefined
  }
  this.remove = (key) => {
    const position = djb2HashCode(key)

    if (table[position] !== undefined) {
      let current = table[position].getHead()
      while (current.next) {
        if (current.element.key === key) {
          table[position].remove(current.element)
          if (table[position].isEmpty()) {
            table[position] = undefined
          }
          return true
        }
        current = current.next
      }
      if (current.element.key === key) {
        table[position].remove(current.element)
        if (table[position].isEmpty()) {
          table[position] = undefined
        }
        return true
      }
    }
    return false
  }
  this.print = () => {
    for (let i = 0; i < table.length; i++) {
      if (table[i] !== undefined) {
        console.log(i + ': ' + table[i])
      }
    }
  }
}
function HashTableLP () {
  const table = []
  /* const loseLoseHashCode = function (key) {
    hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % 37;
  }; */
  const djb2HashCode = function (key) {
    let hash = 5281
    for (let i = 0; i < key.length; i++) {
      hash = hash * 33 + key.charCodeAt(i)
    }
    return hash % 1013
  }
  const ValuePair = function (key, value) {
    this.key = key
    this.value = value
    this.toString = () => '[' + this.key + ' - ' + this.value + ']'
  }
  this.put = (key, value) => {
    let position = djb2HashCode(key)

    if (table[position] === undefined) {
      table[position] = new ValuePair(key, value)
    } else {
      let index = ++position
      while (table[index] !== undefined) {
        index++
      }
      table[index] = new ValuePair(key, value)
    }
  }
  this.get = (key) => {
    let position = djb2HashCode(key)

    if (table[position] !== undefined) {
      if (table[position].key === key) {
        return table[position].value
      } else {
        let index = ++position
        while (table[index] === undefined || table[index].key !== key) {
          index++
        }
        if (table[index].key === key) {
          return table[index].value
        }
      }
    }
    return undefined
  }
  this.remove = (key) => {
    const position = djb2HashCode(key)

    if (table[position] !== undefined) {
      if (table[position].key === key) {
        table[position] = undefined
      } else {
        let index = position
        while (table[index] === undefined || table[index].key !== key) {
          index++
        }
        if (table[index].key === key) {
          table[index] = undefined
        }
      }
    }
    return undefined
  }
  this.print = () => {
    for (let i = 0; i < table.length; i++) {
      if (table[i] !== undefined) {
        console.log(i + ': ' + table[i])
      }
    }
  }
}

module.exports = { HashTableLL, HashTableLP }
