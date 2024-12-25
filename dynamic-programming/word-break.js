/*
    @@ Leetcode - 139
    Word Break - returns true if inp string can be segmented into space-separated sequence of one or more dictionary word

    Input: s = "leetcode", wordArr = ["leet", "code"]
    @@ returns True
    @@ return true because "leetcode" can be segmented into "leet", "code"
    @@ Explaination
    length of s = 8, length of word in dict = 4
    condition 1: if index of s + length of word <= length of s
    eg: char "e": 7 + 4 <= 8
    condition 2: if substring(index, length of word) === word from array
    eg: char "c": substring(4, 4) = "code" -> True
    DP[8] = True 
    DP[7] = false
    DP[6] = false
    DP[5] = false
    DP[4] = True -> dp[index + length of word] = dp[4 + 4] = dp[8] = True
    DP[3] = false
    DP[2] = false
    DP[1] = false
    DP[0] = True -> dp[0 + 4] = dp[4] = True
  
    - Brute force: Decision Tree -> Cache
    - Dynamic programing: Bottom Up approach
    - store/memoize the results and reuse it
*/

// Time: O(m*n), Space: O(n)
const bottomUpApproach = (s, wordArr) => {
  // memoization array to store
  // result DP[n], DP[2],..., DP[0]
  const sLength = s.length;
  const arrDP = Array.from({ length: sLength }, () => false);
  // DP[0] = 0
  arrDP[sLength] = true;
  for (i = sLength - 1; i >= 0; i--) {
    for (j in wordArr) {
      // condition 1: if index of s + length of word <= length of s
      // condition 2: if substring(index, length of word) === word from array
      if (
        i + wordArr[j].length <= sLength &&
        s.substring(i, i + wordArr[j].length) === wordArr[j]
      ) {
        arrDP[i] = arrDP[i + wordArr[j].length];
      } else if (arrDP[i] === true) {
        break;
      }
    }
  }
  return arrDP[0];
};

console.log(bottomUpApproach("leetcode", ["leet", "code"]));
console.log(bottomUpApproach("neetcode", ["leet", "code"]));
console.log(bottomUpApproach("neetcode", ["leet", "neet", "code"]));
console.log(bottomUpApproach("leetleet", ["leet", "code"]));
console.log(bottomUpApproach("leetxycode", ["xy", "leet", "code"]));
