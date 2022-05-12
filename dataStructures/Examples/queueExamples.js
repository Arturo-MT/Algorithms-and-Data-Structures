const { Queue, PriorityQueue } = require("../myQueue");

let queue = new Queue();
console.log("Queue");

console.log(queue.isEmpty());

queue.enqueue("Arturo");
queue.enqueue("Cooper");
queue.enqueue("Aika");

queue.print();

console.log(queue.size());
console.log(queue.isEmpty());

queue.dequeue();
queue.dequeue();

queue.print();
console.log("");

let priorityQueue = new PriorityQueue();
console.log("Priority Queue");

console.log(priorityQueue.isEmpty());

priorityQueue.enqueue("Arturo", 1);
priorityQueue.enqueue("Cooper", 2);
priorityQueue.enqueue("Aika", 0);

priorityQueue.print();

console.log(priorityQueue.size());
console.log(priorityQueue.isEmpty());

priorityQueue.dequeue();
priorityQueue.dequeue();

priorityQueue.print();
