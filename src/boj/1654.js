const input = () => {
  const [[K, N], ...nums] = require("fs")
    .readFileSync(0, "utf8")
    .trim()
    .split("\n")
    .map((line) => line.split(" ").map(Number));

  return [K, N, nums];
};

const cut = (arr, len) =>
  arr.map((el) => Math.floor(el / len)).reduce((a, b) => a + b, 0);

const binarySearch = (arr, start, end, target) => {
  if (start > end) return end;

  const mid = Math.floor((start + end) / 2);
  const count = cut(arr, mid);

  return count >= target
    ? binarySearch(arr, mid + 1, end, target)
    : binarySearch(arr, start, mid - 1, target);
};

const compute = (K, N, nums) => binarySearch(nums, 1, Math.max(...nums), N);

console.log(compute(...input()));
