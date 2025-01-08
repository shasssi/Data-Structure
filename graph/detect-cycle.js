/**
 * Detect Cycle in a Undirected graph
 * We can use BFS or DFS
 * DFS
    - we maintain a visited array to check if vertext is already visited
    - if next time if same vertex is called - we can call it a Cyclic graph
        - but here one extra check will be required - it should not be parant.
        1
      /  | 
    0    | 
      \  | 
        2 
    - eg. DFS we start from 0 = next child (1, 2)
        - we take 1 = next adjacent will be 0 and 2
            - here 0 is alredy visited but based on this we should not consider it is a cycle
            - 0 is parent of 1 hence we should ingore it
        - we take 2 after 1
            - here 2 adjacent is (1 0)
            - 1 is parant & visited = false
            - 0 is not parent of 2 & it is alrady visited = true
        It is a cyclic graph
*/

function dfs(adjArr, v) {
  const visited = Array.from({ length: v }, () => false);
  for (let i = 0; i < v; i++) {
    if (!visited[i]) {
      const parent = -1;
      return dfsRecursive(adjArr, i, visited, parent);
    }
  }
  return false;
}

function dfsRecursive(adjArr, s, visited, parent) {
  visited[s] = true;
  console.log(s, parent);
  for (let i = 0; i < adjArr[s].length; i++) {
    const u = adjArr[s][i];
    if (!visited[u]) {
        // source will be next parent
        dfsRecursive(adjArr, u, visited, s);
    } else if (u !== parent) {
      return true;
    } 
  }
  return false;
}

function addEdge(adjArr, i, j) {
  adjArr[i].push(j);
  adjArr[j].push(i); // undirected
}

function printAdjList(adjArr) {
  for (let i in adjArr) {
    let result = `${i}: `;
    for (let j in adjArr[i]) {
      result += `${adjArr[i][j]} `;
    }
    console.log(result);
  }
}

(function main() {
  // Total number of vertices
  const vertex = 4;
  // create adjacent list of total 4 vertex
  const adjArr = Array.from({ length: vertex }, () => []);
  // Add Edges
  addEdge(adjArr, 0, 1);
  addEdge(adjArr, 0, 2);
  addEdge(adjArr, 1, 2);
  addEdge(adjArr, 2, 3);

  console.log(adjArr);
  printAdjList(adjArr);
  console.log(dfs(adjArr, vertex));
  /*    
      0            
      |  \         
      |   2 --- 3  
      |  /         
      1    
  
      Vertex | connection with
      0        1, 2     (1, 2)
      1        0, 2     (0, 2)
      2        0, 1, 3  (0, 1, 3)
      3        2        (2)
  */
})();
