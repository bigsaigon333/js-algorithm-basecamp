const input = () => {
  return Number(require("fs").readFileSync(0, "utf8").trim());
};

const sumUntil = (n) => (n * (n + 1)) / 2;

const compute = (N) => {
  let c = 1;
  while (sumUntil(c) > N || sumUntil(c + 1) <= N) {
    c++;
  }

  return c;
};

console.log(compute(input()));
