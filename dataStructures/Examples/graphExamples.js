const Graph = require("../myGraph");
const Stack = require("../myStack");

let graph = new Graph();
/* let myVertices = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];

for (let i = 0; i < myVertices.length; i++) {
  graph.addVertex(myVertices[i]);
}

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("A", "D");
graph.addEdge("C", "D");
graph.addEdge("C", "G");
graph.addEdge("D", "G");
graph.addEdge("D", "H");
graph.addEdge("B", "E");
graph.addEdge("B", "F");
graph.addEdge("E", "I");

console.log(graph.toString());

const printNode = (value) => {
  console.log("Visited vertex: " + value);
};

graph.DFS(printNode);
graph.dfs(printNode);

graph.bfs(myVertices[0], printNode);

let shortestPathA = graph.BFS(myVertices[0]);
console.log(shortestPathA);

let fromVertex = myVertices[0];
for (var i = 1; i < myVertices.length; i++) {
  var toVertex = myVertices[i],
    path = new Stack();
  for (var v = toVertex; v !== fromVertex; v = shortestPathA.predecessors[v]) {
    path.push(v);
  }
  path.push(fromVertex);
  var s = path.pop();
  while (!path.isEmpty()) {
    s += " - " + path.pop();
  }
  console.log(s);
} */
let otherGraph = [
  [0, 2, 4, 0, 0, 0],
  [0, 0, 1, 4, 2, 0],
  [0, 0, 0, 0, 3, 0],
  [0, 0, 0, 0, 0, 2],
  [0, 0, 0, 3, 0, 2],
  [0, 0, 0, 0, 0, 0],
];
let anotherGraph = [
  [0, 2, 4, 0, 0, 0],
  [2, 0, 2, 4, 2, 0],
  [4, 2, 0, 0, 3, 0],
  [0, 4, 0, 0, 3, 2],
  [0, 2, 3, 3, 0, 2],
  [0, 0, 0, 2, 2, 0],
];

console.log(graph.dijkstra(0, otherGraph));
console.log(graph.floydWarshall(otherGraph));

console.log(graph.prim(anotherGraph))