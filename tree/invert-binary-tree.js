class Node {
  constructor(data) {
    this.left = null;
    this.data = data;
    this.right = null;
  }
}

function invertTree(root) {
    if (root === null) return;
    const temp = root.left;
    root.left = root.right;
    root.right = temp;
    invertTree(root.left);
    invertTree(root.right);
}

function printInorder(root, result) {
  if (root === null) return;
  printInorder(root.left, result);
  result.push(root.data);
  printInorder(root.right, result);
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
  const input = [];
  printInorder(root, input);
  console.log(input);
  invertTree(root);
  const output = [];
  printInorder(root, output);
  console.log(output);
})();
