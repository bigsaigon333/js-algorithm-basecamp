const input = () => {
  const [[N, M], nums] = require("fs")
    .readFileSync(0, "utf8")
    .trim()
    .split("\n")
    .map((line) => line.split(" ").map(Number));

  return [N, M, nums];
};

const cut = (arr, h) =>
  arr.map((el) => Math.max(0, el - h)).reduce((a, b) => a + b, 0);

const binarySearch = (arr, start, end, target) => {
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    const sum = cut(arr, mid);

    if (sum >= target) start = mid + 1;
    else end = mid - 1;
  }

  return end;
};

const compute = (N, M, nums) => binarySearch(nums, 0, Math.max(...nums), M);

console.log(compute(...input()));
