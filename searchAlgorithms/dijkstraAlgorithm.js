const graph = {
    'A': { 'B': 2, 'C': 4 },
    'B': { 'A': 2, 'C': 2, 'D': 2 },
    'C': { 'A': 4, 'B': 2, 'D': 3, 'E': 3 },
    'D': { 'B': 2, 'C': 3, 'E': 1 },
    'E': { 'C': 3, 'D': 1 },
};

const dijkstra = (graph, start, end) => {
  const distances = {};
  const previous = {};
  const nodes = [];
  const path = [];
  let smallest;
  for (let vertex in graph) {
    if (vertex === start) {
      distances[vertex] = 0;
      nodes.push(vertex);
    } else {
      distances[vertex] = Infinity;
      nodes.push(vertex);
    }
    previous[vertex] = null;
  }
  while (nodes.length) {
    smallest = nodes.find(
      (vertex) =>
        distances[vertex] ===
        Math.min(...nodes.map((vertex) => distances[vertex]))
    );
    nodes.splice(nodes.indexOf(smallest), 1);
    if (smallest === end) {
      while (previous[smallest]) {
        path.push(smallest);
        smallest = previous[smallest];
      }
      break;
    }
    if (smallest || distances[smallest] !== Infinity) {
      for (let neighbor in graph[smallest]) {
        let distance = distances[smallest] + graph[smallest][neighbor];
        if (distance < distances[neighbor]) {
          distances[neighbor] = distance;
          previous[neighbor] = smallest;
        }
      }
    }
  }
  return path.concat(smallest).reverse();
};

console.log(dijkstra(graph, "A", "D"));
