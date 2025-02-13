/*
    @@ Leetcode - 53
    Maximum Subarray
    find contiguous subarray (containing at least one number) which has largest product
    @@ return product

    arr: [2,3,-2,4]
    @@ returns 6

    - normal approach - two for loop O(n^2)
    - sliding window - time: O(n) 
    - kadane's Algoritm
    - Dynamic Programming
    - https://www.youtube.com/watch?v=hnswaLJvr6g
*/

const maximumSubarrayProduct = (inp) => {
  // prefix: product of element from left
  let prefix = 1;
  // suffix: product of element from right
  let suffix = 1;
  // final output
  let max = Number.MIN_VALUE;
  const len = inp.length;
  for (let i = 0; i < len; i++) {
    prefix = prefix * inp[i];
    max = Math.max(max, prefix);
    suffix = suffix * inp[len - i - 1];
    max = Math.max(max, suffix);
    if (inp[i] === 0) {
      prefix = 1;
    }
    if (inp[len - i - 1] === 0) {
      suffix = 1;
    }
  }
  return max;
};

console.log(maximumSubarrayProduct([2, 3, -2, 4]));
console.log(maximumSubarrayProduct([-1, -2, -3]));
console.log(maximumSubarrayProduct([2, 3, -2, 0, 2, 4]));
console.log(maximumSubarrayProduct([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maximumSubarrayProduct([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(maximumSubarrayProduct([1]));
console.log(maximumSubarrayProduct([5, 4, -1, 7, 8]));
console.log(maximumSubarrayProduct([-1,-2,-3,0]));
console.log(maximumSubarrayProduct([1,0,-1,2,3,-5,-2]));
console.log(maximumSubarrayProduct([-3,0,1,-2]));
