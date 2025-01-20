/*
    - Loop will run (N - 1) times
    - compare two consecutive elements and swap in ascending order.
    
    - We sort the array using multiple passes. 
    After the first pass, the maximum element goes to end (its correct position). 
    Same way, after second pass, the second largest element goes to second last position and so on.

    - inner loop run (N - 1 - i)
        - bcz after every loop the max element goes to end
    
    - Time Complexity O(N^2), Space: O(1)
*/

function bubbleSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      //swap two elements in ascending
      const first = arr[j];
      const second = arr[j + 1];
      if (second < first) {
        arr[j + 1] = first;
        arr[j] = second;
      }
    }
  }
  return arr;
}

console.log(bubbleSort([64, 34, 25, 12, 22, 11, 90]));
console.log(bubbleSort([5, 3, 1, 9, 8, 2, 4, 7]));
