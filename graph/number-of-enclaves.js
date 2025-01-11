/*
    You are given an m x n binary matrix grid, where 0 represents a sea cell and 1 represents a land cell.

    A move consists of walking from one land cell to another adjacent (4-directionally) 
    land cell or walking off the boundary of the grid.

    Return the number of land cells in grid for which we cannot walk off the boundary of the grid in any number of moves.

    Input: grid = [[0,0,0,0],[1,0,1,0],[0,1,1,0],[0,0,0,0]]
    Output: 3
    Explanation: There are three 1s that are enclosed by 0s, and one 1 that is not enclosed because its on the boundary.

    Input: grid = [[0,1,1,0],[0,0,1,0],[0,0,1,0],[0,0,0,0]]
    Output: 0
    Explanation: All 1s are either on the boundary or can reach the boundary.
*/
/**
 * @param {number[][]} grid
 * @return {number}
 */
// we use Boundary DFS - will check if 1 is present in 0
//  if the boundary 1 is connected to any 1's we mark all as 0
// finally we will count the number of 1 left
var numEnclaves = function (grid) {
  const n = grid.length;
  const m = grid[0].length;

  // Boundary DFS top to bottom
  for (let i = 0; i < n; i++) {
    let j = 0;
    if (grid[i][j] === 1) {
      dfsRecursive(grid, i, j, n, m);
    }

    j = m - 1;
    if (grid[i][j] === 1) {
      dfsRecursive(grid, i, j, n, m);
    }
  }
  // Boundary DFS left to right
  for (let j = 0; j < m; j++) {
    let i = 0;
    if (grid[i][j] === 1) {
      dfsRecursive(grid, i, j, n, m);
    }

    i = n - 1;
    if (grid[i][j] === 1) {
      dfsRecursive(grid, i, j, n, m);
    }
  }

  // count the remaining 1's from graph
  let count = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === 1) {
        count++;
      }
    }
  }
  return count;
};

function isValid(grid, i, j, n, m) {
  if (i >= 0 && i < n && j >= 0 && j < m && grid[i][j] === 1) {
    return true;
  }
  return false;
}

function dfsRecursive(grid, i, j, n, m) {
  grid[i][j] = 0;
  if (isValid(grid, i + 1, j, n, m)) {
    dfsRecursive(grid, i + 1, j, n, m);
  }
  if (isValid(grid, i - 1, j, n, m)) {
    dfsRecursive(grid, i - 1, j, n, m);
  }
  if (isValid(grid, i, j + 1, n, m)) {
    dfsRecursive(grid, i, j + 1, n, m);
  }
  if (isValid(grid, i, j - 1, n, m)) {
    dfsRecursive(grid, i, j - 1, n, m);
  }
}

(function () {
  console.log(
    numEnclaves([
      [0, 0, 0, 0],
      [1, 0, 1, 0],
      [0, 1, 1, 0],
      [0, 0, 0, 0],
    ])
  );
})();
