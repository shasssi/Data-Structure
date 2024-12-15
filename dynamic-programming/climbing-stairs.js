/*
    @@ Leetcode - 70
    Climbing stairs - each time you can climb 1 or 2 steps 
    @@ how many distincts ways to climb to the top

    Input: n = 2
    @@ returns 2
    @@ there are two ways to climb to the top
    1. 1 step + 1 step
    2. 2 steps

    Input: n = 3
    @@ returns 3
    @@ there are three ways to climb to the top
    1. 1 step + 1 step + 1 step
    2. 1 step + 2 steps
    3. 2 steps + 1 step

    - Dynamic programing: Bottom Up approach
    - store/memoize the results and reuse it
*/

// Time: O(n), Space: O(1)
const bottomUpApproach = (n) => {
  // n step - already at top
  let two = 1;
  // n-1 step: it takes 1 step to reach top
  let one = 1;
  for (let step = 0; step < n - 1; step++) {
    let temp = one;
    one += two;
    two = temp;
  }
  return one;
};
console.log(bottomUpApproach(1));
console.log(bottomUpApproach(2));
console.log(bottomUpApproach(3));
console.log(bottomUpApproach(4));
console.log(bottomUpApproach(5));
console.log(bottomUpApproach(6));
