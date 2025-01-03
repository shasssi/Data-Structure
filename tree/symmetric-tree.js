class Node {
  constructor(data) {
    this.left = null;
    this.data = data;
    this.right = null;
  }
}

/*
    - Solution: using isSameTree logic with comparing isTreeSame(p.left, q.right) && isTreeSame(p.right, q.left)
*/

function isTreeSame(p, q) {
  /* base cases */
  if (p === null && q === null) return true;
  if (p === null || q === null) return false;
  if (p.data !== q.data) return false;
  // check left with right && right with left
  return isTreeSame(p.left, q.right) && isTreeSame(p.right, q.left);
}

var isSymmetric = function (root) {
  /* Bases cases */
  if (root === null) return true;
  if (root.left === null && root.right === null) return true;
  if (root.left === null || root.right === null) return false;
  /* Actual Logic */
  console.log(isTreeSame(root.left, root.right));
};

(function init() {
  const root = new Node(3);
  /* left */
  root.left = new Node(1);
  root.left.left = new Node(6);
  root.left.right = new Node(2);
  /* right */
  root.right = new Node(1);
  root.right.left = new Node(2);
  root.right.right = new Node(6);
  /*
                          3
                      /      \
                     1         1
                  /    \      /  \
                 6      2    2    6
    */
  isSymmetric(root);
})();
