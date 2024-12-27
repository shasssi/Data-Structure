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

function pushNodeAtEnd(head, inp) {
  const node = new Node(inp);
  if (head) {
    let currentNode = head.next;
    if (currentNode) {
      while (currentNode !== null) {
        // console.log(head);
        if (currentNode.next === null) {
          currentNode.next = node;
          currentNode = node.next;
        } else {
          currentNode = currentNode.next;
        }
      }
    } else {
      head.next = node;
    }
  } else {
    head = node;
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

let head;
head = pushNodeAtEnd(head, 4);
head = pushNodeAtEnd(head, 5);
head = pushNodeAtEnd(head, 3);
head = pushNodeAtEnd(head, 2);
head = pushNodeAtEnd(head, 0);
head = pushNodeAtEnd(head, 1);
printList(head);
