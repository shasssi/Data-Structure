/*
    - Shortest path in Directed Acyclic & weighted Graph
    - Find the shortest path from source to all vertext.

    Eg. Adjacent List = [1, 4], [2], [3], [], [5, 2], [3]]
    Source = 0
    Shortest Path al all vertex = [0, 2, 3, 6, 1, 5]
                              v =  0  1  2  3  4  5
    
    - Algorithm:
        - Bell man Ford Algo
        - Dijkstra's Algo
        - Toplogical Sort
    - Solution:
        - Find Topological sort
        - for every u in topological list
        - find every adjacent of u 
            - if dist[v] > dist[u] + weight of v
            -  dist[v] = dist[u] + weight of v
*/

function shortestPath(adj) {
  const n = adj.length;
  const dist = Array.from({ length: n }, () => Infinity);

  // BSF - Topological Sort
  const indegree = indegreeFn(adj, n);
  const queue = [];
  for (let i = 0; i < indegree.length; i++) {
    if (indegree[i] === 0) {
      queue.push(i);
      dist[i] = 0;
    }
  }
  const tpSort = [];
  while (queue.length !== 0) {
    const u = queue[0];
    tpSort.push(u);
    queue.shift();
    for (let v of adj[u]) {
      indegree[v.getV()]--;
      if (indegree[v.getV()] === 0) {
        queue.push(v.getV());
      }
    }
  }
  // calculate shortest distance
  for (let u of tpSort) {
    for ( let v of adj[u]) {
        // first time Infinity > any value
        // second time it will update with shortest path if dist is greater
        if (dist[v.getV()] > dist[u] + v.getW()) {
            dist[v.getV()] = dist[u] + v.getW();
        }
    }
  }
  return dist;
}

function indegreeFn(adj, n) {
  const indegree = Array.from({ length: n }, () => 0);
  for (let i = 0; i < n; i++) {
    const u = adj[i];
    for (let v of u) {
      indegree[v.getV()]++;
    }
  }
  console.log("indegree", indegree);
  return indegree;
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
    const node = new AdjListNode(v, w);
    adj[u].push(node);
}

(function () {
    const n = 6;
    const adj = Array.from({length: n}, () => []);
    addEdge(adj, 0, 1, 2);
    addEdge(adj, 0, 4, 1);
    addEdge(adj, 1, 2, 3);
    addEdge(adj, 2, 3, 6);
    addEdge(adj, 4, 2, 2);
    addEdge(adj, 4, 5, 4);
    addEdge(adj, 5, 3, 1);
    console.log(adj);
    console.log(shortestPath(adj));
})();
