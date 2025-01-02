class Node {
  constructor(data) {
    this.left = null;
    this.data = data;
    this.right = null;
  }
}

/*
    Zigzag Order traversal 
    - level 0 = left to right
    - level 1 = right to left
    - level 3 - left to right
    .... alternate direction till last level
    eg:                1
                    /   \
                   2     3
                  / \   / \
                 4  6   7  5
    output = [[1], [3,2], [4,6,7,5]]
*/

function printLevelorderV2(root) {
  const result = [];
  if (root === null) {
    return result;
  }
  const queue = [];
  queue.push(root);
  // directionFlag = true (means left to right)
  // directionFlag = false (means right to left)
  let directionFlag = true;
  let levelCount = 0;
  while (true) {
    let size = queue.length;

    if (size === 0) {
      console.log(result);
      console.log("level:", levelCount);
      return;
    }
    // store data at each level
    const tempResult = [];
    levelCount++;
    while (size !== 0) {
      const node = queue[0];
      tempResult.push(node.data);
      queue.shift();
      if (node.left !== null) {
        queue.push(node.left);
      }
      if (node.right !== null) {
        queue.push(node.right);
      }
      size -= 1;
    }
    // solution 1: based on flag toggle
    result.push(directionFlag ? tempResult : tempResult.reverse());
    /* solution 2: based on level, if level is even = left to right, if level is odd = right to left */
    // result.push(levelCount % 2 === 0 ? tempResult : tempResult.reverse());
    directionFlag = !directionFlag;
  }
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
  printLevelorderV2(root);
  // Levelorder output = 1 2 3 4 6 7 5
})();
