/*
    - Given a square chessboard, the initial position of Knight and position of a target. 
    - Find out the minimum steps a Knight will take to reach the target position.

    A knight can travel to max 8 position at at time
    - if kinight is at (0.0), it can travel 8 position :
        (1,2), (-1,2)
        (1,-2), (-1,-2)
        (2,1), (2,-1)
        (-2,1), (-2,-1)
                 
                 ^
                 |
         <---- (0,0) ----> 
                 |
                 v
    m X n = 6 X 6
*/

function minStepToReachTarget(knightPos, targetPos, n) {
  const k0 = knightPos[0];
  const k1 = knightPos[1];
  const t0 = targetPos[0];
  const t1 = targetPos[1];
  if (k0 === t0 && k1 === t1) {
    return 0;
  }
  const visited = Array.from({ length: n }, () =>
    Array.from({ length: n }, () => false)
  );
  const queue = [];
  queue.push([k0, k1]);
  visited[k0][k1] = true;
  let result = 0;
  let isMatch = false;
  // bfs traversal
  while (queue.length !== 0) {
    let size = queue.length;
    result++;
    while (size !== 0) {
      const p = queue[0];
      queue.shift();
      let i = p[0];
      let j = p[1];
      // (1,2), (-1,2) (1,-2), (-1,-2) (2,1), (2,-1) (-2,1), (-2,-1)
      if (isValid(i + 1, j + 2, n) && !visited[i + 1][j + 2]) {
        queue.push([i + 1, j + 2]);
        visited[i + 1][j + 2] = true;
        if (i + 1 === targetPos[0] && j + 2 === targetPos[1]) {
          isMatch = true;
          break;
        }
      }
      if (isValid(i - 1, j + 2, n) && !visited[i - 1][j + 2]) {
        queue.push([i - 1, j + 2]);
        visited[i - 1][j + 2] = true;
        if (i - 1 === targetPos[0] && j + 2 === targetPos[1]) {
          isMatch = true;
          break;
        }
      }
      if (isValid(i + 1, j - 2, n) && !visited[i + 1][j - 2]) {
        queue.push([i + 1, j - 2]);
        visited[i + 1][j - 2] = true;
        if (i + 1 === targetPos[0] && j - 2 === targetPos[1]) {
          isMatch = true;
          break;
        }
      }
      if (isValid(i - 1, j - 2, n) && !visited[i - 1][j - 2]) {
        queue.push([i - 1, j - 2]);
        visited[i - 1][j - 2] = true;
        if (i - 1 === targetPos[0] && j - 2 === targetPos[1]) {
          isMatch = true;
          break;
        }
      }
      if (isValid(i + 2, j + 1, n) && !visited[i + 2][j + 1]) {
        queue.push([i + 2, j + 1]);
        visited[i + 2][j + 1] = true;
        if (i + 2 === targetPos[0] && j + 1 === targetPos[1]) {
          isMatch = true;
          break;
        }
      }
      if (isValid(i + 2, j - 1, n) && !visited[i + 2][j - 1]) {
        queue.push([i + 2, j - 1]);
        visited[i + 2][j - 1] = true;
        if (i + 2 === targetPos[0] && j - 1 === targetPos[1]) {
          isMatch = true;
          break;
        }
      }
      if (isValid(i - 2, j + 1, n) && !visited[i - 2][j + 1]) {
        queue.push([i - 2, j + 1]);
        visited[i - 2][j + 1] = true;
        if (i - 2 === targetPos[0] && j + 1 === targetPos[1]) {
          isMatch = true;
          break;
        }
      }
      if (isValid(i - 2, j - 1, n) && !visited[i - 2][j - 1]) {
        queue.push([i - 2, j - 1]);
        visited[i - 2][j - 1] = true;
        if (i - 2 === targetPos[0] && j - 1 === targetPos[1]) {
          isMatch = true;
          break;
        }
      }
      size--;
    }
    if (isMatch) {
      break;
    }
  }
  return isMatch ? result : -1;
}

function isValid(i, j, n) {
  if (i >= 0 && i < n && j >= 0 && j < n) {
    return true;
  }
  return false;
}

(function () {
  console.log(minStepToReachTarget([1, 3], [5, 0], 6));
  console.log(minStepToReachTarget([3, 4], [0, -1], 6))
})();
