/*
Implement the LFUCache class:

LFUCache(int capacity) Initializes the object with the capacity of the data structure.
int get(int key) Gets the value of the key if the key exists in the cache. Otherwise, returns -1.
void put(int key, int value) Update the value of the key if present, or inserts the key if not already present.

When the cache reaches its capacity, it should invalidate and remove the least frequently used key before inserting a new item.
For this problem, when there is a tie (i.e., two or more keys with the same frequency),
the least recently used key would be invalidated.

To determine the least frequently used key, a use counter is maintained for each key in the cache.
The key with the smallest use counter is the least frequently used key.

When a key is first inserted into the cache, its use counter is set to 1 (due to the put operation). 
The use counter for a key in the cache is incremented either a get or put operation is called on it.

The functions get and put must each run in O(1) average time complexity.

 

Example 1:

Input
["LFUCache", "put", "put", "get", "put", "get", "get", "put", "get", "get", "get"]
[[2], [1, 1], [2, 2], [1], [3, 3], [2], [3], [4, 4], [1], [3], [4]]
Output
[null, null, null, 1, null, -1, 3, null, -1, 3, 4]

Explanation
// cnt(x) = the use counter for key x
// cache=[] will show the last used order for tiebreakers (leftmost element is  most recent)
LFUCache lfu = new LFUCache(2);
lfu.put(1, 1);   // cache=[1,_], cnt(1)=1
lfu.put(2, 2);   // cache=[2,1], cnt(2)=1, cnt(1)=1
lfu.get(1);      // return 1
                 // cache=[1,2], cnt(2)=1, cnt(1)=2
lfu.put(3, 3);   // 2 is the LFU key because cnt(2)=1 is the smallest, invalidate 2.
                 // cache=[3,1], cnt(3)=1, cnt(1)=2
lfu.get(2);      // return -1 (not found)
lfu.get(3);      // return 3
                 // cache=[3,1], cnt(3)=2, cnt(1)=2
lfu.put(4, 4);   // Both 1 and 3 have the same cnt, but 1 is LRU, invalidate 1.
                 // cache=[4,3], cnt(4)=1, cnt(3)=2
lfu.get(1);      // return -1 (not found)
lfu.get(3);      // return 3
                 // cache=[3,4], cnt(4)=1, cnt(3)=3
lfu.get(4);      // return 4
                 // cache=[4,3], cnt(4)=2, cnt(3)=3
*/

// create a doubly linked list node
class Node {
  constructor(key, value) {
    this.prev = null;
    this.key = key;
    this.value = value;
    this.freq = 1;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = new Node(null);
    this.tail = new Node(null, null);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }
  insertNodeAtHead(node) {
    node.prev = this.head;
    node.next = this.head.next;
    this.head.next.prev = node;
    this.head.next = node;
  }
  deleteNode(node) {
    let prev = node.prev;
    let next = node.next;
    prev.next = next;
    next.prev = prev;
  }
  removeTail(minFreq) {
    const node = this.tail.prev;
    console.log(`remove Trail key: ${node.key}, minFreq: ${minFreq}`);
    this.deleteNode(node);
    return node.key;
  }
  isEmpty() {
    return this.head.next.value === null;
  }
  print() {
    let n = this.head.next;
    while (n.key !== null) {
      const key = n.key;
      console.log(key);
      n = n.next;
    }
  }
}

/**
 * @param {number} capacity
 */
const result = [];
var LFUCache = function (capacity) {
  this.c = capacity;
  this.keyValMap = new Map();
  this.freqMap = new Map();
  this.minFreq = 0;
  result.push(null);
};

