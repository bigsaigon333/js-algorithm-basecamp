const input = () => {
  const [S, line] = require("fs").readFileSync(0, "utf-8").trim().split("\n");

  return [Number(S), line.trim().split(" ").map(Number)];
};

const getAllCase = (S) => {
  const s = new Set();

  const permutation = (arr, level, sum) => {
    if (level === arr.length) {
      s.add(sum);
      return;
    }

    permutation(arr, level + 1, sum + arr[level]);
    permutation(arr, level + 1, sum);
  };

  permutation(S, 0, 0);

  return s;
};

const compute = (N, S) => {
  const s = getAllCase(S);
  const sorted = [...s].sort((a, b) => a - b);
  const index = sorted.findIndex((n, i) => n !== i);

  return index === -1 ? sorted.pop() + 1 : index;
};

console.log(compute(...input()));

const assert = require("assert");

assert.equal(compute(3, [5, 1, 2]), 4);
assert.equal(compute(3, [2, 1, 4]), 8);
assert.equal(compute(4, [2, 1, 2, 7]), 6);
