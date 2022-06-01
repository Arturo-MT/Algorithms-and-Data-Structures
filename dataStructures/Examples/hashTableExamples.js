const { HashTableLL, HashTableLP } = require('../myHashTable')

const hashLL = new HashTableLL()
hashLL.put('Gandalf', 'gandalf@email.com')
hashLL.put('John', 'johnsnow@email.com')
hashLL.put('Tyrion', 'tyrion@email.com')

console.log(hashLL.get('Gandalf'))
console.log(hashLL.get('Lolaine'))

hashLL.remove('Tyrion')
console.log(hashLL.get('Tyrion'))
hashLL.print()

const hashLP = new HashTableLP()
hashLP.put('Gandalf', 'gandalf@email.com')
hashLP.put('John', 'johnsnow@email.com')
hashLP.put('Tyrion', 'tyrion@email.com')

console.log(hashLP.get('Gandalf'))
console.log(hashLP.get('Lolaine'))

hashLP.remove('Tyrion')
console.log(hashLP.get('Tyrion'))
hashLP.print()
