/*
    There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. 
    You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that 
    you must take course bi first if you want to take course ai.

    For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
    Return true if you can finish all courses. Otherwise, return false.

    

    Example 1:

    Input: numCourses = 2, prerequisites = [[1,0]]
    Output: true
    Explanation: There are a total of 2 courses to take. 
    To take course 1 you should have finished course 0. So it is possible.
    Example 2:

    Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
    Output: false
    Explanation: There are a total of 2 courses to take. 
    To take course 1 you should have finished course 0, 
    and to take course 0 you should also have finished course 1. So it is impossible.
*/

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
    - To create a course schedule we need to check whteher we can create 
    - Topological Sort - it works acyclic directed graph
    - we create a Adjcaency list
    - check if there is cycle present or not.
 */
var canFinish = function (numCourses, prerequisites) {
  const n = numCourses;
  // create adjacency list
  const adj = Array.from({ length: n }, () => []);
  for (let u of prerequisites) {
    const a = u[0];
    const b = u[1];
    adj[b].push(a);
  }
  console.log(adj);
  // check cycle in directed graph
  const visited = Array.from({ length: n }, () => false);
  const dfsVisited = Array.from({ length: n }, () => false);
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      if (checkCycle(adj, i, visited, dfsVisited)) {
        return false;
      }
    }
  }
  return true;
};

function checkCycle(adj, s, visited, dfsVisited) {
  visited[s] = true;
  dfsVisited[s] = true;
  for (let v of adj[s]) {
    if (!visited[v]) {
      if (checkCycle(adj, v, visited, dfsVisited)) return true;
    } else if (visited[v] && dfsVisited[v]) {
      return true;
    }
  }
  dfsVisited[s] = false;
  return false;
}

(function main() {
  console.log(canFinish(2, [[1, 0]]));
  console.log(
    canFinish(2, [
      [1, 0],
      [0, 1],
    ])
  );
})();
