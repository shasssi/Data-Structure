class Node {
  constructor(data) {
    this.left = null;
    this.data = data;
    this.right = null;
  }
}

/*
    - According to the definition of LCA on Wikipedia: 
    “The lowest common ancestor is defined between two nodes p and q as the lowest node in T 
    that has both p and q as descendants (where we allow a node to be a descendant of itself).”

                   3
              /         \
            5            1
         /     \        /  \
       6         2     0    8
               /   \     
              7     4  
   
    - find ancestor
    - find common ancestore
    - find lowest common ancestor

    LCA (0, 8): 
        path(0) = [3, 1, 0] (here 1 and 3 are ancestor of 0)
        path(8) = [3, 1, 8] (here 1 and 3 are ancestor of 8)
        common ancestor = 3, 1
        lowest common ancestore = 1
    LCA(2, 0):
        path(2) = [3, 5, 2]
        path(0) = [3, 1, 0]
        lca = 3
    LCA(5, 4):
        path(2) = [3,5]
        path(4) = [3, 5, 2, 4]
        lca = 5
    LCA(6, 8):
        path(2) = [3, 5, 6]
        path(8) = [3, 1, 8]
        lca = 3
*/

function findPath(root, n, result) {
  if (root === null) return false;
  result.push(root.data);
  if (root.data === n) return true;
  if (findPath(root.left, n, result) || findPath(root.right, n, result)) {
    return true;
  }
  result.pop();
  return false;
}

function lowestCommonAncestor(root, p, q) {
  const path1 = [];
  findPath(root, p, path1);
  console.log("path1", path1);
  const path2 = [];
  findPath(root, q, path2);
  console.log("path2", path2);
  // edge case - when node is not present
  if (path1.length === 0 || path2.length === 0) {
    console.log("LCA", null);
    console.log("----------------");
    return null;
  }
  let result;
  for (let i = 0; i < path1.length && path2.length; i++) {
    if (path1[i] === path2[i]) {
      result = path1[i];
    } else {
      break;
    }
  }
  console.log("LCA", result);
  console.log("----------------");
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
  lowestCommonAncestor(root, 0, 8);
  lowestCommonAncestor(root, 2, 0);
  lowestCommonAncestor(root, 5, 4);
  lowestCommonAncestor(root, 6, 8);
})();
