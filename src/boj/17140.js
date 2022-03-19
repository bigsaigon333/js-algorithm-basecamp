const input = () => {
  const [[R, C, K], ...A] = require("fs")
    .readFileSync(0, "utf8")
    .trim()
    .split("\n")
    .map((line) => line.split(" ").map(Number));

  return [R - 1, C - 1, K, A];
};

const count = (arr) => {
  const map = new Map();
  arr.forEach((el) => el && map.set(el, (map.get(el) || 0) + 1));

  return map;
};

const maxColumn = (arr) => Math.max(...arr.map((el) => el.length));

const rotate = (arr) => {
  const result = Array(maxColumn(arr))
    .fill()
    .map(() => []);

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      result[j][i] = arr[i][j];
    }
  }

  return result;
};

const r = (A) =>
  A.map((row) =>
    [...count(row)].sort(([n1, c1], [n2, c2]) => c1 - c2 || n1 - n2).flat()
  );

const c = (A) => rotate(r(rotate(A)));

const MAX = 100;

const compute = (R, C, K, A) => {
  let arr = A;
  for (let i = 0; i <= MAX; i++) {
    if (arr.length > R && arr[R][C] === K) return i;
    arr = arr.length >= maxColumn(arr) ? r(arr) : c(arr);
  }

  return -1;
};

console.log(compute(...input()));
