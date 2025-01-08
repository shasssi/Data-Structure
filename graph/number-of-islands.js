/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let island = 0;
  const gridSize = grid.length;
  for (let i = 0; i < gridSize; i++) {
    const rowSize = grid[i].length;
    for (let j = 0; j < rowSize; j++) {
      if (grid[i][j] === "1") {
        island++;
        dfsRecursive(grid, i, j, gridSize, rowSize);
      }
    }
  }
  return island;
};

/*    
    - check adjacent vertex whether it is "1"
    - if "1" then we include the land and mark it 0

                 1 [i-1][j]
                 ^
                 |
[i][j-1] 1 <---- 1 ----> 1 [i][j+1]
                 |
                 v
                 1 [i+1][j]
*/
function isValid(grid, i, j, gridSize, rowSize) {
  if (i >= 0 && i < gridSize && j >= 0 && j < rowSize && grid[i][j] === "1") {
    return true;
  }
  return false;
}

function dfsRecursive(grid, i, j, gridSize, rowSize) {
  grid[i][j] = "0";
  // top adjcaent
  if (isValid(grid, i - 1, j, gridSize, rowSize)) {
    dfsRecursive(grid, i - 1, j, gridSize, rowSize);
  }
  // left adjcaent
  if (isValid(grid, i, j - 1, gridSize, rowSize)) {
    dfsRecursive(grid, i, j - 1, gridSize, rowSize);
  }
  // right adjcaent
  if (isValid(grid, i, j + 1, gridSize, rowSize)) {
    dfsRecursive(grid, i, j + 1, gridSize, rowSize);
  }
  // bottom adjcaent
  if (isValid(grid, i + 1, j, gridSize, rowSize)) {
    dfsRecursive(grid, i + 1, j, gridSize, rowSize);
  }
}

(function main() {
  const grid = [
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"],
  ];
  console.log(numIslands(grid));
})();
