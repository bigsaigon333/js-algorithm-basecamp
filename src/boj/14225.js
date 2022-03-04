const input = () => {
  const [S, line] = require("fs").readFileSync(0, "utf-8").trim().split("\n");

  return [Number(S), line.trim().split(" ").map(Number)];
};

const product = (nums, bool) =>
  nums.reduce((acc, n, i) => acc + n * bool[i], 0);

const permutation = (arr, level, cb) => {
  if (level === arr.length) {
    cb(arr);
    return;
  }

  arr[level] = 0;
  permutation(arr, level + 1, cb);

  arr[level] = 1;
  permutation(arr, level + 1, cb);
};

const compute = (N, S) => {
  const s = new Set();
  const cb = (a) => {
    s.add(product(a, S));
  };

  permutation(Array(S.length).fill(0), 0, cb);

  const sorted = [...s].sort((a, b) => a - b);
  const index = sorted.findIndex((n, i) => n !== i);

  return index === -1 ? sorted.pop() + 1 : index;
};

console.log(compute(...input()));

const assert = require("assert");

assert.equal(compute(3, [5, 1, 2]), 4);
assert.equal(compute(3, [2, 1, 4]), 8);
assert.equal(compute(4, [2, 1, 2, 7]), 6);
