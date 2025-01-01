/* 
    To compare if 2 Binary Tree are same.
    Always check Inorder & Preorder with NULL values.
    If both are same for p and q trees ? same : not same 
*/

class Node {
  constructor(data) {
    this.left = null;
    this.data = data;
    this.right = null;
  }
}

function printInorder(root, result) {
  const n = root;
  if (n === null) {
    result.push(null);
    return;
  }

  // traverse left part of tree
  printInorder(n.left, result);

  // print data
  result.push(n.data);

  // traverse right part of tree
  printInorder(n.right, result);
}

function printPreorder(root, result) {
  const n = root;
  if (n === null) {
    result.push(null);
    return;
  }

  // print data
  result.push(n.data);

  // traverse left part of tree
  printPreorder(n.left, result);

  // traverse right part of tree
  printPreorder(n.right, result);
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



const resIP = [];
printInorder(pTree, resIP);
console.log(resIP);
const resIQ = [];
printInorder(qTree, resIQ);
console.log(resIQ);


const resPP = [];
printPreorder(pTree, resPP);
console.log(resPP);
const resPQ = [];
printPreorder(qTree, resPQ);
console.log(resPQ);

console.log(resIP.join() === resIQ.join());
console.log(resPP.join() === resPQ.join());
