const input = () => Number(require("fs").readFileSync(0, "utf8").trim());

const factorial = (n) => {
  if (n === 0) return 1;

  return n * factorial(n - 1);
};

const compute = (n) => {
  return factorial(n);
};

console.log(compute(input()));
