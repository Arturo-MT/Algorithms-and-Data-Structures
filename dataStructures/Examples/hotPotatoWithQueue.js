const { Queue } = require('../myQueue')

function hotPotato (nameList, num) {
  const queue = new Queue()
  for (let i = 0; i < nameList.length; i++) {
    queue.enqueue(nameList[i])
  }
  let eliminated = ''
  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue())
    }
    eliminated = queue.dequeue()
    console.log(eliminated + ' was eliminated from the Hot Potato Game.')
  }
  return queue.dequeue()
}

const names = ['Arturo', 'Cooper', 'Aika', 'Bilbo', 'Sanzon', 'Chelin']
const random = Math.round(Math.random() * 100)
const winner = hotPotato(names, random)
console.log('The winner is ' + winner)
