const Node = require('./node');

class LinkedList {
  constructor() {
    this._head = null;
    this._tail = null;
    this.length = 0;
  }

  append(data) {
    let node = new Node(data);
    if (this.length !== 0) {
      node.prev = this._tail;
      this._tail.next = node;
      this._tail = node;
    }
    else {
      this._head = node;
      this._tail = node;
    }
      this.length++;
      return this;
  }

  head() {
    if (!(this.length == 0)) {
      return this._head.data;
    }
    else {
      return null;
    }
  }

  tail() {
    if (!(this.length == 0)) {
      return this._tail.data;
    }
    else {
      return null;
    }
  }

  isEmpty() {
    if (this.length == 0) {
      return true;
    }
    else {
      return false;
    }
  }

  clear() {
    this._head = null;
    this._tail = null;
    this.length = 0;
    return this;
  }

  at(index) {
    let element = this._head;
    for (let i = 0; i < index; i++) {
      element = element.next;
    }
    return element.data;
  }

  insertAt(index, data) {
    if (this.length == 0) {
      return this.append(data);
    }
    else {
      let element = this._head;
      for (let i = 0; i < index; i++) {
         element = element.next;
      }

      let node = new Node(data);
      node.next = element;
      element.prev.next = node;

      this.length++;
      return this;
    }
  }

  indexOf(data) {
    let element = this._head;
    for (let i = 0; i < this.length; i++) {
      if (element.data == data) {
        return i;
      }
      else {
        element = element.next;
      }
    }
    return -1;
  }

  reverse() {
    let element = this._tail;
    let head = this._head;
    let tail = this._tail;
    this._head = tail;
    this._tail = head;

    for (let i = 0; i < this.length; i++) {
      let prev = element.prev;
      let next = element.next;
      element.prev = next;
      element.next = prev;
      element = element.next;
    }
    return this;
  }

  deleteAt(index) {
    let element = this._head;

    if (!(this.length == 1)) {
      for (let i = 0; i <= index; i++) {
        element = element.next;
      }
      element.prev.prev.next = element;
      element.prev = element.prev.prev;
    }
    else {
      this._head = null;
      this._tail = null;
      return this;
    }

    this.length--;
    return this;
  }
}

module.exports = LinkedList;
