/*
    @@ Leetcode - 153
    Find Minimum In Rotated Sorted Array 

    arr: [3,4,5,1,2]
    @@ returns 1

    - normal approach - for loop O(n)
    - two pointers - time: O(logn)
*/

const findMinimum = (inp) => {
  // left, right pointers
  let left = 0;
  let right = inp.length - 1;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    // to search in left or right side of array form mid
    if (inp[right] < inp[mid]) {
      // search right
      left = mid + 1;
    } else {
      // search left
      right = mid;
    }
  }
  return inp[left];
};

console.log(findMinimum([3, 4, 5, 1, 2]));
console.log(findMinimum([3, 4, 5, 6, 1, 2]));
console.log(findMinimum([4, 5, 6, 7, 0, 1, 2]));
console.log(findMinimum([11, 13, 15, 17]));
