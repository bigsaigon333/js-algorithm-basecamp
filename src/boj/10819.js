const input = () => {
  const [N, A] = require("fs").readFileSync(0, "utf8").trim().split("\n");

  return [Number(N), A.split(" ").map(Number)];
};

const sum = (arr) =>
  Array(arr.length - 1)
    .fill()
    .map((_, i) => i)
    .map((i) => Math.abs(arr[i] - arr[i + 1]))
    .reduce((a, b) => a + b, 0);

const compute = (N, A) => {
  let max = -Infinity;

  const rec = (visited = [], left = A) => {
    if (visited.length === N) {
      max = Math.max(max, sum(visited));
      return;
    }

    for (let i = 0; i < left.length; i++) {
      rec(visited.concat(left[i]), [...left.slice(0, i), ...left.slice(i + 1)]);
    }
  };

  rec();

  return max;
};

console.log(compute(...input()));
