/*
    @@ Leetcode - 1
    Array of integer, find indexes of two number which adds to a target
    exactly only one solution.
    @@ returns [i1, i2]

    arr: [2,1,5,3,2], target: 4
    @@ returns [1, 3]

    arr: [2,1,5,3,2], target: 5
    @@ returns [0, 3]

    - normal approach - two for loop O(n^2)
    - hash map approach - time: O(n), space: O(n)
*/

const twoSumIndexes = (inp, target) => {
  // hash map - key: arr_element, value: arr_index
  const map = {};
  let res = [];
  for (let i in inp) {
    const elem = inp[i];
    const diff = target - elem;
    // if difference is present in hash -- result -- break
    if (map[diff] !== undefined) {
      res = [map[diff], i];
      return res;
    } else {
      map[elem] = i;
    }
  }
  return res;
};

console.log(twoSumIndexes([2, 1, 5, 3], 4));
console.log(twoSumIndexes([2, 1, 5, 3, 2], 4));
console.log(twoSumIndexes([2, 1, 5, 3, 2], 5));
console.log(twoSumIndexes([2, 7, 11, 15], 9));
