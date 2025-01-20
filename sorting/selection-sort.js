/*
    - First we find the smallest element and swap it with the first element.
        This way we get the smallest element at its correct position.
    - Then we find the smallest among remaining elements (or second smallest) and swap it with the second element.
    - We keep doing this until we get all elements moved to correct position.

    - Time Complexity O(N^2), Space: O(1)
*/

function selectionSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    let min = arr[i];
    let minIndex = i;
    for (j = i; j < n; j++) {
      if (arr[j] < min) {
        min = arr[j];
        minIndex = j;
      }
    }
    // swap element
    arr[minIndex] = arr[i];
    arr[i] = min;
  }
  return arr;
}

console.log(selectionSort([64, 34, 25, 12, 22, 11, 90]));
console.log(selectionSort([5, 3, 1, 9, 8, 2, 4, 7]));
