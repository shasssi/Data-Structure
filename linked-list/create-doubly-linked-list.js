// create a node
class Node {
  constructor(data) {
    this.prev = null;
    this.data = data;
    this.next = null;
  }
}

// add a nodd at the front 
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

// let head = null;
// head = unShiift(head, 1);
// head = unShiift(head, 2);
// head = unShiift(head, 4);
// head = unShiift(head, -2);
// console.log("head----", head);
// printList(head);

class DoublyLinkedList {
  constructor(head) {
    this.head = new Node(null);
    this.tail = new Node(null);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }
  insertAtHead(node) {
    node.prev = this.head;
    node.next = this.head.next;
    this.head.next.prev = node;
    this.head.next = node;
  }
  printList() {
    let n = this.head.next;
    while (n.data !== null) {
      const data = n.data;
      console.log(data);
      n = n.next;
    }
    console.log(this.head);
  }
}

const dLL = new DoublyLinkedList(new Node());
dLL.insertAtHead(new Node(2));
dLL.insertAtHead(new Node(3));
dLL.insertAtHead(new Node(4));
dLL.printList();
