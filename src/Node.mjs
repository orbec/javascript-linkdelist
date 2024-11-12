export default class Node {
  #value;
  #nextNode;

  constructor(value, nextNode) {
    this.#value = value;
    this.#nextNode = nextNode;
  }

  get value() {
    return this.#value;
  }

  get nextNode() {
    return this.#nextNode;
  }

  set value(value) {
    this.#value = value;
  }

  set nextNode(nextNode) {
    this.#nextNode = nextNode;
  }

  hasNext() {
    return this.#nextNode !== null;
  }
}
