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

  const answer = compute(N, A, M, T);

  console.log(answer.join("\n"));
};

const binarySearch = (arr, target, start, end) => {
  if (start > end) return false;

  const mid = Math.floor((start + end) / 2);

  if (arr[mid] === target) return true;
  if (arr[mid] < target) return binarySearch(arr, target, mid + 1, end);
  if (arr[mid] > target) return binarySearch(arr, target, start, mid - 1);
};

const compute = (N, A, M, T) => {
  A.sort((a, b) => a - b);

  return T.map((t) => binarySearch(A, t, 0, N - 1)).map(Number);
};

run();
