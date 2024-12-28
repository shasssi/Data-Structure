/*
    - we can add node in a linked list in 3 ways:
        - at front of the linked list
        - after a given node
        - at the end of the linked list
*/

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function deleteNode(head, elem) {
  let currentNode = head;
  if (head.data === elem) {
    // inp matches with first head node
    const temp = head.next;
    head = temp;
    return head;
  }
  let prev = currentNode;
  while (currentNode.next !== null && currentNode.data !== elem) {
    prev = currentNode;
    currentNode = currentNode.next;
  }
  // we traverse whole linked linked
  if (currentNode.data === elem) {
    // if elem is found
    prev.next = currentNode.next;
  }
  return head;
}

let head = null;
head = createList([1, 2, 3, 4]);
head = deleteNode(head, 2);
//   head = deleteNode(head, 3);
//   head = deleteNode(head, 1);
//   head = deleteNode(head, 4);
printList(head);

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
