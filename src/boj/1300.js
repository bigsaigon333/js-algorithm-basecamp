const input = () =>
  require("fs").readFileSync(0, "utf8").trim().split("\n").map(Number);

const run = (N, t) =>
  Array(N)
    .fill()
    .map((_, i) => i + 1)
    .map((i) => Math.min(N, Math.floor(t / i)))
    .reduce((a, b) => a + b);

const binarySearch = (N, start, end, target) => {
  if (start > end) return start;

  const mid = Math.floor((start + end) / 2);
  const sum = run(N, mid);

  return sum >= target
    ? binarySearch(N, start, mid - 1, target)
    : binarySearch(N, mid + 1, end, target);
};

const compute = (N, K) => binarySearch(N, 1, N ** 2, K);

console.log(compute(...input()));
