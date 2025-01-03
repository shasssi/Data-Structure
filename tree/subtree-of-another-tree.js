class Node {
  constructor(data) {
    this.left = null;
    this.data = data;
    this.right = null;
  }
}

/*
  - Given the roots of two binary trees root and subRoot, 
    return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.

  - Solution: using isSameTree logic
*/

function isTreeSame(p, q) {
  if (p === null && q === null) return true;
  if (p === null || q === null) return false;
  if (p.data !== q.data) return false;
  return isTreeSame(p.left, q.left) && isTreeSame(p.right, q.right);
}

function inorder(root, subRoot, result) {
  if (root === null) return;
  if (isTreeSame(root, subRoot)) {
    result.sameSubTree = true;
  }
  if (isTreeSame(root.left, subRoot)) {
    result.sameSubTree = true;
  }
  if (isTreeSame(root.right, subRoot)) {
    result.sameSubTree = true;
  }
  inorder(root.left, subRoot, result);
  inorder(root.right, subRoot, result);
}

var isSubtree = function (root, subRoot) {
  const result = { sameSubTree: false };
  inorder(root, subRoot, result);
  console.log(result.sameSubTree);
  return result.sameSubTree;
};

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
   /*
    Sub-tree
        2
      /   \     
     7     4 
   */
  const subRoot = new Node(2);
  subRoot.left = new Node(7);
  subRoot.right = new Node(4);
  isSubtree(root, subRoot);
})();
