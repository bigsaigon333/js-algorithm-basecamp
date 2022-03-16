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

  const visited = Array(N).fill(-1);

  const rec = (K) => {
    if (K === N) {
      max = Math.max(max, sum(visited.map((i) => A[i])));
      return;
    }

    for (let i = 0; i < N; i++) {
      if (visited[i] >= 0) continue;
      visited[i] = K;
      rec(K + 1);
      visited[i] = -1;
    }
  };

  rec(0);

  return max;
};

console.log(compute(...input()));
