import Node from "./Node.mjs";

export default class LinkedList {
  #head = null;
  #length = 0;

  constructor(value) {
    if (value) {
      this.#head = new Node(value, null);
      this.#length++;
    }
  }

  append(value) {
    if (value) {
      const node = new Node(value, null);
      if (this.#head) {
        let nodeTemp = this.#head;
        while (nodeTemp.hasNext()) {
          nodeTemp = nodeTemp.nextNode;
        }
        nodeTemp.nextNode = node;
        this.#length++;
      } else {
        this.prepend(value);
      }
    }
  }

  prepend(value) {
    if (value) {
      this.#head = new Node(value, this.#head);
      this.#length++;
    }
  }

  size() {
    return this.#length;
  }

  head() {
    return this.#head;
  }

  tail() {
    let tempNode = this.#head;
    while (tempNode.hasNext()) {
      tempNode = tempNode.nextNode;
    }
    return tempNode;
  }

  at(index) {
    let i = 0;
    let tempNode = null;
    if (index > this.#length - 1) {
      return null;
    }
    if (this.#head) {
      tempNode = this.#head;
      while (tempNode.hasNext() && i < index) {
        tempNode = tempNode.nextNode;
        i++;
      }
    }
    return tempNode;
  }

  pop() {
    if (this.#head) {
      let oldNode = null;
      let currNode = this.#head;
      while (currNode.hasNext()) {
        oldNode = currNode;
        currNode = currNode.nextNode;
      }
      if (oldNode === null) {
        this.#head = null;
      } else {
        oldNode.nextNode = null;
      }
    }
  }

  contains(value) {
    if (this.#head) {
      let tempNode = this.#head;
      while (tempNode) {
        if (tempNode.value === value) {
          return true;
        }
        tempNode = tempNode.nextNode;
      }
    }
    return false;
  }

  find(value) {
    if (value) {
      let i = 0;
      if (this.#head) {
        let tempNode = this.#head;
        while (tempNode) {
          if (tempNode.value === value) {
            return i;
          }
          tempNode = tempNode.nextNode;
          i++;
        }
      }
      return null;
    }
    console.log(
      "returns the index of the node containing value, or null if not found"
    );
  }

  toString() {
    let values = "";
    if (this.#head) {
      let tempNode = this.#head;
      while (tempNode) {
        values = values.concat(`( ${tempNode.value} ) -> `);
        tempNode = tempNode.nextNode;
      }
    }
    values = values.concat(" null");
    return values;
  }

  insertAt(value, index) {
    if (value) {
      let i = 0;
      if (index === 0) {
        this.prepend(value);
      } else if (this.#head && index > 0) {
        let oldNode = null;
        let tempNode = this.#head;
        while (tempNode && i < index) {
          oldNode = tempNode;
          tempNode = tempNode.nextNode;
          i++;
        }
        oldNode.nextNode = new Node(value, tempNode);
      }
    }
  }

  removeAt(index) {
    if (index >= 0) {
      let i = 0;
      if (index === 0 && this.#head) {
        this.#head == this.#head.nextNode;
      } else if (this.#head) {
        let oldNode = null;
        let tempNode = this.#head;
        while (tempNode && i < index) {
          oldNode = tempNode;
          tempNode = tempNode.nextNode;
          i++;
        }
        oldNode.nextNode = tempNode.nextNode;
      }
    }
  }
}
