/*  
    - Strongly Connected Components
        - if a set of veretex form a connection such that every vertex is reachable from each other

    eg.   0 -----> 1 -----> 3 ------> 4
                  | ^                | ^
                  | |                | |
                  | |                | |
                  v |                v |
                   2                  5
        Strongly Connected Components :
         - 0
         - 1 2 (we can go from 1 to 2 or 2 to 1)
         - 3
         - 4 5 (we can go from 4 to 5 or 5 to 4)

    eg.  0 -----> 1 <------ 3
         ^    /             |
         |   /              |
         |  v               | 
          2                 v
                            4 
        Strongly Connected Components :
         - 0 1 2
         - 3
         - 4
    
    - In case of Undirected graph 
        - Strongly Connected Components = total number of disconnected graph
         eg. below are 2 disconnected graph
                1
              /  | 
            0    |    3 --- 4
              \  | 
                2 
        - 0 1 2
        - 3 4
    
    - Kosaraju's Algo
        - order the vertices in decreasing order of finish time in DFS
            - we make a Dfs recurice call ---> start time
            - once all vertex is process for 'u' - we make a finished call -----> finish time
            - Algo : 
                - create empty stack, for every vertext -> dfsRecursive -> if u finishes all adjcacent -> push in stack
                - pop all from stack - this is order we use in step 3
        - reverse all the edges(direction)
        - Do DFS at reverse graph in the order obtained in step 1
        - For every vertex print all reachable vertices as Strongly Connected Components
*/

function kosarajuAlgo(graph) {
  const n = graph.length;
  const m = graph[0].length;
  console.log(graph);
  // order the vertices in decreasing order of finish time
  const stack = [];
  let visited = Array.from({ length: n }, () => false);
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      dfsRecursiveStack(graph, i, visited, stack);
    }
  }
  const order = [];
  let size = stack.length;
  while (size !== 0) {
    order.push(stack[size - 1]);
    stack.pop;
    size--;
  }
  console.log("order", order);
  // reverse all edges direction from original graph
  const reverseGraph = reverseEdgesDirection(graph, n);
  console.log("reverse", reverseGraph);
  // DFS on reverse edges with order from step 1
  visited = Array.from({ length: n }, () => false);
  let count = 0;
  for (let i = 0; i < order.length; i++) {
    const s = order[i];
    const connectedGraph = [];
    if (!visited[s]) {
      count++;
      dfsRecursive(reverseGraph, s, visited, connectedGraph);
      console.log(`connectedGraph ${count}`, connectedGraph);
    }
  }
  console.log("Total Strongly Connected Components: ", count);
}

function dfsRecursive(graph, s, visited, connectedGraph) {
  visited[s] = true;
  connectedGraph.push(s);
  for (let v of graph[s]) {
    if (!visited[v]) {
      dfsRecursive(graph, v, visited, connectedGraph);
    }
  }
}

function dfsRecursiveStack(graph, s, visited, stack) {
  visited[s] = true;
  for (let v of graph[s]) {
    if (!visited[v]) {
      dfsRecursiveStack(graph, v, visited, stack);
    }
  }
  stack.push(s);
}

function reverseEdgesDirection(graph, n) {
  const newGraph = Array.from({ length: n }, () => []);
  for (let i = 0; i < n; i++) {
    for (let v of graph[i]) {
      newGraph[v].push(i);
    }
  }
  return newGraph;
}

(function () {
  // directed graph
  const graph = [[1], [2, 3], [0], [4], []];
  kosarajuAlgo(graph);
})();
