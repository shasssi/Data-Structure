/**
 * Topological Sort - Kahn's BFS Based algorithm
 * Directed Acyclic Graph
 - Concept: we need to write the vertex 
    but before  that we need to make sure all the vertex are covered which are reqired to reach that vertex
 - Less dependent first means we need indegree of vertext
 - Those having less Indegree - we write first - then graph traversal
 eg.
                1
                |
                |
                v
       2 -----> 0 <----- 3

    Adjacent List = [[], [0], [0], [0]]
    Indegree = [3, 0, 0, 0]
                0  1  2  3

    Topological order = (1 2 3 0) or (2 3 1 0) or (3 2 1 0)

  eg 2. adj = [[], [3], [3], [], [0,1], [0,2]]
    Indegree = [2, 1, 1, 2, 0, 0]
                0  1  2  3  4  5
    
    Topological order = (4 5 1 2 3 0) or (5 4 1 2 3 0) 
*/

/**
    - Solution
    - find indegree of each vertex
    - create a queue
    - push all 0 indegree vertext to queue
    - BFS travesal logic
 */

function topologicalSort(adj) {
  const indegree = indegreeFn(adj);
  console.log("indegree", indegree);
  const queue = [];
  for (let i = 0; i < indegree.length; i++) {
    if (indegree[i] === 0) {
      // push all 0 indegree vertext to queue
      queue.push(i);
    }
  }
  console.log("queue", queue);
  // BFS
  console.log("------- topological sort -------");
  while (queue.length !== 0) {
    const u = queue[0];
    queue.shift();
    console.log(u);
    
    for (let j = 0; j < adj[u].length; j++) {
        const v = adj[u][j];
        // for every adjacent v of u - reduce indegree of v
        indegree[v]--;
        // if indegree of v is zero - will push to queue
        if (indegree[v] === 0) {
            queue.push(v);
        }        
    }
  }

}

function indegreeFn(adj) {
  const v = adj.length;
  const indegree = Array.from({ length: v }, () => 0);
  for (let i = 0; i < v; i++) {
    const u = adj[i];
    for (let j = 0; j < u.length; j++) {
      indegree[u[j]]++;
    }
  }
  return indegree;
}

(function main() {
  topologicalSort([[], [0], [0], [0]]);
  topologicalSort([[], [3], [3], [], [0, 1], [0, 2]]);
  topologicalSort([[1, 4], [2], [3], [], [2, 5], [3]]);
})();
