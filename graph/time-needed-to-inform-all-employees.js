/*
    A company has n employees with a unique ID for each employee from 0 to n - 1.
    The head of the company is the one with headID.

    Each employee has one direct manager given in the manager array 
    where manager[i] is the direct manager of the i-th employee, manager[headID] = -1.
    Also, it is guaranteed that the subordination relationships have a tree structure.

    The head of the company wants to inform all the company employees of an urgent piece of news.
    He will inform his direct subordinates, and they will inform their subordinates,
    and so on until all employees know about the urgent news.

    The i-th employee needs informTime[i] minutes to inform all of his direct subordinates
    (i.e., After informTime[i] minutes, all his direct subordinates can start spreading the news).

    Return the number of minutes needed to inform all the employees about the urgent news.

    Input: n = 1, headID = 0, manager = [-1], informTime = [0]
    Output: 0
    Explanation: The head of the company is the only employee in the company.

    Input: n = 6, headID = 2, manager = [2,2,-1,2,2,2], informTime = [0,0,1,0,0,0]
    Output: 1
    Explanation: The head of the company with id = 2 is the direct manager of all the employees in the company
    and needs 1 minute to inform them all.
    The tree structure of the employees in the company is shown.
*/

/**
 * @param {number} n
 * @param {number} headID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 */
// we crated a directed graph from given manager list
var numOfMinutes = function(n, headID, manager, informTime) {
    const adj = createAdjacenyList(n, manager);
    // source = headID
    // DFS Traversal
    let maxTime = [0];
    let totalTime = [0];
    dfsRecursive(adj, headID, maxTime, totalTime, informTime);
    return maxTime[0];
};

function dfsRecursive(graph, s, maxTime, totalTime, informTime) {
    totalTime[0] = totalTime[0] + informTime[s];
    maxTime[0] = Math.max(totalTime[0], maxTime[0]);

    for (let v of graph[s]) {
        dfsRecursive(graph, v, maxTime, totalTime, informTime);
    }
    totalTime[0] = totalTime[0] - informTime[s];
}

function createAdjacenyList(n, manager) {
    const adj = Array.from({length: n}, () => []);
    for (let i=0; i<n; i++) {
        if (manager[i] !== -1) {
            adj[manager[i]].push(i);
        }
    }
    return adj;
}

(function () {
  console.log(numOfMinutes(6, 2, [2,2,-1,2,2,2], [0,0,1,0,0,0]));
  console.log(numOfMinutes(1, 0, [-1], [0]));
  console.log(
    numOfMinutes(
      15,
      0,
      [-1, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6],
      [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0]
    )
  );
  console.log(
    numOfMinutes(
      8,
      0,
      [-1, 5, 0, 6, 7, 0, 0, 0],
      [89, 0, 0, 0, 0, 523, 241, 519]
    )
  );
    console.log(numOfMinutes(11, 4, [5,9,6,10,-1,8,9,1,9,3,4], [0,213,0,253,686,170,975,0,261,309,337]));
})();
