/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
// solving like no of island problem or flood fill - result in no solution
// Boundary DFS - we will run the boundary loop
// Boundary DFS - we will checked 'O' is present in boundary & if it connected to any 'O' -> will mark all by 'B"
// at last we convert the remaining 'O' to 'X' (bcz surely it will be surrounded all by X) & 'B' back to 'O'
var solve = function (board) {
  const n = board.length;
  const m = board[0].length;
  // boundary loop - left to right (i=0, j=0,...n-1) & (i=n-1, j=0,...n-1)
  for (let j = 0; j < m; j++) {
    let i = 0;
    if (board[i][j] === "O") {
      dfsRecursive(board, i, j, n, m);
    }

    i = n - 1;
    if (board[i][j] === "O") {
      dfsRecursive(board, i, j, n, m);
    }
  }
  // boundary loop - top to bottom (i=0,...m-1, j=0) & (i=0,...m-1, j=m-1)
  for (let i = 0; i < n; i++) {
    let j = 0;
    if (board[i][j] === "O") {
      dfsRecursive(board, i, j, n, m);
    }

    j = m - 1;
    if (board[i][j] === "O") {
      dfsRecursive(board, i, j, n, m);
    }
  }
  // at last we convert the remaining 'O' to 'X' (bcz surely it will be surrounded all by X) & 'B' back to 'O'
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === "B") {
        board[i][j] = "O";
      } else if (board[i][j] === "O") {
        board[i][j] = "X";
      }
    }
  }
};

function isValid(board, i, j, n, m) {
  if (i >= 0 && i < n && j >= 0 && j < m && board[i][j] === "O") {
    return true;
  } else {
    false;
  }
}

function dfsRecursive(board, i, j, n, m) {
  board[i][j] = "B";
  if (isValid(board, i + 1, j, n, m)) {
    dfsRecursive(board, i + 1, j, n, m);
  }
  if (isValid(board, i - 1, j, n, m)) {
    dfsRecursive(board, i - 1, j, n, m);
  }
  if (isValid(board, i, j + 1, n, m)) {
    dfsRecursive(board, i, j + 1, n, m);
  }
  if (isValid(board, i, j - 1, n, m)) {
    dfsRecursive(board, i, j - 1, n, m);
  }
}

(function(){
    const board = [["X","O","X","O","X","O"],["O","X","O","X","O","X"],["X","O","X","O","X","O"],["O","X","O","X","O","X"]];
    solve(board);
    console.log(board);
})();
