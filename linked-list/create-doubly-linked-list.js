// create a node
class Node {
  constructor(data) {
    this.prev = null;
    this.data = data;
    this.next = null;
  }
}

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

let head = null;
head = unShiift(head, 1);
head = unShiift(head, 2);
head = unShiift(head, 4);
head = unShiift(head, -2);
console.log("head----", head);
printList(head);