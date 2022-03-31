const input = require("fs").readFileSync(0, "utf8").trim().split("\n");
const N = +input[0];
const nums = input[1].split(" ").map(Number);

const set = new Set(
  Array(N)
    .fill()
    .map((_, i) => i + 1)
);
nums.forEach((n) => set.delete(n));
console.log(set.values().next().value);
