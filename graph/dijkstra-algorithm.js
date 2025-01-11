/*  
    Find shortest path for each vetext from source
    - Single Source Shortest Path

            1 
      5  /  |  \ 15
        /   |   \
       0    10  3
        \   |   /
      8  \  |  / 20
            2

    - Solution:
        - we maintain two set : finalize = [false, false, false, false], dist = [Infinity, Infinity, Infinity, Infinity]
        - dist[0] = 0 (since source/starting point is 0 )
        - we find the minimum value from dist[] and take the index as vertext u (considering the vertext is not finalized)
        - now mark the the vertext 'u' as finalized
        - find the dist of adjacent vertext, dist[v] = dist[u] + weight(u, v) 
            - if (dist[v] > dist[u] + weight(u, v)) then update dist[v] = dist[u] + weight(u, v) 
        - we traverse graph for finding next vertex 
*/

function mimimumSpanningTree(graph) {
  const n = graph.length;
  const finalize = Array.from({ length: n }, () => false);
  const dist = Array.from({ length: n }, () => Infinity);
  // distance of source = 0
  dist[0] = 0;
  // we find the minimum value from dist[] and take the index as vertext u
  for (let i = 0; i < n; i++) {
    // start vertex
    let u = Infinity;
    for (let d = 0; d < n; d++) {
      if (!finalize[d] && dist[d] < u) {
        u = i;
      }
    }
    // now mark the the vertext 'u' as a finalized
    finalize[u] = true;
    // we find the next vertex and update the distance with minimum value
    for (let v of graph[u]) {
      if (!finalize[v.getV()]) {
        dist[v.getV()] = Math.min(dist[v.getV()], dist[u] + v.getW());
      }
    }
  }
  console.log("finalize:", finalize);
  console.log("MST distance: ", dist);
}

class AdjListNode {
  constructor(v, w) {
    this.v = v; // v - vertext
    this.w = w; // w - weight
  }
  getV() {
    return this.v;
  }
  getW() {
    return this.w;
  }
}

function addEdge(adj, u, v, w) {
  const node1 = new AdjListNode(v, w);
  adj[u].push(node1);
  // undirected case
  const node2 = new AdjListNode(u, w);
  adj[v].push(node2);
}

(function () {
  const n = 4;
  const adj = Array.from({ length: n }, () => []);
  //   addEdge(adj, 0, 1, 5);
  //   addEdge(adj, 0, 2, 8);
  //   addEdge(adj, 1, 2, 3);
  //   addEdge(adj, 1, 3, 20);
  //   addEdge(adj, 2, 3, 2);
  addEdge(adj, 0, 1, 5);
  addEdge(adj, 0, 2, 8);
  addEdge(adj, 1, 2, 10);
  addEdge(adj, 1, 3, 15);
  addEdge(adj, 2, 3, 20);
  mimimumSpanningTree(adj);
})();
