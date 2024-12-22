/*
    @@ Leetcode - 300
    Longest Increasing Subsequence - returns the length of longest strictly increasing subsequence

    Input: [1,2,4,3]
    @@ returns 3 - [1,2,4] or [1,2,3]
    @@ Explanation, LIS - Longest Increasing Subsequence
    LIS[3] = 1 : 1 -> ([3])
    LIS[4] = 1 : max(1, 1 + LIS[3]) -> ([4]) 
    LIS[2] = 2 : max(1, (1 + LIS[4]) + (1 + LIS[3])) -> ([2,4] or [2,3]) 
    LIS[1] = 3 : max(1, (1 + LIS[2]) + (1 + LIS[4]) + (1 + LIS[3])) -> ([1,2,4] or [1,2,3]) 

    - Brute force: DFS, DFS with cache
    - Dynamic programing: Bottom Up approach
    - store/memoize the results and reuse it
*/

// Time: O(n^2), Space: O(n)
const bottomUpApproach = (inp) => {
  // memoization array to store
  // eg-1 - result LIS[element]: LIS[3],LIS[4]..., LIS[1]
  let max = Number.MIN_VALUE;
  const LIS = [];
  // LIS[last element] = 1
  LIS[inp.length - 1] = 1;
  for (let i = inp.length - 2; i >= 0; i--) {
    let tempLIS = 1;
    for (let j = i + 1; j < inp.length; j++) {
      // longest substring of the current element
      if (inp[i] < inp[j]) {
        tempLIS = Math.max(tempLIS, 1 + LIS[j]);
      }
    }
    max = Math.max(max, tempLIS);
    LIS[i] = tempLIS;
  }
  return max;
};

console.log(bottomUpApproach([1, 2, 4, 3]));
console.log(bottomUpApproach([0, 3, 1, 6, 2, 2, 7]));
console.log(bottomUpApproach([10, 9, 2, 5, 3, 7, 101, 18]));
console.log(bottomUpApproach([0, 1, 0, 3, 2, 3]));
console.log(bottomUpApproach([4, 3, 2, 1]));