/**
 * A province is a group of directly or indirectly connected cities and no other cities outside of the group.
 * @param {number[][]} isConnected
 * @return {number}
 */

// DFS traversal and mark the visited - we need to find total discontinuos graph
// disconnected graph count will be total province
var findCircleNum = function (isConnected) {
  const n = isConnected.length;
  const m = isConnected[0].length;
  let province = 0;
  const visited = Array.from({ length: n }, () => false);
  // create adjacne list
  const adj = createAdjacentList(isConnected, n);
  // dfs traversal
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      province++;
      dfsRecursive(adj, i, visited);
    }
  }
  return province;
};

function dfsRecursive(graph, s, visited) {
  visited[s] = true;
  for (let v of graph[s]) {
    if (!visited[v]) {
      dfsRecursive(graph, v, visited);
    }
  }
}

function createAdjacentList(graph, n) {
  const adj = Array.from({ length: n }, () => []);
  for (let i = 0; i < n; i++) {
    for (let u = 0; u < graph[i].length; u++) {
      const v = graph[i][u];
      if (i !== u && v === 1 && !adj[i].includes(u)) {
        adj[i].push(u);
        adj[u].push(i); //undirected
      }
    }
  }
  return adj;
}

(function () {
  console.log(
    findCircleNum([
      [1, 0, 0, 1],
      [0, 1, 1, 0],
      [0, 1, 1, 1],
      [1, 0, 1, 1],
    ])
  );
  console.log(
    findCircleNum([[1,0,0],[0,1,0],[0,0,1]])
  );
  console.log(
    findCircleNum([[1,1,0],[1,1,0],[0,0,1]])
  );
})();
