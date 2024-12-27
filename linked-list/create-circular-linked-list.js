/*
    - Circular Linked List - All nodes are connected to form circle.
    - No NULL at end
*/

// create a node
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

const createCircularList = (inp) => {
  let head;
  let currentNode;
  const lenght = inp.length;
  for (let i = 0; i < lenght - 1; i++) {
    const node = new Node(inp[i]);
    if (head) {
      if (currentNode) {
        currentNode.next = node;
        currentNode = node;
      } else {
        // 2nd node
        currentNode = node;
        head.next = currentNode;
      }
    } else {
      // first node or head
      head = node;
    }
  }
  if (lenght > 1) {
    // making circular: last element next(null) link to head
    const node = new Node(inp[lenght - 1]);
    currentNode.next = node;
    node.next = head;
  }
  return head;
};

const printCircularList = (n) => {
  let currentNode = n;
  const first = n;
  if (first != null) {
    console.log(currentNode.data);
    currentNode = currentNode.next;
    while (currentNode !== first) {
      console.log(currentNode.data);
      currentNode = currentNode.next;
    }
  }
};

const list = createCircularList([1, 2, 3, 4]);
console.log(list);
printCircularList(list);
