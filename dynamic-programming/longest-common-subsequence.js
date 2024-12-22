/*
    @@ Leetcode - 1143
    Longest Common Subsequence - returns the length of their common subsequence

    Input: text1 = "abcde", text2 = "ace"
    @@ returns 3 - 
    @@ Explanation - the longest common subsequence is "ace" and its lenght is 3
    https://youtu.be/Ua0GhsJSlWM?list=PLot-Xpze53ldVwtstag2TL4HQhAnC8ATf
    2D Array or maxtrix approach
    2D Array: (text1.length + 1) * (text2.length + 1)

    - Dynamic programing: Bottom Up approach
    - store/memoize the results and reuse it
*/

// Time: O(m*n), Space: O(m*n)
const bottomUpApproach = (text1, text2) => {
  // create 2D array of size: (text1.length + 1) * (text2.length + 1)
  const arr = Array.from({ length: text1.length + 1 }, () =>
    Array(text2.length + 1).fill(0)
  );
  for (let i = text1.length - 1; i >= 0; i--) {
    for (let j = text2.length - 1; j >= 0; j--) {
      // when char matches
      if (text1[i] === text2[j]) {
        // add 1 with diagonal value: [i+1][j+1]
        arr[i][j] = 1 + arr[i + 1][j + 1];
      } else {
        // max value from bottom and right position
        // console.log("i,j", i,j, arr[j + 1][i], arr[i + 1][j])
        arr[i][j] = Math.max(arr[i][j + 1], arr[i + 1][j]);
      }
    }
  }
  return arr;
};

console.log(bottomUpApproach("abcde", "ace"));
