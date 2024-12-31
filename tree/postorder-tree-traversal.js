class Node {
  constructor(data) {
    this.left = null;
    this.data = data;
    this.right = null;
  }
}

function printPostorder(root) {
  const n = root;
  if (n === null) {
    return;
  }
  // first traverse left part of tree
  printPostorder(n.left);

  // then traverse right part of tree
  printPostorder(n.right);

  // then print data
  console.log(n.data);
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
  printPostorder(root);
  // Postorder output = 4 6 2 7 5 3 1
})();
