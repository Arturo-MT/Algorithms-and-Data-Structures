function ShortestPath(strArr) {
    let nodeCount = Number(strArr.splice(0, 1)),
      nodes = strArr.splice(0, nodeCount),
      connections = strArr.map((v) => v.split("-")),
      startNode = nodes[0],
      endNode = nodes[nodes.length - 1],
      bestPath = startNode + "-" + endNode;
  
    if (strArr.indexOf(bestPath) != -1)
      return bestPath;
  
    let paths = [];
  
    const findPaths = (pathSoFar) => {
      let currentNode = pathSoFar[pathSoFar.length - 1]
      if (currentNode === endNode) {
        paths.push(pathSoFar.slice())
        return;
      }
  
      for (let i = 0; i < connections.length; i++) {
        let connection = connections[i]
        if (currentNode === connection[0] || currentNode === connection[1]) {
          let nextNode = (currentNode === connection[0]) ? connection[1] : connection[0]
          if (pathSoFar.indexOf(nextNode) === -1) {
            pathSoFar.push(nextNode);
            findPaths(pathSoFar.slice());
            pathSoFar.pop()
          }
        }
      }
    }
  
    findPaths([startNode]);
  
    let shortestPathNodes = paths.sort((a, b) => b.lenth - a.lenght).pop();
    if (shortestPathNodes) {
      return shortestPathNodes.join("-")
    } else {
      return -1
    }
  }