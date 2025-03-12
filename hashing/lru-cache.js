/*
* Design an LRU (Least Recently Used) cache data structure that supports following operations
* get(key) : retrives the value of key if present otherwise -1
* put(key, value): insert key value pair into the cache, 
  if cache reaches its capacity, it should evict the least rescently used item brfore inserting the new one.
*/

class Node {
    constructor (key, value) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class LRUCache {
  constructor(capacity) {
    this.c = capacity;
    this.hMap = new Map(); // <key> : <Address of value>
    this.head = new Node(null, null);
    this.tail = new Node(null, null); // least recently used
    this.head.next = this.tail;
    this.tail.prev = this.head;
    this.len = 0;
  }

  #delete(node) {
    this.hMap.delete(node.key);
    console.log(node.key, this.hMap)
    const prev = node.prev;
    const next = node.next;
    prev.next = next;
    next.prev = prev;
    this.len--;
  }

  get(key) {
    const value = this.hMap.get(key);
    if (value) {
      // 1. delete element
      this.#delete(value);
      // 2. move to the first
      this.#add(key, value);
      return value.value;
    } else {
      return -1;
    }
  }

  #add(key, value) {
    const newNode = new Node(key, value);
    newNode.prev = this.head;
    newNode.next = this.head.next;
    this.head.next.prev = newNode;
    this.head.next = newNode;
    this.hMap.set(key, newNode);
    this.len++;
  }

  put(key, value) {
    if (this.len === this.c) {
      // delete least recently used
      this.#delete(this.tail.prev);
      // add to the first
      this.#add(key, value);
    } else {
      // if key is already present
      if (this.hMap.get(key)) {
        // delete element
        this.#delete(key);
        // add to the first
        this.#add(key, value);
      }
      this.#add(key, value);
    }
  }
}

const lru = new LRUCache(3);
lru.put(1,1);
lru.put(2,2);
lru.put(3,3);
lru.put(4,4);
lru.put(5,5);