/*
    @@ Leetcode - 238
    Product of Array Except Self 
    @@ returns an array

    arr: [1,2,3,4]
    @@ returns [24,12,8,6]

    - normal approach - two for loop O(n^2)
    - division approach - O(n), O(1)
    - left product(prefix), right product(postfix) - time: O(n), space: O(1)
*/

const productOfArrayByDivision = (inp) => {
  // division approach
  let product = 1;
  let res = [];
  // handle if any value in array is zero
  let zeroFlag = false;
  for (let i in inp) {
    if (inp[i] === 0) {
      zeroFlag = true;
    } else {
      product *= inp[i];
    }
    console.log(product);
  }
  for (let i in inp) {
    if (zeroFlag) {
      res.push(inp[i] === 0 ? product : 0);
    } else {
      res.push(product / inp[i]);
    }
  }
  return res;
};

const productOfArray = (inp) => {
  let output = [];
  let leftProduct = 1;
  // store left product for each element before index: inp[i]
  for (let i in inp) {
    output.push(leftProduct);
    leftProduct *= inp[i];
  }
  // calculate right product for each element after index: inp[i]
  let rightProduct = 1;
  for (let i = inp.length - 1; i >= 0; i--) {
    // multiply left & right for final result
    output[i] *= rightProduct;
    rightProduct *= inp[i];
  }
  return output;
};

console.log(productOfArray([1, 2, 3, 4]));
console.log(productOfArray([-1, 1, 0, -3, 3]));
console.log(productOfArray([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(productOfArray([3, 4, 5, 6, 1, 2]));
console.log(productOfArray([4, 5, 6, 7, 0, 1, 2]));
console.log(productOfArray([11, 13, 15, 17]));
