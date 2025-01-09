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
  const adj = Array.from({ length: n }, () => []);
  addEdge(adj, 0, 1, 2);
  addEdge(adj, 0, 4, 1);
  addEdge(adj, 1, 2, 3);
  addEdge(adj, 2, 3, 6);
  addEdge(adj, 4, 2, 2);
  addEdge(adj, 4, 5, 4);
  addEdge(adj, 5, 3, 1);
  console.log(adj);
})();
