/*
    - head stores the start element of linked list
    - if head is known, we can know whole linked list element
*/

// create node
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function init() {
  const head = new Node();
  const second = new Node();
  const third = new Node();

  head.data = 1;
  head.next = second;

  second.data = 2;
  second.next = third;

  third.data = 3;

  console.log(head);
  printList(head);
}

// 1 -> 2 -> 3 -> null
function printList(head) {
  const first = head.data;
  let next = head.next;
  console.log(first);
  while (next !== null) {
    const data = next.data;
    console.log(data);
    next = next.next;
  }
}

function printList(n) {
  while (n !== null) {
    const data = n.data;
    console.log(data);
    n = n.next;
  }
}

init();
