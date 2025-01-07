/*  BFS with source and connected graph

                1 -- 3            
             /  |   /|
           0    |  / |
             \  | /  |
                2 -- 4   

                Vertex | connection with
                0        1, 2    
                1        0, 2, 3
                2        0, 1, 3, 4
                3        1, 2, 4
                4        2, 3   
            
            BFS(0) = {0} {1 2} {3 4}
            BFS(3) = 3 1 2 4 0
*/

/**
 * @param {*} adjArr: Adjacent List
 * @param {*} v: total vertex
 * @param {*} s: soucce for BFS traversal
 * @implements using queue and one array of length vertext to track visited vertex
 */
function bfsTraversal(adjArr, v, s) {
  const visited = Array.from({ length: v }, () => false);
  visited[s] = true;
  const queue = [];
  queue.push(s);
  while (queue.length !== 0) {
    // vertex
    const u = queue[0];
    // print bfs result
    console.log(u);
    // pop first from queue - FIFO
    queue.shift();
    // push the immediate vertex to the queue
    for (let i in adjArr[u]) {
      // visited false - make it true - push it to queue
      if (!visited[adjArr[u][i]]) {
        visited[adjArr[u][i]] = true;
        queue.push(adjArr[u][i]);
      }
    }
  }
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
  const vertex = 5;
  // create adjacent list of total 4 vertex
  const adjArr = Array.from({ length: vertex }, () => []);
  // Add Edges
  addEdge(adjArr, 0, 1);
  addEdge(adjArr, 0, 2);
  addEdge(adjArr, 1, 2);
  addEdge(adjArr, 1, 3);
  addEdge(adjArr, 2, 3);
  addEdge(adjArr, 2, 4);
  addEdge(adjArr, 3, 4);

  console.log(adjArr);
  printAdjList(adjArr);
  console.log("----- BFS ------");
  bfsTraversal(adjArr, vertex, 0);
  console.log("----------------");
  bfsTraversal(adjArr, vertex, 3);
})();
