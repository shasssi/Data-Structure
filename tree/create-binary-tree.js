// create a node
class Node {
  constructor(data) {
    this.left = null;
    this.data = data;
    this.right = null;
  }
}

function printNode(n) {
  while (n !== null) {
    // print only left
    console.log(n.data);
    n = n.left;
  }
  console.log("--------");
}

function printNodeAtLevel(n, h = 0) {
  if (n !== null) {
    // print root
    console.log(n.data);
    // left & right children
    const left = n.left;
    const right = n.right;
    h = Math.max(h, h + 1);
    console.log("height", h);
    if (left) {
      printNodeAtLevel(left, h);
    }
    if (right) {
      printNodeAtLevel(right, h);
    }
  }
}

// function printNodeAtLevel(n) {
//     // result should be in sequence of level 0,1,...n - eg - 1 2 3 4
//     if (n !== null) {
//         // print root
//         console.log(n.data);
//         let left = n.left;
//         let right = n.right;
//         while (left !== null || right !== null) {
//             // let sameLevelNodeElem = '';
//             if (left !== null) {
//                 // sameLevelNodeElem += left.data;
//                 console.log(left.data);
//                 left = left.left
//             }
//             if (right !== null) {
//                 // sameLevelNodeElem += ' ' + right.data;
//                 console.log(right.data);
//                 right = right.right
//             }
//             // console.log(sameLevelNodeElem);
//         }
//     }
// }

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
  printNode(root);
  printNodeAtLevel(root);
})();
