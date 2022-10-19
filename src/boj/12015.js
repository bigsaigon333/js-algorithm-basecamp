const input = () => {
  const [N, line] = require("fs").readFileSync(0, "utf8").trim().split("\n");

  return [Number(N), line.split(" ").map(Number)];
};

const run = (A, len) => {
  if (len === 1) return true;

  for (let i = 0; i < A.length - len + 1; i++) {
    let count = 1;
    let prev = A[i];
    for (let j = i + 1; j < A.length; j++) {
      if (prev < A[j]) {
        count++;
        prev = A[j];
      }
      if (count >= len) return true;
    }
  }

  return false;
};

const binarySearch = (A, start, end) => {
  if (start > end) return end;

  const mid = Math.floor((start + end) / 2);
  const b = run(A, mid);

  return b ? binarySearch(A, mid + 1, end) : binarySearch(A, start, mid - 1);
};

const compute = (N, A) => binarySearch(A, 1, N);

console.log(compute(...input()));
