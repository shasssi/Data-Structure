/*  

    BFS without source and disconnected graph

              1 -- 3            
             /    /         4
           0     /        /  \
             \  /        /    \
              2         5 ---- 6

                Vertex | edges
                0        1, 2    
                1        0, 3
                2        0, 3
                3        1, 2
                4        5, 6
                5        4, 6
                6        4, 5   
            
            BFS(0) = 0 1 2 3
*/

/**
 * @param {*} adjArr: Adjacent List
 * @param {*} v: total vertex
 * @param {*} s: soucce for BFS traversal
 * @param {*} visited: visited array
 * @implements using queue and one array of length vertext to track visited vertex
 */
function bfsTraversal(adjArr, s, visited) {
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

function bfsDisconnected(adjArr, v) {
  const visited = Array.from({ length: v }, () => false);
  let count = 0;
  for (let i = 0; i < adjArr.length; i++) {
    // iterate all vertext from 0 to 6
    // source is not given for BFS traversal
    if (!visited[i]) {
      count ++;
      console.log(`----- BFS source - ${i}------`);
      bfsTraversal(adjArr, i, visited);
      console.log("----------------");
    }
  }
  console.log(`Total discontinous graph: ${count}`)
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
  const vertex = 7;
  // create adjacent list of total 4 vertex
  const adjArr = Array.from({ length: vertex }, () => []);
  // Add Edges
  addEdge(adjArr, 0, 1);
  addEdge(adjArr, 0, 2);
  addEdge(adjArr, 1, 3);
  addEdge(adjArr, 2, 3);
  addEdge(adjArr, 4, 5);
  addEdge(adjArr, 4, 6);
  addEdge(adjArr, 5, 6);

  console.log(adjArr);
  printAdjList(adjArr);
  bfsDisconnected(adjArr, vertex);
})();
