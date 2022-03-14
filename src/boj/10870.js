const input = () => Number(require("fs").readFileSync(0, "utf8").trim());

const fibo = (n) => {
  if (n === 0) return 0;
  if (n === 1) return 1;

  return fibo(n - 1) + fibo(n - 2);
};

const compute = (n) => {
  return fibo(n);
};

console.log(compute(input()));
