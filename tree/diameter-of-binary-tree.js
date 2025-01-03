class Node {
  constructor(data) {
    this.left = null;
    this.data = data;
    this.right = null;
  }
}

/*
    The diameter of a binary tree is the length of the longest path between any two nodes in a tree. 
    This path may or may not pass through the root.

    Logic = find the height of left & right of each node.
    max nodes = (leftHeight + rightHeight + 1)
    max diameter = nodes - 1;
*/

function printDiameter(root) {
  let result = { diameter: 0 };
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
      tempResult.push(node.data);
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
      // Logic = find the height of left & right of each node.
      // max nodes = (leftHeight + rightHeight + 1)
      // max diameter = nodes - 1;
      const maxNodes = leftHeight + rightHeight + 1;
      const diameter = maxNodes - 1;
      if (diameter > result.diameter) {
        result.diameter = diameter;
      }
    }
  }
}

// Better Solution: by tweeking maxHeight Logic
function maxHeightV2(root, result) {
  if (root === null) return 0;
  let leftHeight = maxHeightV2(root.left, result);
  let rightHeight = maxHeightV2(root.right, result);
  result.nodes = Math.max(result.nodes, 1 + leftHeight + rightHeight);
  return Math.max(leftHeight, rightHeight) + 1;
}

function maxHeight(root) {
  if (root === null) return 0;
  return Math.max(maxHeight(root.left), maxHeight(root.right)) + 1;
}

(function init() {
  // make root node
  const root = new Node(1);
  root.left = new Node(2);
  root.right = new Node(3);
  root.left.left = new Node(4);
  root.left.right = new Node(6);
  root.right.left = new Node(7);
  root.right.right = new Node(5);
  /*
            NL - NULL
                        1
                      /   \
                     2     3
                    / \   / \
                   4  6   7  5
         */
  printDiameter(root);
  const result = { nodes: 0 };
  maxHeightV2(root, result);
  console.log(result);
})();
