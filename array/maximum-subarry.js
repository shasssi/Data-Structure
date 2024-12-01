/*
    @@ Leetcode - 53
    Maximum Subarray
    find contiguous subarray (containing at least one number) which has largest sum
    @@ return sum

    arr: [-2,1,-3,4,-1,2,1,-5,4]
    @@ returns 6

    - normal approach - two for loop O(n^2)
    - sliding window - time: O(n) 
    - kadane's Algoritm
    - Dynamic Programming
*/

const maximumSubarraySum = (inp) => {
  // max of current_num, current_num + prev_max
  let current_max = inp[0];
  // final output
  let max = inp[0];
  // start loop from 1st elem
  for (let i = 1; i < inp.length; i++) {
    current_max = Math.max(inp[i], current_max + inp[i]);
    max = Math.max(max, current_max);
  }

  return max;
};

console.log(maximumSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maximumSubarraySum([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(maximumSubarraySum([1]));
console.log(maximumSubarraySum([5, 4, -1, 7, 8]));
console.log(maximumSubarraySum([-2, 2, 5, -11, 6]));
