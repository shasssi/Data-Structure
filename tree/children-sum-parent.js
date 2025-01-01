class Node {
  constructor(data) {
    this.left = null;
    this.data = data;
    this.right = null;
  }
}

const root = (function init() {
  // make root node
  const root = new Node(1);
  root.left = new Node(1);
//   root.right = new Node(3);
  /*
            1
           /
          1                 1
                          /   \
                         2     3
          */
  return root;
})();

function childrenSumParent(root) {
  if (root === null) return 1;
  if (root.left === null && root.right === null) return 1;
  let leftSum = 0;
  let rightSum = 0;
  if (root.left !== null) {
    leftSum = root.left.data;
  }
  if (root.right !== null) {
    rightSum = root.right.data;
  }
  if ((root.data === leftSum + rightSum) && childrenSumParent(root.left) && childrenSumParent(root.right)) {
    return 1;
  } else {
    return 0;
  }
}

console.log(childrenSumParent(root));
