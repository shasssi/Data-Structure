class Node {
  constructor(data) {
    this.left = null;
    this.data = data;
    this.right = null;
  }
}

/*
  Explaination: Recusrion

                  1
                /   \
               2     3
              / \   / \
             4  6   7  5
          
  fn(1) = null check -> left:fn(2) -> print(1) -> right:fn(3)

  fn(2) = null check -> fn(4) -> print(2) -> fn(6)
  fn(4) = fn(null) -> print(4) -> fn(null)
  fn(6) = fn(null) -> fn(6) -> fn(null)

  fn(3) = null check -> fn(7) -> print(3) -> fn(5)
  fn(7) = fn(null) -> print(7) -> fn(null)
  fn(5) = fn(null) -> print(5) -> fn(null)
  
*/

function printInorder(root) {
  const n = root;
  if (n === null) {
    return;
  }
  // first traverse left part of tree
  printInorder(n.left);

  // print data
  console.log(n.data);

  // then traverse right part of tree
  printInorder(n.right);
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
  printInorder(root);
  // Inorder output = 4 2 6 1 7 3 5
})();
