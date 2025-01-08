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
    - create a stack
    - DFS travesal logic
        - if all vertex is travelled and all adjacent are visited
        - we push the vertext in stack
    - last = we empty the stack and print the result
 */

function topologicalSort(adj) {
  const v = adj.length;
  const visited = Array.from({ length: v }, () => false);
  const stack = [];
  for (let i = 0; i < v; i++) {
    if (!visited[i]) {
      bfsRecursive(adj, i, visited, stack);
    }
  }
  console.log("Topological order: ");
  let size = stack.length;
  while (size !== 0) {
    const elem = stack[size - 1];
    stack.pop();
    size = stack.length;
    console.log(elem);
  }
}

function bfsRecursive(adj, s, visited, stack) {
    visited[s] = true;
    const u = adj[s];
    for (const v of u) {
        if (!visited[v]) {
            bfsRecursive(adj, v, visited, stack);
        }
    }
    stack.push(s);
}

(function main() {
  topologicalSort([[], [0], [0], [0]]);
  topologicalSort([[], [3], [3], [], [0, 1], [0, 2]]);
})();
