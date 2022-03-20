const getLine = (() => {
  const input = require("fs").readFileSync(0, "utf8").trim().split("\n");
  let i = 0;
  return () => input[i++];
})();

const run = () => {
  const N = Number(getLine());
  const A = getLine().split(" ").map(Number);
  const M = Number(getLine());
  const T = getLine().split(" ").map(Number);

  console.log(compute(N, A, M, T).join(" "));
};

const bsLeft = (arr, target, start, end) => {
  if (start > end) return end;

  const mid = Math.floor((start + end) / 2);

  return arr[mid] < target
    ? bsLeft(arr, target, mid + 1, end)
    : bsLeft(arr, target, start, mid - 1);
};

const bsRight = (arr, target, start, end) => {
  if (start > end) return start;

  const mid = Math.floor((start + end) / 2);

  return arr[mid] <= target
    ? bsRight(arr, target, mid + 1, end)
    : bsRight(arr, target, start, mid - 1);
};

const count = (arr, target, start, end) =>
  bsRight(arr, target, start, end) - bsLeft(arr, target, start, end) - 1;

const compute = (N, A, M, T) => {
  A.sort((a, b) => a - b);

  return T.map((t) => count(A, t, 0, N - 1));
};

run();
