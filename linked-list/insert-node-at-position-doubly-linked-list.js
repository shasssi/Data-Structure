// create a node
class Node {
  constructor(data) {
    this.prev = null;
    this.data = data;
    this.next = null;
  }
}

function insertNodeAfter(head, elem, inp) {
    const newNode = new Node(inp);
    let currentNode = head;
    if (head.data === elem) {
        // insert after head node
        const nextNode = head.next;
        head.next = newNode;
        newNode.prev = head;
        newNode.next = nextNode;
        if (nextNode !== null) {
            nextNode.prev = newNode;
        }
        return head;
    }
    while (currentNode.next !== null && currentNode.data !== elem) {
        currentNode = currentNode.next;
    }
    // we traverse whole linked linked
    if (currentNode.data === elem) {
        // if elem is found
        const nextNode = currentNode.next;
        currentNode.next = newNode;
        newNode.prev = currentNode;
        newNode.next = nextNode;
        if (nextNode !== null) {
            // to handle if node is not the end of linked list
            nextNode.prev = newNode;
        }
    }
    return head;
}

let head = null;
head = unShiift(head, 1);
head = unShiift(head, 2);
head = unShiift(head, 4);
head = unShiift(head, -2);
// console.log("head----", head);
head = insertNodeAfter(head, -2, -5)
head = insertNodeAfter(head, 4, 55)
head = insertNodeAfter(head, 1, -10)
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
