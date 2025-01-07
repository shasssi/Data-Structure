/*  

    DFS without source and disconnected graph

               0
             /   \   
            1     4
            |    /  \     DFS = 0 1 2 3 4 5 6
            2    5--6     - first vertext 0  
            |             - then next adjacent (1 or 4)
            3             - if we pick 1, then repat the process = 2 3
                          - then we pick 4 = 5 6
    Adjacent List
    0 = [1, 4]
    1 = [0, 2]
    2 = [1, 3]
    3 = [2]
    4 = [0, 5, 6]
    5 = [4, 6]
    6 = [4, 5]
*/

/**
 * @param {*} adjArr: Adjacent List
 * @param {*} v: total vertex
 * @param {*} s: soucce for BFS traversal
 * @param {*} visited: visited array
 * @implements using queue and one array of length vertext to track visited vertex
 */
function dfsRecursive(adjArr, s, visited) {
  visited[s] = true;
  console.log(s);
  for (let i = 0; i < adjArr[s].length; i++) {
    if (!visited[adjArr[s][i]]) {
      dfsRecursive(adjArr, adjArr[s][i], visited);
    }
  }
}

function dfs(adjArr, v) {
  const visited = Array.from({ length: v }, () => false);
  for (i = 0; i < v; i++) {
    // iterate all vertext from 0 to 6
    if (!visited[i]) {
      console.log(`----- DFS source - ${i}------`);
      dfsRecursive(adjArr, i, visited);
      console.log("----------------");
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
  const vertex = 7;
  // create adjacent list of total 4 vertex
  const adjArr = Array.from({ length: vertex }, () => []);
  // Add Edges
  addEdge(adjArr, 0, 1);
  addEdge(adjArr, 0, 4);
  addEdge(adjArr, 1, 2);
  addEdge(adjArr, 2, 3);
  addEdge(adjArr, 4, 5);
  addEdge(adjArr, 4, 6);
  addEdge(adjArr, 5, 6);

  console.log(adjArr);
  printAdjList(adjArr);
  dfs(adjArr, vertex);
})();
