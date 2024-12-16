/*
    @@ Leetcode - 322
    coin change - fewest number of coins that need to make up to the given amount

    Input: coins = [1,2,5], amount = 11
    @@ returns 3
    @@ 11 = 5 + 5 + 1

    Input: coins = [1,3,4,5], amount = 7
    @@ returns 2 (7 = 3 + 4)
    @@ Expalination
    DP[0] = 0
    DP[1] = 1
    DP[2] = 2
    DP[3] = 1
    DP[4] = 1
    DP[5] = 1
    DP[6] = 2
    DP[7] = 2

    - Brute force: Greedy approach, DFS Backtracking Top Bottom approach
    - Dynamic programing: Bottom Up approach
    - store/memoize the results and reuse it
*/

// Time: O(m*n), Space: O(n)
const bottomUpApproach = (coins, amount) => {
  // memoization array to store
  // result DP[0], DP[1],..., DP[n]
  const arrDP = [];
  // DP[0] = 0
  arrDP[0] = 0;
  for (let i = 1; i <= amount; i++) {
    for (let c in coins) {
      const diff = i - coins[c];
      if (diff >= 0) {
        // push minCoin to DP
        arrDP[i] = arrDP[i]
          ? Math.min(arrDP[i], 1 + arrDP[diff])
          : 1 + arrDP[diff];
      }
    }
  }
  return arrDP[amount] ? arrDP[amount] : -1;
};

console.log(bottomUpApproach([1, 3, 4, 5], 7));
console.log(bottomUpApproach([4, 5], 7));
console.log(bottomUpApproach([1, 2, 5], 11));
console.log(bottomUpApproach([2], 3));
