class Node {
  constructor(data) {
    this.left = null;
    this.data = data;
    this.right = null;
  }
}

/*
 - Solution - find horizontal distance
 - consider root hd = 0 (root horizontal distance)
 - if move to left : hd = hd -1
 - if move to right : hd = hd + 1
 - we can check total unique possible horizontal distance
 - Set(hd)
 - total width = size of set 

                    3
              /         \
            5            1
         /     \        /  \
       6         2     0    8
               /   \     
              7     4  
  
  {3}: 0, {5}: -1, {1}: 1, {6}: -2, {2}: 0, {0}: 0, {8}: 2, {7}: -1, {4}: 1

  hd : {0, -1, 1, -2, 2}
  total width: 5
*/

const result = new Set();
function totalWidth(root, hd) {
  if (root === null) {
    return;
  };
  totalWidth(root.left, hd - 1);
  result.add(hd);
  totalWidth(root.left, hd + 1);
}

/*
  - Solution 1 - not exactly correct
  - Vertical Width of a Binary Tree
  - print the nodes which are seen from top view

                   3
              /         \
            5            1
         /     \        /  \
       6         2     0    8
               /   \     
              7     4  

    - output = 5 [6, 5, 3, 1, 8]
*/

function printVerticalWidth(root) {
  let result = [];
  const n = root;
  if (n === null) {
    return result;
  }
  const queue = [];
  queue.push(root);
  while (true) {
    let size = queue.length;
    if (size === 0) {
      console.log(result);
      return result;
    }
    const tempResult = [];
    while (size !== 0) {
      const node = queue[0];
      // push NULL
      tempResult.push(node ? node.data : node);
      queue.shift();
      if (node !== null) {
        // push NULL as well
        queue.push(node.left);
        // push NULL as well
        queue.push(node.right);
      }
      size -= 1;
    }
    console.log(tempResult);
    console.log("-------------")
    // print top view only - which will be bottom end (first & last)
    if (tempResult.length === 1) {
      result = [...result, tempResult[0]];
    }
    if (tempResult.length > 1) {
      const first = tempResult[0];
      if (first !== null) {
        result = [...result, first];
      }
      const last = tempResult[tempResult.length - 1];
      if (last !== null) {
        result = [...result, last];
      }
    }
  }
}

(function init() {
  const root = new Node(3);
  /* left */
  root.left = new Node(5);
  root.left.left = new Node(6);
  root.left.right = new Node(2);
  root.left.right.left = new Node(7);
  root.left.right.right = new Node(4);
  /* right */
  root.right = new Node(1);
  root.right.left = new Node(0);
  root.right.right = new Node(8);
  /*
                    3
                /      \
               5         1
            /    \      /  \
           6      2    0    8
                 /   \     
                7     4  
  */
  // printVerticalWidth(root);
  totalWidth(root, 0);
  console.log(result, result.size);
})();
