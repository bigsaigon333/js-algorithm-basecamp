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
  if (start > end) return end;

  const mid = Math.floor((start + end) / 2);
  const sum = cut(arr, mid);

  return sum >= target
    ? binarySearch(arr, mid + 1, end, target)
    : binarySearch(arr, start, mid - 1, target);
};

const compute = (N, M, nums) => binarySearch(nums, 0, Math.max(...nums), M);

console.log(compute(...input()));
