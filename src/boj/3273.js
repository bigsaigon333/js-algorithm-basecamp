const input = () => {
  const [n, line, x] = require("fs").readFileSync(0, "utf8").trim().split("\n");

  return [Number(n), line.split(" ").map(Number), Number(x)];
};

const compute = (n, a, x) => {
  const set = new Set();
  let count = 0;
  for (const num of a) {
    if (set.has(x - num)) count++;
    set.add(num);
  }

  return count;
};

console.log(compute(...input()));
