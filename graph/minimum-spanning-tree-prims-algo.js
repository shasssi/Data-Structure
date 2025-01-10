/*
    - Prim's Algorithm (kind of Greedy Approach)

            1 
      5  /  |  \ 15
        /   |   \
       0    10  3
        \   |   /
      8  \  |  / 20
            2

    - Maintain two Set
        - MSET {}
        - set {0, 1, 2, 3}
    - res = 0 (to calculate total weight)

    ** Find the min. edge which connect the current MSET to remaining vertex

    res = 0 
    set = {0, 1, 2, 3}

    MSET       |     Set           |    res
    {0}            {1, 2, 3}             0
    {0, 1}         {2, 3}               0 + 5
    {0, 1, 2}      {3}                  0 + 5 + 8 
    {0, 1, 2, 3}   {}                   0 + 5 + 8 + 15 = 28 

           1 
      5  /   \ 15
        /     \
       0       3
        \     
      8  \     
          2

    - Solution:
        - we maintain two set : mset = [false, false, false, false], dist = [Infinity, Infinity, Infinity, Infinity]
        - dist[0] = 0 (since source/starting point is 0 )
        - we find the minimum value from dist[] and take the index as vertext u (considering the vertext is not inmset[])
        - now mark the the vertext 'u' as a part of mset[]
        - add the value of dist[] to the result (result = total mimimum weight of MST)
        - we traverse graph for finding next vertex 

*/

function mimimumSpanningTree(graph) {
  const n = graph.length;
  let result = 0;
  const mset = Array.from({ length: n }, () => false);
  const dist = Array.from({ length: n }, () => Infinity);
  // distance of source = 0
  dist[0] = 0;
  // we find the minimum value from dist[] and take the index as vertext u
  for (let i = 0; i < n; i++) {
    // start vertex
    let u = -1;
    for (let d = 0; d < n; d++) {
      if (!mset[d] && (u === -1 || dist[d] < dist[u])) {
        u = i;
      }
    }
    // now mark the the vertext 'u' as a part of mset[]
    mset[u] = true;
    result += dist[u];
    // we find the next vertex and update the distance with minimum value
    for (let v of graph[u]) {
      if (!mset[v.getV()]) {
        dist[v.getV()] = Math.min(dist[v.getV()], v.getW());
      }
    }
  }
  console.log("mset:", mset);
  console.log("result: ", result);
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
  addEdge(adj, 0, 1, 5);
  addEdge(adj, 0, 2, 8);
  addEdge(adj, 1, 2, 10);
  addEdge(adj, 1, 3, 15);
  addEdge(adj, 2, 3, 20);
  console.log(adj);
  mimimumSpanningTree(adj);
})();
