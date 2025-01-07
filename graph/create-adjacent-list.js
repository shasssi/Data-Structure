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
