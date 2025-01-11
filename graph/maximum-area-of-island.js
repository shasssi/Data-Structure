/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  const n = grid.length;
  const m = grid[0].length;
  let maxArea = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === 1) {
        let area = [0];
        dfsRecursive(grid, i, j, n, m, area);
        maxArea = Math.max(maxArea, area[0]);
      }
    }
  }
  return maxArea;
};

function isValid(grid, i, j, n, m) {
  if (i >= 0 && i < n && j >= 0 && j < m && grid[i][j] === 1) {
    return true;
  }
  return false;
}

function dfsRecursive(grid, i, j, n, m, area) {
  grid[i][j] = 0;
  area[0]++;
  if (isValid(grid, i + 1, j, n, m)) {
    dfsRecursive(grid, i + 1, j, n, m, area);
  }
  if (isValid(grid, i - 1, j, n, m)) {
    dfsRecursive(grid, i - 1, j, n, m, area);
  }
  if (isValid(grid, i, j + 1, n, m)) {
    dfsRecursive(grid, i, j + 1, n, m, area);
  }
  if (isValid(grid, i, j - 1, n, m)) {
    dfsRecursive(grid, i, j - 1, n, m, area);
  }
}

(function () {
  console.log(
    maxAreaOfIsland([
      [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
      [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
      [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
    ])
  );
  console.log(maxAreaOfIsland([[0, 0, 0, 0, 0, 0, 0, 0]]));
})();
