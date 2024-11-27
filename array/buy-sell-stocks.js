/*
    @@ Leetcode - 121
    Best Time to Buy and Sell Stock
    Only permitted to complete at most one transaction (i.e buy one and sell one share of stock)
    @@ returns maximum profits

    arr: [7,1,5,3,6,4]
    @@ returns 5

    - normal approach - two for loop O(n^2)
    - two pointers sliding window approach - time: O(1), space: O(n)
    - left: Buy, right: Sell
*/

const findMaxProfit = (inp) => {
  let maxProfit = -1;
  // left(prev index): Buy, right(next index): Sell pointer
  let left = 0; // min. price stock
  let right = 1;
  while (right < inp.length) {
    // slide left pointer
    if (inp[right] < inp[left]) {
      left = right;
      right += 1;
    } else {
      // update max profit
      const profit = inp[right] - inp[left];
      if (profit > maxProfit) {
        maxProfit = profit;
      }
      right += 1;
    }
  }
  return maxProfit;
};

console.log(findMaxProfit([7, 1, 5, 3, 6, 4]));
console.log(findMaxProfit([7, 1, 5, 3, 6, 4, 10]));
console.log(findMaxProfit([-1, 1, 5, 3, 6, 4]));
