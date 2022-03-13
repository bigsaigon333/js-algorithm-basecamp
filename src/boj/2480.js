const input = () =>
  require("fs").readFileSync(0, "utf8").trim().split(" ").map(Number);

const compute = (nums) => {
  const counts = new Map();
  nums.forEach((num) => counts.set(num, (counts.get(num) || 0) + 1));

  const [[max]] = [...counts.entries()].sort(([k1, v1], [k2, v2]) =>
    v2 === v1 ? k2 - k1 : v2 - v1
  );

  if (counts.size === 1) return 10_000 + 1_000 * max;
  if (counts.size === 2) return 1_000 + 100 * max;
  return 100 * max;
};

console.log(compute(input()));
