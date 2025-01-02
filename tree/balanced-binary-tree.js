class Node {
  constructor(data) {
    this.left = null;
    this.data = data;
    this.right = null;
  }
}

/*
  - A height-balanced binary tree is a binary tree in which the depth 
    of the two subtrees of every node never differs by more than one.

  - logic: 
    - mod or abs |height of left - height of right| > 1 ? not balanced : balanced
  */

function maxHeight(root) {
  if (root === null) return 0;
  return Math.max(maxHeight(root.left), maxHeight(root.right)) + 1;
}

// we need to check every node -> left & right height > 1 == not balanced
function isBalancedTree(root) {
  if (root === null) return true;
  if (root.left === null && root.right === null) return true;
  const queue = [];
  queue.push(root);
  while (true) {
    let size = queue.length;
    if (size === 0) {
      console.log("end");
      return true;
    }
    // store data at each level
    const tempResult = [];

    while (size !== 0) {
      const node = queue[0];
      tempResult.push(node.val);
      queue.shift();
      let leftHeight = 0;
      let rightHeight = 0;
      if (node.left !== null) {
        leftHeight = maxHeight(node.left);
        queue.push(node.left);
      }
      if (node.right !== null) {
        rightHeight = maxHeight(node.right);
        queue.push(node.right);
      }
      size -= 1;
      // |height of left - height of right| > 1 ? not balanced
      console.log(node.data, "->", leftHeight, rightHeight);
      if (Math.abs(leftHeight - rightHeight) > 1) return false;
    }
  }
}

(function init() {
  // make root node
  const root = new Node(1);
  root.left = new Node(2);
  root.right = new Node(3);
  root.right.left = new Node(4);
  root.right.right = new Node(5);
  //   root.right.right.left = new Node(6);
  //   root.right.right.right = new Node(7);
  /*
            1
           /
          1                 1
                          /   \
                         2     3
  */
  console.log(isBalancedTree(root));
})();
