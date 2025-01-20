/*
    - we pick the element one by one and start comparing with all the elements present in left
        - if element in left found larger, we swap it

    - Time Complexity O(N^2), Space: O(1)
*/

function insertionSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    for (j = i; j > 0; j--) {
      //swap
      const current = arr[j];
      const left = arr[j - 1];
      if (left > current) {
        arr[j - 1] = current;
        arr[j] = left;
      }
    }
  }
  return arr;
}

console.log(insertionSort([64, 34, 25, 12, 22, 11, 90]));
console.log(insertionSort([5, 3, 1, 9, 8, 2, 4, 7]));
console.log(insertionSort([4, 3, 2, 10, 12, 1, 5, 6]));
