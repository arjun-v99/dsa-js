class Node {
  constructor(value) {
    this.next = null;
    this.value = value;
  }
}

class LinkedList {
  constructor(value) {
    const node = new Node(value);
    this.head = node;
    this.tail = this.head;
    this.length = 1;
  }

  push(value) {
    const node = new Node(value);
    // if head is not set we know that the linkedlist is empty
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.length) {
      return undefined;
    }

    let temp = this.head;
    let pre = this.head;

    while (temp.next) {
      pre = temp;
      temp = temp.next;
    }

    this.tail = pre;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return temp;
  }

  unshift(value) {
    const newHead = new Node(value);
    if (this.length === 0) {
      this.head = newHead;
      this.tail = newHead;
    } else {
      let currentHead = this.head;
      this.head = newHead;
      this.head.next = currentHead;
    }
    this.length++;
    return this;
  }

  shift() {
    if (this.length === 0) return undefined;

    let currentHead = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = currentHead.next;
      currentHead.next = null;
    }

    this.length--;

    return currentHead;
  }

  find(value) {
    if (this.length === 0) {
      return undefined;
    }

    let temp = this.head;
    while (temp) {
      if (temp.value === value) {
        return temp;
      }
      temp = temp.next;
    }
    return undefined;
  }

  get(findIndex) {
    // our LL starts at 0 so we dont want anything less than 0. since it's starts at 0 the last index will always be findIndex-1.
    if (findIndex < 0 || findIndex >= this.length) {
      return undefined;
    }

    // to move through our lists.
    let temp = this.head;

    for (let i = 0; i < findIndex; i++) {
      temp = temp.next;
    }

    return temp;
  }

  set(index, value) {
    let temp = this.get(index);
    if (temp) {
      temp.value = value;
      return true;
    }
    return false;
  }
}
