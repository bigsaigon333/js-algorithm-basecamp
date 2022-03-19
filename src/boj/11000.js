const input = () => {
  const [, ...lines] = require("fs").readFileSync(0, "utf8").trim().split("\n");

  return lines.map((line) => line.split(" ").map(Number));
};

const compute = (nums) =>
  nums
    .flatMap(([s, t]) => [
      [s, true],
      [t, false],
    ])
    .sort(([n1, b1], [n2, b2]) => n1 - n2 || b1 - b2)
    .map(([, b]) => (b ? 1 : -1))
    .reduce(
      ([acc, max], b) => [acc + b, Math.max(max, acc + b)],
      [0, -Infinity]
    )[1];

console.log(compute(input()));
