/**
 * @param {number[][]} grid
 * @return {number} Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.
 * 0 - empty cell
 * 1 - fresh orange
 * 2 - rotten orange
 * Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.
 */
var orangesRotting = function (grid) {
  const n = grid.length;
  const m = grid[0].length;
  let fresh = 0;
  const queue = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === 2) {
        queue.push([i, j]);
      } else if (grid[i][j] === 1) {
        fresh++;
      }
    }
  }
  if (fresh === 0) return 0;

  // bfs Traversal
  let time = [0];
  bfsTraversal(queue, grid, n, m, time);

  fresh = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === 1) {
        fresh++;
      }
    }
  }
  if (fresh > 0) return -1;

  return time[0];
};

function isValid(grid, i, j, n, m) {
  if (i >= 0 && i < n && j >= 0 && j < m && grid[i][j] === 1) {
    return true;
  }
  return false;
}

function bfsTraversal(queue, grid, n, m, time) {
  while (queue.length !== 0) {
    let size = queue.length;
    let rotten = 0;
    while (size !== 0) {
      let u = queue[0];
      queue.shift();
      const i = u[0];
      const j = u[1];
      if (isValid(grid, i + 1, j, n, m, time)) {
        grid[i + 1][j] = 2;
        rotten++;
        queue.push([i + 1, j]);
      }
      if (isValid(grid, i - 1, j, n, m, time)) {
        grid[i - 1][j] = 2;
        rotten++;
        queue.push([i - 1, j]);
      }
      if (isValid(grid, i, j + 1, n, m, time)) {
        grid[i][j + 1] = 2;
        rotten++;
        queue.push([i, j + 1]);
      }
      if (isValid(grid, i, j - 1, n, m, time)) {
        grid[i][j - 1] = 2;
        rotten++;
        queue.push([i, j - 1]);
      }
      size--;
    }
    if (rotten > 0) {
      time[0]++;
    }
  }
}

(function () {
    console.log(
      orangesRotting([
        [2, 1, 1],
        [1, 1, 0],
        [0, 1, 1],
      ])
    );
    console.log(
      orangesRotting([
        [2, 1, 1],
        [0, 1, 1],
        [1, 0, 1],
      ])
    );
    console.log(orangesRotting([[2, 2, 2, 1, 1]]));
  console.log(
    orangesRotting([
      [2, 2],
      [1, 1],
      [0, 0],
      [2, 0],
    ])
  );
})();
