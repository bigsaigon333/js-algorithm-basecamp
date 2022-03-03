const input = () => {
  const [, line] = require("fs").readFileSync(0, "utf-8").trim().split("\n");

  return line.split(" ").map(Number);
};

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

const compute = (nums) => {
  let sums = new Set();
  const cb = (a) => {
    let sum = 0;
    for (let i = 0; i < a.length; i++) {
      sum += a[i] * nums[i];
    }

    sums.add(sum);
  };

  permutation(Array(nums.length).fill(0), 0, cb);

  let i = 1;
  // eslint-disable-next-line no-constant-condition
  while (true) {
    if (!sums.has(i)) break;

    i++;
  }

  return i;
};

console.log(compute(input()));
