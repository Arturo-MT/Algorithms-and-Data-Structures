const Dictionary = require('../myDictionary')

const dictionary = new Dictionary()
dictionary.set('Gandalf', 'Gandalf@email.com')
dictionary.set('Frodo', 'Frodo@email.com')
dictionary.set('Sauron', 'Sauron@email.com')
dictionary.set('Legolas', 'Legolas@email.com')

console.log(dictionary.has('Gandalf'))
console.log(dictionary.size())

console.log(dictionary.keys())
console.log(dictionary.values())
console.log(dictionary.get('Frodo'))

console.log(dictionary.delete('Sauron'))

console.log(dictionary.keys())
console.log(dictionary.values())
console.log(dictionary.getItems())
