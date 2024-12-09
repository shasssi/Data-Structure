/*
    @@ Leetcode - 1
    Array of integer, find indexes of three number which sums to zero
    no duplicate solution.
    @@ returns [[i1, i2, i3], [...], ..]

    arr: [-1,0,1,2,-1,4], target: 0
    @@ returns [[-1, 0, 1], [-1,-1,2]]

    - normal brute approach - three for loop O(n^3)
    - two pointer(2 sum II concepts) with one extra loop - time: O(n^2), space: O(1)
*/

const threeSumIndexes = (inp, target) => {
  inp.sort((a, b) => a - b); // Time: O(nlogn)
  const result = [];
  const arrLength = inp.length;
  for (let i = 0; i < arrLength; i++) {
    // exclude duplicate sum skip the iteration for next subsequent numbers
    // [-4, -1, -1, ....] exclude -1 at index 2
    if (i > 0 && inp[i] === inp[i - 1]) {
      continue;
    }
    // 2 sum concept with two pointers approach
    let lPointer = i + 1;
    let rPointer = arrLength - 1;
    while (lPointer < rPointer) {
      const sum = inp[i] + inp[lPointer] + inp[rPointer];
      if (sum > 0) {
        rPointer -= 1;
      } else if (sum < 0) {
        lPointer += 1;
      } else {
        result.push([inp[i], inp[lPointer], inp[rPointer]]);
        lPointer += 1;
      }
    }
  }
  return result;
};

console.log(threeSumIndexes([-1, 0, 1, 2, -1, -4], 0));
console.log(threeSumIndexes([-3, 3, 4, -3, 1, 2], 0));
console.log(threeSumIndexes([-3, 3, 4, -3, 1, 2, 0], 0));
console.log(threeSumIndexes([2, 7, 11, 15], 0));
