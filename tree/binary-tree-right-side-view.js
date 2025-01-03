class Node {
  constructor(data) {
    this.left = null;
    this.data = data;
    this.right = null;
  }
}

function printRightSide(root) {
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
    // print right side view only
    if (tempResult.length >= 1) {
      result = [...result, tempResult[tempResult.length - 1]];
    }
  }
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
  printRightSide(root);
  // Postorder output = 4 6 2 7 5 3 1
})();
