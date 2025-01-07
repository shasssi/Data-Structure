/**
 * @param {number} n // total vertices
 * @param {number[][]} edges
 * @param {number} source // 0
 * @param {number} destination // n-1
 * @param {boolean[]} visited
 * @param {number[][]} adjArr // Adjacent List
 * @return {boolean}
 * Given : Bidirectional Graph
 * start = 0, end = 2
 * edges = [[0,1], [1,2], [2,0]]
 *       1
      /  | 
    0    | 
      \  | 
         2 

 */

function validPath(n, edges, source, destination) {
  const adjArr = adjacentList(n, edges);
  console.log(adjArr);
  const visited = Array.from({ length: n }, () => false);
  return bfsTraversal(adjArr, visited, source, destination);
}

function bfsTraversal(adjArr, visited, s, d) {
    visited[s] = true;
    const queue = [];
    queue.push(s);
    while (queue.length !== 0) {
        const u = queue[0];
        queue.shift();
        for (let i = 0; i < adjArr[u].length; i++) {
            if (!visited[adjArr[u][i]]) {
                visited[adjArr[u][i]] = true;
                queue.push(adjArr[u][i]);
            }
        }
        // check if last is true -- then break -- return result;
        if (visited[d]) {
            return visited[d];
        }
    }
    // return result last visited flag which is destination
    return visited[d];
}

function addEdge(adjArr, i, j) {
  adjArr[i].push(j);
  adjArr[j].push(i); // undirected or Bi-directional
}

function adjacentList(v, edges) {
  const adjArr = Array.from({ length: v }, () => []);
    for (let j = 0; j < edges.length; j++) {
        addEdge(adjArr, edges[j][0], edges[j][1]);
  }
  return adjArr;
}

(function main() {
  const v = 3;
  const edges = [
    [0, 1],
    [1, 2],
    [2, 0],
  ];
  console.log(validPath(v, edges, 0, 2));
})();
