/*
    Input: n = 7, edges = [[0,1],[0,2],[1,4],[1,5],[2,3],[2,6]], hasApple = [false,false,true,false,true,true,false]
    Output: 8 
    Explanation: The figure above represents the given tree where red vertices have an apple.
    One optimal path to collect all apples is shown by the green arrows. 

    Input: n = 7, edges = [[0,1],[0,2],[1,4],[1,5],[2,3],[2,6]], hasApple = [false,false,true,false,false,true,false]
    Output: 6
    Explanation: The figure above represents the given tree where red vertices have an apple.
    One optimal path to collect all apples is shown by the green arrows.

    Input: n = 7, edges = [[0,1],[0,2],[1,4],[1,5],[2,3],[2,6]], hasApple = [false,false,false,false,false,false,false]
    Output: 0
*/
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {boolean[]} hasApple
 * @return {number}
 */
var minTime = function (n, edges, hasApple) {
  const adj = createAdjacenyList(n, edges);
  console.log(adj);
  const visited = Array.from({ length: n }, () => false);
  let time = 0;
  // node 0 will have zero cost, next child will have 2 cost
  time = dfsRecursive(adj, 0, visited, hasApple, 0);
  return time;
};

function dfsRecursive(adj, s, visited, hasApple, myCost) {
  if (visited[s]) {
    return 0;
  }
  visited[s] = true;
  // child dfs
  let childCost = 0;
  for (let v of adj[s]) {
    if (!visited[v]) {
      // cost of child = 2 (one unit of going & one unit for coming)
      childCost += dfsRecursive(adj, v, visited, hasApple, 2);
    }
  }
  // no child is having an apple && parent node is also not an apple
  if (childCost === 0 && !hasApple[s]) {
    return 0;
  }
  return myCost + childCost;
}

function createAdjacenyList(n, edges) {
  const adj = Array.from({ length: n }, () => []);
  for (let u of edges) {
    const i = u[0];
    const j = u[1];
    adj[i].push(j);
    adj[j].push(i); // undirected graph
  }
  return adj;
}

(function () {
  console.log(
    minTime(
      7,
      [
        [0, 1],
        [0, 2],
        [1, 4],
        [1, 5],
        [2, 3],
        [2, 6],
      ],
      [false, false, true, false, true, true, false]
    )
  );
})();
