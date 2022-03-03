const input = () => {
  const [S, line] = require("fs").readFileSync(0, "utf-8").trim().split("\n");

  return [Number(S), line.trim().split(" ").map(Number)];
};

const product = (nums, bool) =>
  nums.reduce((acc, n, i) => acc + n * bool[i], 0);

const cartesian = (arr, repeat) => {
  const result = [];

  const permutation = (level) => {
    if (level === repeat) {
      result.push([...arr]);
      return;
    }

    arr[level] = 0;
    permutation(level + 1);

    arr[level] = 1;
    permutation(level + 1);
  };

  permutation(0);

  return result;
};

const compute = (N, S) => {
  const s = new Set(cartesian([0, 1], N).map((line) => product(S, line)));
  const sorted = [...s].sort((a, b) => a - b);
  const index = sorted.findIndex((n, i) => n !== i);

  return index === -1 ? sorted.pop() + 1 : index;
};

console.log(compute(...input()));

const assert = require("assert");

assert.equal(compute(3, [5, 1, 2]), 4);
assert.equal(compute(3, [2, 1, 4]), 8);
assert.equal(compute(4, [2, 1, 2, 7]), 6);
