const input = () => {
  const [N, line] = require("fs").readFileSync(0, "utf8").trim().split("\n");

  return [Number(N), line.split(" ").map(Number)];
};

const compute = (N, X) => {
  const s = new Set(X);
  const sorted = [...s].sort((a, b) => a - b);
  const map = new Map(sorted.map((n, i) => [n, i]));

  return X.map((n) => map.get(n)).join(" ");
};

console.log(compute(...input()));
