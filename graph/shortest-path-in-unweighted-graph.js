/*
    - Shortest path in Directed/Undirected & Unweighted Graph
    - Find theshortest path from source to all vertext.

    Eg. Adjacent List = [[1,3], [0,3,2], [1,3], [0,1,2]]
    Source = 0
    Shortest Path al all vertex = [0, 1, 2, 1]
                              v =  0  1  2  3
    - Solution:
        - we use BFS bcz it 
            - first traverse 1 edge away (all immediate nodes)
            - then traverse 2 egde away (all next immediate nodes)
            - then traverse 3 egde away
*/

function shortestPath(adj) {
  const n = adj.length;
  const dist = Array.from({ length: n }, () => Infinity);
  // BFS traversal
  const visited = Array.from({ length: n }, () => false);
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      bfsTraversal(adj, i, visited, dist);
    }
  }
  return dist;
}

function bfsTraversal(adj, s, visited, dist) {
  visited[s] = true;
  const queue = [];
  queue.push(s);
  dist[s] = 0;
  while (queue.length !== 0) {
    const u = queue[0];
    queue.shift();
    for (let v of adj[u]) {
      if (!visited[v]) {
        dist[v] = dist[u] + 1;
        visited[v] = true;
        queue.push(v);
      }
    }
  }
}

(function () {
  console.log(
    shortestPath([
      [1, 3],
      [0, 3, 2],
      [1, 3],
      [0, 1, 2],
    ])
  );
  console.log(
    shortestPath([
      [1, 3],
      [0, 2],
      [1],
      [0, 7, 4],
      [3, 7, 6, 5],
      [4, 6],
      [4, 5, 7],
      [4, 3, 6]
    ])
  );
  // diercted graph 
  console.log(
    shortestPath([
      [1, 4],
      [2],
      [3],
      [],
      [5, 2],
      [3]
    ])
  );
})();
