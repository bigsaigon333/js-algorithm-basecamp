const input = () => {
  const nums = require("fs")
    .readFileSync(0, "utf8")
    .trim()
    .split(" ")
    .map(Number);

  return nums;
};

const add = (a, b) => Number(`${a}${b}`);

const compute = (a, b, c, d) => {
  return add(a, b) + add(c, d);
};

console.log(compute(...input()));
