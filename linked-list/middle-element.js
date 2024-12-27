/*
    @@ Find middle element of a linked list

    Input: 1->2->3->4->5
    @@ returns 3
    @@ Expalination - For odd length: mid is 3, Formula: Math.floor(length/2)

    Input: 1,2,3,4
    @@ returns 3
    @@ Expalination - For even length: mid are 2,3
    Formula: but here we should take +1 element: (length/2 + 1)

    - Solution 1: Find length of linked list -> find mid -> loop and find the element
    - Solution 2: Two pointers - slow & fast pointer, slow increment by step 1, fast increment by step 2
        - if fast is null or fast->next is null (it means slow pointer will be at middle)
*/
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function twoPointerSolution(n) {
    let slow = n;
    let fast = n;
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
        // console.log(slow, fast, '--------------');
    }
    return slow.data;
}

const l1 = createList([1, 2, 3, 4]);
console.log(twoPointerSolution(l1));
const l2 = createList([1, 2, 3, 4, 5]);
console.log(twoPointerSolution(l2));
const l3 = createList([1]);
console.log(twoPointerSolution(l3));
const l4 = createList([1, 10, 30, 40, 50, 12, 3, 4, 5]);
console.log(twoPointerSolution(l4));
console.log("-------------------")

function length(n) {
  let counter = 0;
  while (n !== null) {
    counter += 1;
    n = n.next;
  }
  return counter;
}

function solution1(n) {
  const len = length(n);
  let mid;
  if (len % 2 === 0) {
    // even
    mid = len / 2;
  } else {
    // odd
    mid = Math.floor(len / 2);
  }
  let start = n;
  let middle;
  for (let i = 0; i <= mid; i++) {
    middle = start.data;
    // console.log(start, len, mid);
    start = start.next;
  }
  return middle;
}

const list1 = createList([1, 2, 3, 4]);
console.log(solution1(list1));
const list2 = createList([1, 2, 3, 4, 5]);
console.log(solution1(list2));
const list3 = createList([1]);
console.log(solution1(list3));
const list4 = createList([1, 10, 30, 40, 50, 12, 3, 4, 5]);
console.log(solution1(list4));

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
