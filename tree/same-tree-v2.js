class Node {
  constructor(data) {
    this.left = null;
    this.data = data;
    this.right = null;
  }
}

const pTree = (function init() {
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

const qTree = (function init() {
  // make root node
  const root = new Node(1);
  //   root.left = new Node(2);
  root.right = new Node(1);
  /*
        1
         \
          1
                          1
                        /   \
                       2     3
        */
  return root;
})();

/* 
    To compare if 2 Binary Tree are same.
    check root -> if same -> then check left -> if same -> then check right
*/

function isTreeSame(p, q) {
  if (p === null && q === null) return true;
  if (p === null || q === null) return false;
  if (p.data !== q.data) return false;

  return isTreeSame(p.left, q.left) && isTreeSame(p.right, q.right);
}

console.log(isTreeSame(pTree, qTree));
