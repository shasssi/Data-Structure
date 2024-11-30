/*
    @@ Leetcode - 11
    Container With Most Water 
    @@ returns maximum amount of amount of water a container can store

    arr: [1,8,6,2,5,4,8,3,7]
    @@ returns 49

    - normal approach - two for loop O(n^2)
    - two pointers - time: O(n)
*/

const maximumAmountOfWater = (inp) => {
  // left, right pointers
  let left = 0;
  let right = inp.length - 1;
  let max = 0;
  while (left < right) {
    // calculate amount length * min(height1, height2)
    const amt = (right - left) * Math.min(inp[left], inp[right]);
    max = Math.max(amt, max);
    if (inp[left] <= inp[right]) {
      // to move left pointer if left inp elem < right input elem
      left += 1;
    } else {
      // to move right pointer if left inp elem > right input elem
      right -= 1;
    }
  }
  return max;
};

console.log(maximumAmountOfWater([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(maximumAmountOfWater([1, 8, 6, 25, 4, 8, 37]));
console.log(maximumAmountOfWater([3, 4, 5, 6, 1, 2]));
console.log(maximumAmountOfWater([4, 5, 6, 7, 0, 1, 2]));
console.log(maximumAmountOfWater([11, 13, 15, 17]));
