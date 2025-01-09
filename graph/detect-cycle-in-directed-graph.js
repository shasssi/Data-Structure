// create visited, dfsVisited booelan flags
// same dfsRecusrive call to traverse next adjacent & check for visited
// if not visited - call dfsRecursive again
// if vetext dfsRecursive is completed -- we make dfsVisited[v] = false to go to the starting vertex/node from where rescurion started
// if if visted & dfsVisited bit true === cyclic directed graph
function detectCycle(adjArr) {
  const size = adjArr.length;
  const visited = Array.from({ length: size }, () => false);
  const dfsVisited = Array.from({ length: size }, () => false);
  for (let i = 0; i < size; i++) {
    if (!visited[i]) {
      if (dfsRecursive(adjArr, i, visited, dfsVisited)) return true;
    }
  }
  return false;
}

function dfsRecursive(adjArr, s, visited, dfsVisited) {
  visited[s] = true;
  dfsVisited[s] = true;
  for (let v of adjArr[s]) {
    if (!visited[v]) {
      if (dfsRecursive(adjArr, v, visited, dfsVisited)) return true;
    } else if (visited[v] && dfsVisited[v]) {
      return true;
    }
  }
  dfsVisited[s] = false;
  return false;
}

(function main() {
  console.log(detectCycle([[1, 2], [2, 3], [5], [0], [5], [], []]));
  console.log(detectCycle([[1, 2], [2, 3], [5], [0], [5], [], []]));
  console.log(detectCycle([[1], [2], [3], []]));
})();
