// create a node
class Node {
  constructor(data) {
    this.prev = null;
    this.data = data;
    this.next = null;
  }
}

function insertNodeAtEnd(head, inp) {
  const newNode = new Node(inp);
  if (head === null) {
    // if head is null means no linked list created yet
    head = newNode;
    return head;
  };
  let currentNode = head;
  while (currentNode.next !== null) {
    currentNode = currentNode.next;
  }
  currentNode.next = newNode;
  newNode.prev = currentNode;
  return head;
}

let head = null;
head = unShiift(head, 1);
head = unShiift(head, 2);
head = unShiift(head, 4);
head = unShiift(head, -2);
// insertNodeAtEnd
head = insertNodeAtEnd(head, -5);
head = insertNodeAtEnd(head, 55);
head = insertNodeAtEnd(head, -10);
console.log("head----", head);
printList(head);

function unShiift(head, inp) {
  const newNode = new Node(inp);
  if (head === null) {
    // head: null - means list is empty
    head = newNode;
    currentNode = head;
    return head;
  }
  head.prev = newNode;
  newNode.next = head;
  return newNode;
}

function printList(n) {
  while (n !== null) {
    const data = n.data;
    console.log(data);
    n = n.next;
  }
}
