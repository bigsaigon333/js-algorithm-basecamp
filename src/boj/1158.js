const input = () =>
  require("fs").readFileSync(0, "utf8").trim().split(" ").map(Number);

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  enqueue(data) {
    if (this.head == null) {
      const newNode = { prev: null, value: data, next: null };
      this.head = newNode;
      this.tail = newNode;
    } else {
      const newNode = { prev: this.tail, value: data, next: null };
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  dequeue() {
    if (this.front == null) return null;

    const ret = this.head.value;

    const nextHead = this.head.next;
    if (nextHead) nextHead.prev = null;
    this.head = nextHead;

    return ret;
  }

  get front() {
    return this.head == null ? null : this.head.value;
  }
}

const compute = (N, K) => {
  const answer = [];

  const q = new Queue();

  Array(N)
    .fill()
    .map((_, i) => i + 1)
    .forEach((n) => q.enqueue(n));

  let count = 1;
  while (q.front !== null) {
    const top = q.dequeue();

    if (count % K === 0) {
      answer.push(top);
    } else {
      q.enqueue(top);
    }
    count++;
  }

  return `<${answer.join(", ")}>`;
};

console.log(compute(...input()));
