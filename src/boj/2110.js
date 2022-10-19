const input = () => {
  const [head, ...lines] = require("fs")
    .readFileSync(0, "utf8")
    .trim()
    .split("\n");

  return [...head.split(" ").map(Number), lines.map(Number)];
};

const settle = (arr, interval) =>
  arr
    .reduce(
      ([prev, count], curr) =>
        curr >= prev + interval ? [curr, count + 1] : [prev, count],
      [-Infinity, 0]
    )
    .pop();

const binarySearch = (arr, start, end, target) => {
  if (start > end) return end;

  const mid = Math.floor((start + end) / 2);
  const count = settle(arr, mid);

  return count >= target
    ? binarySearch(arr, mid + 1, end, target)
    : binarySearch(arr, start, mid - 1, target);
};

const compute = (N, C, nums) => {
  nums.sort((a, b) => a - b);

  return binarySearch(nums, 1, nums[nums.length - 1] - nums[0], C);
};

console.log(compute(...input()));
