/**
 * Given a 2D grid consists of 0s (land) and 1s (water).  
 * An island is a maximal 4-directionally connected group of 0s and a 
 * closed island is an island totally (all left, top, right, bottom) surrounded by 1s.

 * @param {number[][]} grid
 * @return {number} Return the number of closed islands.
 */

// we use Boundary DFS - to find all the land connected to the boundary - convert them to 'B'
// finally count the disconnected group of island (i.e 0)
// 0 - land, 1- water
var closedIsland = function (grid) {
  const n = grid.length;
  const m = grid[0].length;

  // Boundary DFS - top to bottom
  for (let i = 0; i < n; i++) {
    let j = 0;
    if (grid[i][j] === 0) {
      dfsRecursive(grid, i, j, n, m);
    }

    j = m - 1;
    if (grid[i][j] === 0) {
      dfsRecursive(grid, i, j, n, m);
    }
  }

  // Boundary DFS - left to right
  for (let j = 0; j < m; j++) {
    let i = 0;
    if (grid[i][j] === 0) {
      dfsRecursive(grid, i, j, n, m);
    }

    i = n - 1;
    if (grid[i][j] === 0) {
      dfsRecursive(grid, i, j, n, m);
    }
  }

  let count = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === 0) {
        count++;
        dfsRecursive(grid, i, j, n, m);
      }
    }
  }
  return count;
};

function isValid(grid, i, j, n, m) {
  if (i >= 0 && i < n && j >= 0 && j < m && grid[i][j] === 0) {
    return true;
  }
  return false;
}

function dfsRecursive(grid, i, j, n, m) {
  grid[i][j] = "B";

  // id - direction in i, jd - direction j
  const id = [0, 0, 1, -1];
  const jd = [1, -1, 0, 0];

  for (let d = 0; d < id.length; d++) {
    if (isValid(grid, i + id[d], j + jd[d], n, m)) {
      dfsRecursive(grid, i + id[d], j + jd[d], n, m);
    }
  }
}

(function () {
  console.log(
    closedIsland([
      [1, 1, 1, 1, 1, 1, 1, 0],
      [1, 0, 0, 0, 0, 1, 1, 0],
      [1, 0, 1, 0, 1, 1, 1, 0],
      [1, 0, 0, 0, 0, 1, 0, 1],
      [1, 1, 1, 1, 1, 1, 1, 0],
    ])
  );
  console.log(
    closedIsland([
      [0, 0, 1, 0, 0],
      [0, 1, 0, 1, 0],
      [0, 1, 1, 1, 0],
    ])
  );
  console.log(
    closedIsland([
      [1, 1, 1, 1, 1, 1, 1],
      [1, 0, 0, 0, 0, 0, 1],
      [1, 0, 1, 1, 1, 0, 1],
      [1, 0, 1, 0, 1, 0, 1],
      [1, 0, 1, 1, 1, 0, 1],
      [1, 0, 0, 0, 0, 0, 1],
      [1, 1, 1, 1, 1, 1, 1],
    ])
  );
})();
