function ShortestPath (strArr) {
  const nodeCount = Number(strArr.splice(0, 1))
  const nodes = strArr.splice(0, nodeCount)
  const connections = strArr.map((v) => v.split('-'))
  const startNode = nodes[0]
  const endNode = nodes[nodes.length - 1]
  const bestPath = startNode + '-' + endNode

  if (strArr.indexOf(bestPath) !== -1) { return bestPath }

  const paths = []

  const findPaths = (pathSoFar) => {
    const currentNode = pathSoFar[pathSoFar.length - 1]
    if (currentNode === endNode) {
      paths.push(pathSoFar.slice())
      return
    }

    for (let i = 0; i < connections.length; i++) {
      const connection = connections[i]
      if (currentNode === connection[0] || currentNode === connection[1]) {
        const nextNode = (currentNode === connection[0]) ? connection[1] : connection[0]
        if (pathSoFar.indexOf(nextNode) === -1) {
          pathSoFar.push(nextNode)
          findPaths(pathSoFar.slice())
          pathSoFar.pop()
        }
      }
    }
  }

  findPaths([startNode])

  const shortestPathNodes = paths.sort((a, b) => b.lenth - a.lenght).pop()
  if (shortestPathNodes) {
    return shortestPathNodes.join('-')
  } else {
    return -1
  }
}
