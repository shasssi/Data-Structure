class Node {
  constructor(data) {
    this.val = data;
    this.left = null;
    this.right = null;
    this.next = null;
  }
}

/**
 * // Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */

var connect = function (root) {
  if (root === null) return root;
  const queue = [];
  queue.push(root);
  while (true) {
    let size = queue.length;
    if (size === 0) return root;
    const tempResult = [];
    while (size !== 0) {
      const node = queue[0];
      tempResult.push(node);
      queue.shift();
      if (node.left !== null) {
        queue.push(node.left);
      }
      if (node.right !== null) {
        queue.push(node.right);
      }
      /* logic to link to next right node if present */
      if (size > 1) {
        const nextNode = queue[0];
        node.next = nextNode;
      }
      size -= 1;

    }
    /* Extra Loop code */
    // const len = tempResult.length;
    // for (let i = 0; i < len; i++) {
    //   if (i + 1 >= len) {
    //     tempResult[i].next = null;
    //   } else {
    //     tempResult[i].next = tempResult[i + 1];
    //   }
    // }
  }
};

(function init() {
  const root = new Node(3);
  /* left */
  root.left = new Node(5);
  root.left.left = new Node(6);
  root.left.right = new Node(2);
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
      */
  connect(root);
  console.log(root);
})();
