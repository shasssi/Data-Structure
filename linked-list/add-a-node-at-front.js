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

function pushNodeAtFront(head, inp) {
  const node = new Node(inp);
  if (head) {
    node.next = head;
    return node;
  } else {
    head = node;
    return head;
  }
}

function printList(n) {
  while (n !== null) {
    const data = n.data;
    console.log(data);
    n = n.next;
  }
}

let head;
head = pushNodeAtFront(head, 4);
head = pushNodeAtFront(head, 5);
head = pushNodeAtFront(head, 3);
head = pushNodeAtFront(head, 1);
printList(head);
