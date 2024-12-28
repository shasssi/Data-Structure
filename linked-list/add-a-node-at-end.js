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

function simplifiedAppend(head, inp) {
  const node = new Node(inp);
  let last = head;
  if (head === null) {
    // head is null or not present - first node
    head = node;
    return head;
  }
  while (last.next !== null) {
    last = last.next;
  }
  last.next = node;
  return head;
}

let head = null;
head = simplifiedAppend(head, 4);
head = simplifiedAppend(head, 5);
head = simplifiedAppend(head, 3);
head = simplifiedAppend(head, 2);
head = simplifiedAppend(head, 0);
head = simplifiedAppend(head, 1);
printList(head);

function pushNodeAtEnd(head, inp) {
  const node = new Node(inp);
  if (head === null) {
    // head is null or not present - first node
    head = node;
    return head;
  }
  // head is present
  let currentNode = head.next;
  if (currentNode === null) {
    // second element
    head.next = node;
    return head;
  }
  // >= third element
  while (currentNode !== null) {
    // console.log(head);
    if (currentNode.next === null) {
      currentNode.next = node;
      currentNode = node.next;
    } else {
      currentNode = currentNode.next;
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
