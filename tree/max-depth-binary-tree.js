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
    // root.right = new Node(3);
  /*
          1
         /
        1                 1
                        /   \
                       2     3
        */
  return root;
})();

/* 
      To find the maximum height.
      find height of left sub-tree = h1, find height of right sub-tree = h2
      H = Max(h1, h2) + 1 (root)
  */

function maxHeight(root) {
  if (root === null) return 0;
  return Math.max(maxHeight(root.left), maxHeight(root.right)) + 1;
}

console.log(maxHeight(root));
