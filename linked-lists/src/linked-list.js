export default function linkedListFactory() {
  let head = null;

  function append(value) {
    const newNode = nodeFactory(value);

    if (!head) {
      head = newNode;
      return;
    }

    let current = head;
    while (current.next) {
      current = current.next;
    }

    current.next = newNode;
  }

  function prepend(value) {
    const newNode = nodeFactory(value, head);
    head = newNode;
  }

  function size() {
    let count = 0;
    let current = head;

    while (current) {
      count++;
      current = current.next;
    }

    return count;
  }

  function getHead() {
    return head;
  }

  function tail() {
    if (!head) return null;

    let current = head;
    while (current.next) {
      current = current.next;
    }

    return current;
  }

  function at(index) {
    if (index < 0) return undefined;

    let current = head;
    let i = 0;

    while (current) {
      if (i === index) return current.value;
      current = current.next;
      i++;
    }

    return undefined;
  }

  function pop() {
    if (!head) return undefined;

    if (!head.next) {
      const value = head.value;
      head = null;
      return value;
    }

    let current = head;

    while (current.next.next) {
      current = current.next;
    }

    const value = current.next.value;
    current.next = null;

    return value;
  }

  function findIndex(value) {
    let current = head;
    let index = 0;

    while (current) {
      if (current.value === value) return index;
      current = current.next;
      index++;
    }

    return -1;
  }

  function toString() {
    let current = head;
    let str = "";

    while (current) {
      str += `( ${current.value} ) -> `;
      current = current.next;
    }

    return str + "null";
  }

  function insertAt(index, ...values) {
    if (index < 0 || index > size()) {
      throw new RangeError("Index out of bounds");
    }

    if (index === 0) {
      for (let i = values.length - 1; i >= 0; i--) {
        prepend(values[i]);
      }
      return;
    }

    let current = head;
    let i = 0;

    while (i < index - 1) {
      current = current.next;
      i++;
    }

    let nextNode = current.next;

    for (let val of values) {
      const newNode = nodeFactory(val);
      current.next = newNode;
      current = newNode;
    }

    current.next = nextNode;
  }

  function removeAt(index) {
    if (index < 0 || index >= size()) {
      throw new RangeError("Index out of bounds");
    }

    if (index === 0) {
      head = head.next;
      return;
    }

    let current = head;
    let i = 0;

    while (i < index - 1) {
      current = current.next;
      i++;
    }

    current.next = current.next.next;
  }

  return {
    append,
    prepend,
    size,
    getHead,
    tail,
    at,
    pop,
    findIndex,
    toString,
    insertAt,
    removeAt,
  };
}

function nodeFactory(value, next = null) {
  return {
    value,
    next,
  };
}
