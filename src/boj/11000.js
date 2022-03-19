const input = () => {
  const [, ...lines] = require("fs").readFileSync(0, "utf8").trim().split("\n");

  return lines.map((line) => line.split(" ").map(Number));
};

const heappush = (q, val, cmp = (a, b) => a - b) => {
  const newChildIndex = q.push(val) - 1;

  (function bubbleUp(ci) {
    if (ci === 0) return;

    const pi = Math.floor((ci - 1) / 2);
    if (cmp(q[pi], q[ci]) > 0) {
      [q[pi], q[ci]] = [q[ci], q[pi]];

      bubbleUp(pi);
    }
  })(newChildIndex);
};

const heappop = (q, cmp = (a, b) => a - b) => {
  if (q.length <= 1) return q.pop();

  const top = q[0];

  q[0] = q.pop();

  (function trickleDown(pi) {
    const [lci, rci] = [pi * 2 + 1, pi * 2 + 2];

    if (lci >= q.length) return;

    const minci = rci >= q.length || cmp(q[lci], q[rci]) < 0 ? lci : rci;

    if (cmp(q[minci], q[pi]) < 0) {
      [q[minci], q[pi]] = [q[pi], q[minci]];

      trickleDown(minci);
    }
  })(0);

  return top;
};

const compute = (nums) => {
  const heapq = [];

  nums
    .sort(([s1, t1], [s2, t2]) => s1 - s2 || t1 - t2)
    .forEach(([s, t]) => {
      if (heapq.length > 0 && s >= heapq[0]) heappop(heapq);
      heappush(heapq, t);
    });

  return heapq.length;
};

console.log(compute(input()));
