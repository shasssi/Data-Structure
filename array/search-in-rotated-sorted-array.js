/*
    @@ Leetcode - 33
    Search target In Rotated Sorted Array 

    arr: [3,4,5,1,2], target: 1
    @@ returns 3

    - normal approach - for loop O(n)
    - two pointers - time: O(logn)
*/

const searchInRotatedArray = (inp, target) => {
  // left, right pointers
  let left = 0;
  let right = inp.length - 1;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (inp[mid] === target) {
      return mid;
    }
    if (inp[left] === target) {
      return left;
    }
    if (inp[right] === target) {
      return right;
    }
    // to search in left or right side of array form mid
    if (target < inp[left]) {
      // search right
      left = mid + 1;
    } else {
      // search left
      right = mid;
    }
  }
  return -1;
};

console.log(searchInRotatedArray([3, 4, 5, 1, 2], 1));
console.log(searchInRotatedArray([3, 4, 5, 1, 2], 6));
console.log(searchInRotatedArray([3, 4, 5, 6, 1, 2], 2));
console.log(searchInRotatedArray([4, 5, 6, 7, 0, 1, 2], 4));
console.log(searchInRotatedArray([11, 13, 15, 17], 17));
