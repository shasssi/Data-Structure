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

function addNodeAfterElement(head, elem, inp) {
  let currentNode = head;
  const newNode = new Node(inp);
  if (head.data === elem) {
    // inp matches with first head node
    const temp = head.next;
    newNode.next = temp;
    head.next = newNode;
    return head;
  }
  while (currentNode.next !== null) {
    if (currentNode.data === elem) {
      const temp = currentNode.next;
      newNode.next = temp;
      currentNode.next = newNode;
      break;
    }
    currentNode = currentNode.next;
  }
  if (currentNode.next === null && currentNode.data === elem) {
    // inp matches with last node
    const temp = currentNode.next;
    newNode.next = temp;
    currentNode.next = newNode;
  }
  return head;
}

let head = null;
head = createList([1, 2, 3, 4]);
head = addNodeAfterElement(head, 3, 6);
head = addNodeAfterElement(head, 2, 10);
head = addNodeAfterElement(head, 1, 20);
head = addNodeAfterElement(head, 4, 40);
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
