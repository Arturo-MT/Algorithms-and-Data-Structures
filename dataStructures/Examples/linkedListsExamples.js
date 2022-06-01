const { LinkedList, DoublyLinkedList, CircularLinkedList } = require('../myLinkedList.js')

const list = new LinkedList()
list.append(15)
list.append(14)
list.append(13)
list.append(12)
list.append(11)
list.insert(5, 4)
list.append(10)
console.log(list.isEmpty())
console.log(list.size())
console.log(list.getHead())
console.log(list.getElement(4))

const doublyList = new DoublyLinkedList()
doublyList.append(1)
doublyList.append(2)
doublyList.append(3)
doublyList.append(4)
doublyList.append(5)
doublyList.append(7)
doublyList.append(8)
doublyList.insert(5, 50)
console.log(doublyList.getHead())
console.log(doublyList.getElement(7).element)
doublyList.removeAt(6)
doublyList.remove(7)
console.log(doublyList.indexOf(3))
console.log(doublyList.toString())
console.log(doublyList.getTail())
