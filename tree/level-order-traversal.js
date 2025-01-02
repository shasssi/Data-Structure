class Node {
  constructor(data) {
    this.left = null;
    this.data = data;
    this.right = null;
  }
}

/*
    eg:                1
                    /   \
                   2     3
                  / \   / \
                 4  6   7  5
*/

function printLevelorderV2(root) {
  const result = [];
  if (root === null) {
    return result;
  }
  const queue = [];
  queue.push(root);
  while (true) {
    let size = queue.length;
    if (size === 0) {
      console.log(result);
      return;
    }
    // store data at each level
    const tempResult = [];
    while (size !== 0) {
      const node = queue[0];
      tempResult.push(node.data);
      queue.shift();
      if (node.left !== null) {
        queue.push(node.left);
      }
      if (node.right !== null) {
        queue.push(node.right);
      }
      size -= 1;
    }
    result.push(tempResult);
  }
}

/*
    using queue approach
    we push root left right
    eg:                1
                    /   \
                   2     3
                  / \   / \
                 4  6   7  5
    queue = 3 2 3 -> process first 3 -> queue = 2 3
    push left and right -> queue = 2 3 4 6 -> process first 2 -> queue = 3 4 6
    push left and right -> queue = 3 4 6 7 5 -> process first 2 -> queue = 4 6 7 5
*/

function printLevelorderV1(root) {
  if (root === null) {
    return;
  }
  const queue = [];
  const result = [];
  queue.push(root);
  while (queue.length !== 0) {
    const node = queue[0];
    result.push(node.data);
    queue.shift();
    if (node.left !== null) {
      queue.push(node.left);
    }
    if (node.right !== null) {
      queue.push(node.right);
    }
  }
  console.log(result);
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
  printLevelorderV1(root);
  printLevelorderV2(root);
  // Levelorder output = 1 2 3 4 6 7 5
})();
