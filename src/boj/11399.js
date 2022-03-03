const input = () => {
  const [, line] = require("fs").readFileSync(0, "utf-8").trim().split("\n");

  return line.split(" ").map(Number);
};

const rec = (arr, i) => {
  if (i === arr.length) return arr;

  arr[i] += arr[i - 1];

  return rec(arr, i + 1);
};

const add = (a, b) => a + b;

const compute = (nums) => {
  nums.sort((a, b) => a - b);

  rec(nums, 1);

  return nums.reduce(add, 0);
};

console.log(compute(input()));
