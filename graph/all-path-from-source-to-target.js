/*
    - Given a directed acyclic graph (DAG) of n nodes labeled from 0 to n - 1, 
    find all possible paths from node 0 to node n - 1 and return them in any order.

    Input: graph = [[1,2],[3],[3],[]]
    Output: [[0,1,3],[0,2,3]]
    Explanation: There are two paths: 0 -> 1 -> 3 and 0 -> 2 -> 3.

    Input: graph = [[4,3,1],[3,2,4],[3],[4],[]]
    Output: [[0,4],[0,3,4],[0,1,3,4],[0,1,2,3,4],[0,1,4]]

    graph[i][j] != i (i.e., there will be no self-loops).
*/

/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (graph) {
  const n = graph.length;
  const source = 0;
  const destination = n - 1;
  let result = [];

  const path = [];
  dfsRecursive(graph, source, destination, path, result);
  return result;
};

function dfsRecursive(graph, s, d, path, result) {
  path.push(s);
  if (d === s) {
    result.push([...path]);
  } else {
    for (v of graph[s]) {
      dfsRecursive(graph, v, d, path, result);
    }
  }
  path.pop();
}

(function () {
  console.log(allPathsSourceTarget([[1, 2], [3], [3], []]));
  console.log(allPathsSourceTarget([[4, 3, 1], [3, 2, 4], [3], [4], []]));
})();
