const input = () => {
  const [N, ...lines] = require("fs")
    .readFileSync(0, "utf8")
    .trim()
    .split("\n");

  return [Number(N), lines.map((line) => line.split(" ").map(Number))];
};

const recursive = (arr, N, K) => {
  if (N < K) return [];
  if (K === 1)
    return Array(N)
      .fill()
      .map((_, i) => [arr[i]]);

  return [
    ...recursive(arr, N - 1, K),
    ...recursive(arr, N - 1, K - 1).map((as) => [...as, arr[N - 1]]),
  ];
};

const compute = (N, S) => {
  const sum = (acc, [x, y]) => acc + S[x][y] + S[y][x];

  const all = Array(N)
    .fill()
    .map((_, i) => i);

  let min = Infinity;
  for (const ours of recursive(all, N, N / 2)) {
    const them = all.filter((n) => !ours.includes(n));
    const ourSum = recursive(ours, N / 2, 2).reduce(sum, 0);
    const theirSum = recursive(them, N / 2, 2).reduce(sum, 0);
    const diff = Math.abs(ourSum - theirSum);
    min = Math.min(min, diff);
  }

  return min;
};

console.log(compute(...input()));
