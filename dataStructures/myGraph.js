const Dictionary = require('./myDictionary')
const { Queue } = require('./myQueue')

function Graph () {
  const vertices = []
  const adjList = new Dictionary()

  this.addVertex = (v) => {
    vertices.push(v)
    adjList.set(v, [])
  }
  this.addEdge = (v, w) => {
    adjList.get(v).push(w)
    adjList.get(w).push(v)
  }
  this.toString = () => {
    let s = ''
    for (let i = 0; i < vertices.length; i++) {
      s += vertices[i] + ' -> '
      const neighbors = adjList.get(vertices[i])
      for (let j = 0; j < neighbors.length; j++) {
        s += neighbors[j] + ' '
      }
      s += '\n'
    }
    return s
  }
  // BFS algorithm
  const initializeColor = () => {
    const color = []
    for (let i = 0; i < vertices.length; i++) {
      color[vertices[i]] = 'white'
    }
    return color
  }
  // Breadth-first search (BFS)
  this.bfs = (v, callback) => {
    const color = initializeColor()
    const queue = new Queue()
    queue.enqueue(v)

    while (!queue.isEmpty()) {
      const u = queue.dequeue()
      const neighbors = adjList.get(u)
      color[u] = 'grey'

      for (let i = 0; i < neighbors.length; i++) {
        const w = neighbors[i]
        if (color[w] === 'white') {
          color[w] = 'grey'
          queue.enqueue(w)
        }
      }
      color[u] = 'black'
      if (callback) {
        callback(u)
      }
    }
  }
  this.BFS = (v) => {
    const color = initializeColor()
    const queue = new Queue()
    const d = []
    const pred = []
    queue.enqueue(v)

    for (let i = 0; i < vertices.length; i++) {
      d[vertices[i]] = 0
      pred[vertices[i]] = null
    }

    while (!queue.isEmpty()) {
      const u = queue.dequeue()
      const neighbors = adjList.get(u)
      color[u] = 'grey'
      for (let i = 0; i < neighbors.length; i++) {
        const w = neighbors[i]
        if (color[w] === 'white') {
          color[w] = 'grey'
          d[w] = d[u] + 1
          pred[w] = u
          queue.enqueue(w)
        }
      }
      color[u] = 'black'
    }
    return {
      distances: d,
      predecessors: pred
    }
  }
  // Depth-first search (DFS)
  const dfsVisit = (u, color, callback) => {
    color[u] = 'grey'
    if (callback) {
      callback(u)
    }
    const neighbors = adjList.get(u)
    for (let i = 0; i < neighbors.length; i++) {
      const w = neighbors[i]
      if (color[w] === 'white') {
        dfsVisit(w, color, callback)
      }
    }
    color[u] = 'black'
  }

  this.dfs = (callback) => {
    const color = initializeColor()

    for (let i = 0; i < vertices.length; i++) {
      if (color[vertices[i]] === 'white') {
        dfsVisit(vertices[i], color, callback)
      }
    }
  }
  let time = 0
  const DFSVisit = (u, color, d, f, p) => {
    console.log('discovered ' + u)
    color[u] = 'grey'
    d[u] = ++time
    const neighbors = adjList.get(u)
    for (let i = 0; i < neighbors.length; i++) {
      const w = neighbors[i]
      if (color[w] === 'white') {
        p[w] = u
        DFSVisit(w, color, d, f, p)
      }
    }
    color[u] = 'black'
    f[u] = ++time
    console.log('explored ' + u)
  }
  this.DFS = () => {
    const color = initializeColor
    const d = []
    const f = []
    const p = []
    time = 0

    for (let i = 0; i < vertices.length; i++) {
      f[vertices[i]] = 0
      d[vertices[i]] = 0
      p[vertices[i]] = null
    }
    for (let i = 0; i < vertices.length; i++) {
      if (color[vertices[i]] === 'white') {
        dfsVisit(vertices[i], color, d, f, p)
      }
    }
    return {
      discovery: d,
      finished: f,
      predecessors: p
    }
  }
  // Dijkstra algorithm
  const INF = Number.MAX_SAFE_INTEGER
  const minDistance = (dist, visited) => {
    let min = INF
    let minIndex = -1

    for (let v = 0; v < dist.length; v++) {
      if (visited[v] === false && dist[v] <= min) {
        min = dist[v]
        minIndex = v
      }
    }
    return minIndex
  }

  this.dijkstra = function (src, graph) {
    const dist = []
    const visited = []
    const length = graph.length

    for (let i = 0; i < length; i++) {
      dist[i] = INF
      visited[i] = false
    }
    dist[src] = 0
    for (let i = 0; i < length - 1; i++) {
      const u = minDistance(dist, visited)

      visited[u] = true

      for (let v = 0; v < length; v++) {
        if (
          !visited[v] &&
          graph[u][v] !== 0 &&
          dist[u] !== INF &&
          dist[u] + graph[u][v] < dist[v]
        ) {
          dist[v] = dist[u] + graph[u][v]
        }
      }
    }
    return dist
  }
  // Floyd-Warshall algorithm
  this.floydWarshall = (graph) => {
    const dist = []
    const length = graph.length
    let i
    let j
    let k
    for (i = 0; i < length; i++) {
      dist[i] = []
      for (j = 0; j < length; j++) {
        dist[i][j] = graph[i][j]
      }
    }
    for (k = 0; k < length; k++) {
      for (i = 0; i < length; i++) {
        for (j = 0; j < length; j++) {
          if (dist[i][k] + dist[k][j] < dist[i][j]) {
            dist[i][j] = dist[i][k] + dist[k][j]
          }
        }
      }
    }
    return dist
  }
  // Prim's algorithm
  const minKey = (dist, visited) => {
    let min = INF
    let minIndex = -1

    for (let v = 0; v < dist.length; v++) {
      if (visited[v] === false && dist[v] <= min) {
        min = dist[v]
        minIndex = v
      }
    }
    return minIndex
  }

  this.prim = (graph) => {
    const parent = []
    const key = []
    const visited = []
    const length = graph.length
    let i
    for (i = 0; i < length; i++) {
      key[i] = INF
      visited[i] = false
    }
    key[0] = 0
    parent[0] = -1
    for (i = 0; i < length - 1; i++) {
      const u = minKey(key, visited)
      visited[u] = true
      for (let v = 0; v < length; v++) {
        if (graph[u][v] && visited[v] === false && graph[u][v] < key[v]) {
          parent[v] = u
          key[v] = graph[u][v]
        }
      }
    }
    return parent
  }
}

module.exports = Graph