/**
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.get = function (key) {
  if (this.keyValMap.has(key)) {
    const node = this.keyValMap.get(key);
    // delete node from freq map
    this.freqMap.get(node.freq).deleteNode(node);
    if (node.freq == this.minFreq && this.freqMap.get(node.freq).isEmpty()) {
      this.minFreq++;
    }
    node.freq++;
    // update freq map with new or existing
    if (this.freqMap.has(node.freq)) {
      this.freqMap.get(node.freq).insertNodeAtHead(node);
    } else {
      const dLL = new DoublyLinkedList();
      dLL.insertNodeAtHead(node);
      this.freqMap.set(node.freq, dLL);
    }
    result.push(node.value);
    return node.value;
  }
  result.push(-1);
  return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LFUCache.prototype.put = function (key, value) {
  if (this.c === 0) return;
  if (this.keyValMap.has(key)) {
    const node = this.keyValMap.get(key);
    // delete node from freq map
    this.freqMap.get(node.freq).deleteNode(node);
    if (node.freq == this.minFreq && this.freqMap.get(node.freq).isEmpty()) {
      this.minFreq++;
    }
    node.value = value;
    node.freq++;
    // update freq map with new or existing
    if (this.freqMap.has[node.freq]) {
      const dLL = this.freqMap.get(node.freq);
      dLL.insertNodeAtHead(node);
    } else {
      const dLL = new DoublyLinkedList();
      dLL.insertNodeAtHead(node);
      this.freqMap.set(node.freq, dLL);
    }
  } else {
    // new key value
    if (this.keyValMap.size === this.c) {
      this.freqMap.get(this.minFreq).print();
      const deleteKey = this.freqMap.get(this.minFreq).removeTail(this.minFreq);
      this.keyValMap.delete(deleteKey);
    }
    this.minFreq = 1;
    const newNode = new Node(key, value);
    if (this.freqMap.has(1)) {
      this.freqMap.get(1).insertNodeAtHead(newNode);
    } else {
      const dLL = new DoublyLinkedList();
      dLL.insertNodeAtHead(newNode);
      this.freqMap.set(1, dLL);
    }
    this.keyValMap.set(key, newNode);
  }
  result.push(null);
};

/**
 * [[2], [1, 1], [2, 2], [1], [3, 3], [2], [3], [4, 4], [1], [3], [4]]
 * [null, null, null, 1, null, -1, 3, null, -1, 3, 4]
 */

var obj = new LFUCache(2);
obj.put(1, 1);
obj.put(2, 2);
obj.get(1);
obj.put(3, 3);
obj.get(2);
obj.get(3);
obj.put(4, 4);
obj.get(1);
obj.get(3);
obj.get(4);
console.log(result);

/* Brute Force Soultion */
// let cntMap = {};
// let cache = [];
// let c = 0;
// var LFUCache = function (capacity) {
//   c = capacity;
//   cntMap = {};
//   cache = [];
// };

// /**
//  * @param {number} key
//  * @return {number}
//  */
// LFUCache.prototype.get = function (key) {
//   const idx = cache.findIndex((c) => c.key === key);
//   let value = null;
//   if (idx !== -1) {
//     value = cache[idx].value;
//     cache.splice(idx, 1);
//   } else {
//     return -1;
//   }
//   if (cntMap[key]) {
//     cntMap[key]++;
//   } else {
//     cntMap[key] = 1;
//   }
//   cache.unshift({ key, value });
//   return value;
// };

// /**
//  * @param {number} key
//  * @param {number} value
//  * @return {void}
//  */
// LFUCache.prototype.put = function (key, value) {
//   const idx = cache.findIndex((c) => c.key === key);
//   if (cache.length === c) {
//     if (idx !== -1) {
//       cache.splice(idx, 1);
//     } else {
//       let min = Infinity;
//       let key = null;
//       for (let i in cntMap) {
//         if (cntMap[i] < min) {
//           min = cntMap[i];
//         }
//       }
//       for (i = c - 1; i >= 0; i--) {
//         if (cntMap[cache[i].key] === min) {
//           key = cache[i].key;
//           break;
//         }
//       }
//       const lastIdx = cache.findLastIndex((c) => c.key === key);
//       if (lastIdx !== -1) {
//         cache.splice(lastIdx, 1);
//         delete cntMap[key];
//       }
//     }
//     cache.unshift({ key, value });
//   } else {
//     if (idx !== -1) {
//       cache.splice(idx, 1);
//     }
//     cache.unshift({ key, value });
//   }
//   if (cntMap[key]) {
//     cntMap[key]++;
//   } else {
//     cntMap[key] = 1;
//   }
// };
