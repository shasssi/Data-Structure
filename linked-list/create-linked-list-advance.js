/*
    - create linked list dynamically from given input
*/

// create a node
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function createList(inp) {
  let head;
  let currentNode;
  for (let i in inp) {
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
  return head;
}

function printList(n) {
  while (n !== null) {
    const data = n.data;
    console.log(data);
    n = n.next;
  }
}

const head = createList([1, 2, 3, 4]);
console.log(head);
printList(head);
