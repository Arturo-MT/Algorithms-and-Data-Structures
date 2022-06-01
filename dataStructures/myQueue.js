function Queue () {
  const items = []
  this.enqueue = (element) => {
    items.push(element)
  }
  this.dequeue = () => items.shift()
  this.front = () => items[0]
  this.isEmpty = () => items.length === 0
  this.size = () => items.length
  this.print = () => console.log(items.toString())
}

function PriorityQueue () {
  const items = []
  function QueueElement (element, priority) {
    this.element = element
    this.priority = priority
  }
  this.enqueue = (element, priority) => {
    const queueElement = new QueueElement(element, priority)
    let added = false
    for (let i = 0; i < items.length; i++) {
      if (queueElement.priority < items[i].priority) {
        items.splice(i, 0, queueElement)
        added = true
        break
      }
    }
    if (!added) {
      items.push(queueElement)
    }
  }
  this.print = () => {
    for (let i = 0; i < items.length; i++) {
      console.log(`${items[i].element} - ${items[i].priority}`)
    }
  }
  this.dequeue = () => items.shift()
  this.front = () => items[0]
  this.isEmpty = () => items.length === 0
  this.size = () => items.length
}
module.exports = { Queue, PriorityQueue }
