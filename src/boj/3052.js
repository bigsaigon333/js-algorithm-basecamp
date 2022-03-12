const input = () =>
  require("fs").readFileSync(0, "utf8").split("\n").map(Number);

const DIVISOR = 42;

const compute = (nums) => new Set(nums.map((num) => num % DIVISOR)).size;

console.log(compute(input()));
